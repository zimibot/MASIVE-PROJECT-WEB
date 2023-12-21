import React, { useState } from 'react';
import { AppRegistration, Google } from "@mui/icons-material";
import { ButtonBorder } from "../../../component/elements/button-border";
import Logo from "../../../assets/logo.svg";
import Joi from 'joi';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import api from '../../../middleware/api'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import { useNavigate, Navigate } from 'react-router-dom';
import instance from '../../../middleware/api';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const redirect = useNavigate()

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Fungsi untuk validasi input
    const validateInput = () => {
        const schema = Joi.object({
            email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
            password: Joi.string().min(6).required().label("Password")
        });

        const { error } = schema.validate(formData, { abortEarly: false });
        if (!error) return null;

        const newErrors = {};
        error.details.forEach(detail => {
            newErrors[detail.path[0]] = detail.message;
        });
        return newErrors;
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newErrors = validateInput();
            setErrors(newErrors || {});



            if (!newErrors) {

                let postApi = await api.post("/users/auth/login", formData)
                // Logika submit form di sini

                if (postApi.status === 201) {
                    toast.success("Berhasil Login !");
                    window.localStorage.setItem("token", postApi.data.token)
                    instance.defaults.headers.common["Authorization"] = postApi.data.token
                    instance.get("/users/detail").then(a => {
                        window.localStorage.setItem("roles", a.data.items.roles)
                        if (a.data.items.roles === "user") {
                            redirect("/user")
                        } else {
                            redirect("/admin")
                        }
                    })
                }
            }
        } catch (error) {

            Swal.fire({
                title: "ERROR!!",
                icon: "error",
                text: error?.response?.data
            })
        }

    };

    if (window.localStorage.getItem("token")) {
        return <Navigate to={"/"}></Navigate>
    }



    return <div className="flex items-center px-6 absolute h-full justify-center w-full">
        <div className="max-w-lg space-y-[40px]">
            <div className="flex justify-center">
                <figure><img width={350} src={Logo} alt="Logo" className='Card-Image' /></figure>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="block w-full px-4 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    {errors.email && <p className="text-red-600 text-[13px] italic">{errors.email}</p>}
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="block w-full px-4 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={handleChange}
                        value={formData.password}
                    />
                    {errors.password && <p className="text-red-600 text-[13px] italic">{errors.password}</p>}
                </div>
                <div>
                    <ButtonBorder fullWidth type="submit">LOGIN</ButtonBorder>
                </div>
            </form>
            <p className="mt-6 text-sm text-center text-gray-400">------------------------or------------------------</p>
            <div className="mt-6 space-x-4 flex justify-center">
                <ButtonBorder href="/registrasi" iconLeft={<AppRegistration />} color="inherit" variant="outlined">Registrasi</ButtonBorder>
                <GoogleOAuthProvider clientId='437848951156-k83vfrl0kn8ousfv70bdai674fdiu6uf.apps.googleusercontent.com'>
                    <ButtonGoogle></ButtonGoogle>
                </GoogleOAuthProvider>


            </div>
            <p className="mt-6 text-sm text-center text-gray-400">By signing in, you agree to our Terms and <b>Privacy Policy.</b></p>
            <p className="mt-6 text-sm text-center text-gray-400">This site is protected by reCAPTCHA Enterprise and the Google <b>Privacy Policy</b> and <b>Terms of Service</b> apply.</p>
        </div>
    </div>
}

const ButtonGoogle = () => {
    const redirect = useNavigate()

    const login = useGoogleLogin({
        onSuccess: async codeResponse => {
            try {
                let postApi = await api.post("/users/auth/google-auth", { code: codeResponse.code })
                window.localStorage.setItem("token", postApi.data.token)
                instance.defaults.headers.common["Authorization"] = postApi.data.token
                instance.get("/users/detail").then(a => {
                    window.localStorage.setItem("roles", a.data.items.roles)
                    if (a.data.items.roles === "user") {
                        redirect("/user")
                    } else {
                        redirect("/admin")
                    }
                })

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

    return <ButtonBorder
        iconLeft={<Google />}
        color="inherit"
        variant="outlined"
        onClick={login}
    >
        Login with Google
    </ButtonBorder>

}

export default Login;
