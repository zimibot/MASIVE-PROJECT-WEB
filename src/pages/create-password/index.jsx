import React, { useState } from 'react';
import Joi from 'joi';
import { ButtonBorder } from "../../component/elements/button-border";
import Logo from "../../assets/logo.svg";
import Swal from 'sweetalert2'
import { useNavigate, Navigate } from "react-router-dom";
import instance from '../../middleware/api';


const CreatePassword = () => {
    const [formData, setFormData] = useState({
        password: '',
        "re-password": '',
    });

    const [errors, setErrors] = useState({});

    const schema = Joi.object({
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
                const regis = await instance.put("/users/create-password", formData)

                if (regis.status === 200) {
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
                title: "ERROR",
                text: error.response.data.message,
                icon: "error"
            })
        }
    };
    if (!window.localStorage.getItem("token")) {
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
                            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-full" />
                            {errors.password && <div className="text-red-500 text-xs py-2 pl-4">{errors.password}</div>}
                        </div>
                        <div>
                            <input type="password" name="re-password" placeholder="Re Password" value={formData["re-password"]} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-full" />
                            {errors["re-password"] && <div className="text-red-500 text-xs py-2 pl-4">{errors["re-password"]}</div>}
                        </div>
                        <div className="mt-6 ">
                            <ButtonBorder type="submit" fullWidth>Create Password</ButtonBorder>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePassword;
