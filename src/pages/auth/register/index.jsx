import React, { useState } from 'react';
import Joi from 'joi';
import { Google, Login } from "@mui/icons-material";
import { ButtonBorder } from "../../../component/elements/button-border";
import Logo from "../../../assets/logo.svg";
import instance from '../../../middleware/api';
import Swal from 'sweetalert2'
import { useNavigate, Navigate } from "react-router-dom";
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';
import api from '../../../middleware/api'

const Register = () => {
    const [formData, setFormData] = useState({
        date_birth: '',
        fullname: '',
        username: '',
        email: '',
        password: '',
        "re-password": '',
    });

    const [errors, setErrors] = useState({});

    const schema = Joi.object({
        date_birth: Joi.date().required().label('Date birth'),
        username: Joi.string().required().label('Username'),
        fullname: Joi.string().required().label('Fullname'),
        email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
        password: Joi.string().min(6).required().label('Password'),
        "re-password": Joi.string().valid(Joi.ref('password')).required().messages({ 'any.only': 'Passwords do not match' }).label('Re Password'),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    let nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = schema.validate(formData, { abortEarly: false });
        try {
            if (error) {
                const newErrors = {};
                error.details.forEach(item => newErrors[item.path[0]] = item.message);
                setErrors(newErrors);

            } else {

                setErrors({});
                // Process the form data here
                const regis = await instance.post("/register/create", formData)


                if (regis.status === 201) {
                    Swal.fire({
                        title: "BERHASIL",
                        text: regis.data.message,
                        icon: "success",
                        didClose: () => {
                            nav("/user/dashboard")
                        }
                    })
                }

            }
        } catch (error) {
            Swal.fire({
                title: "GAGAL",
                text: error.response.data.message,
                icon: "error"
            })
        }
    };
    if (window.localStorage.getItem("token")) {
        return <Navigate to={"/"}></Navigate>
    }



    return (
        <div className="flex items-center px-6 absolute h-full justify-center w-full">
            <div className="max-w-lg">
                <div className="flex justify-center">
                    <figure><img width={350} src={Logo} className='Card-Image' alt="Logo" /></figure>
                </div>
                <div className="mt-16">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="date" name="date_birth" placeholder="Age" value={formData.date_birth} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-full" />
                            {errors.date_birth && <div className="text-red-500 text-xs py-2 pl-4">{errors.date_birth}</div>}
                        </div>
                        <div>
                            <input type="text" name="fullname" placeholder="Fullname" value={formData.fullname} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-full" />
                            {errors.fullname && <div className="text-red-500 text-xs py-2 pl-4">{errors.fullname}</div>}
                        </div>
                        <div>
                            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-full" />
                            {errors.username && <div className="text-red-500 text-xs py-2 pl-4">{errors.username}</div>}
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-full" />
                            {errors.email && <div className="text-red-500 text-xs py-2 pl-4">{errors.email}</div>}
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-full" />
                            {errors.password && <div className="text-red-500 text-xs py-2 pl-4">{errors.password}</div>}
                        </div>
                        <div>
                            <input type="password" name="re-password" placeholder="Re Password" value={formData["re-password"]} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-full" />
                            {errors["re-password"] && <div className="text-red-500 text-xs py-2 pl-4">{errors["re-password"]}</div>}
                        </div>
                        <div className="mt-6 ">
                            <ButtonBorder type="submit" fullWidth>Register</ButtonBorder>
                        </div>
                    </form>
                    <p className="mt-6 text-sm text-center text-gray-400">------------------------or------------------------</p>
                    <div className="mt-6 space-x-4 flex justify-center">
                        <ButtonBorder href="/login" iconLeft={<Login />} color="inherit" variant="outlined">Login</ButtonBorder>
                        <GoogleOAuthProvider clientId='437848951156-k83vfrl0kn8ousfv70bdai674fdiu6uf.apps.googleusercontent.com'>
                            <RegisAuth></RegisAuth>
                        </GoogleOAuthProvider>


                    </div>
                    <p className="mt-6 text-sm text-center text-gray-400">By signing in, you agree to our Terms and <b>Privacy Policy.</b></p>
                    <p className="mt-6 text-sm text-center text-gray-400">This site is protected by reCAPTCHA Enterprise and the Google <b>Privacy Policy</b> and <b>Terms of Service</b> apply.</p>
                </div>
            </div>
        </div>
    );
}


const RegisAuth = () => {
    let nav = useNavigate()

    const login = useGoogleLogin({
        onSuccess: async codeResponse => {
            try {
                let postApi = await api.post("/users/auth/google-auth", { code: codeResponse.code, regis: true })
                toast.success("Registrasi Success, Redirect To Dashboard !");
                nav("/create-password")
                window.localStorage.setItem('token', postApi.data.token)
            } catch (error) {
                console.log(error)
                Swal.fire({
                    title: "ERROR!!",
                    icon: "error",
                    text: error.response.data
                })
            }
        },
        flow: 'auth-code',
    });

    return <ButtonBorder iconLeft={<Google />} onClick={login} color="inherit" variant="outlined">Registrasi with Google</ButtonBorder>

}

export default Register;
