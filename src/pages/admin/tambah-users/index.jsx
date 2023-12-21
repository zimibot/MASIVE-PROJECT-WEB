import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Joi from 'joi';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import { ButtonBorder } from '../../../component/elements/button-border';
import instance from '../../../middleware/api';

function TambahUsers() {
    const nav = useNavigate();
    const location = useLocation()

    const path = location.pathname.split("/").pop()
    const [formData, setFormData] = useState({
        date_birth: '',
        username: '',
        fullname: '',
        email: '',
        password: '',
        rePassword: ''
    });

    const [errors, setErrors] = useState({});

    const schema = Joi.object({
        date_birth: Joi.date().required().label('Date of Birth'),
        username: Joi.string().required().label('Username'),
        fullname: Joi.string().required().label('Full Name'),
        email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
        password: Joi.string().min(6).required().label('Password'),
        rePassword: Joi.string().valid(Joi.ref('password')).required().messages({ 'any.only': 'Passwords do not match' }).label('Re-Password'),
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (path !== "add") {
            instance.get(`/admin/user/${path}`).then(d => {
                console.log(d)
                setFormData(a => ({
                    ...a, 
                    date_birth: d.data.items?.date_birth || "",
                    username: d.data.items.username,
                    fullname: d.data.items.fullname,
                    email: d.data.items.email,
                }))
            })
        }
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validation = schema.validate(formData, { abortEarly: false });

        if (validation.error) {
            const errorMessages = validation.error.details.reduce((acc, current) => {
                acc[current.path[0]] = current.message;
                return acc;
            }, {});
            setErrors(errorMessages);
            return;
        }

        try {
            setErrors({});

            const data = {
                ...formData,
                "re-password": formData.rePassword
            }
            const regis = await instance.post("/register/create", data)


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
        } catch (error) {
            Swal.fire({
                title: "GAGAL",
                text: error.response.data.message,
                icon: "error"
            })
        }

        // Proceed with form submission, e.g., sending data to backend
    };

    return (
        <>
            <div className='card flex flex-col bg-white mt-4 pb-4'>
                <div className='header-card w-full h-16 bg-red-700 text-white rounded-t-lg'>
                    <div className="ml-4 mt-4">{path === "add" ? "Add" : "Edit"} User</div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-4 container py-6 gap-6">
                    {/* Date of Birth Field */}
                    <div className="col-span-1 flex items-center">
                        <div>Date of Birth</div>
                    </div>
                    <div className="col-span-3">
                        <TextField
                            fullWidth
                            type="date"
                            name="date_birth"
                            value={formData.date_birth}
                            onChange={handleChange}
                            error={!!errors.date_birth}
                            helperText={errors.date_birth}
                        />
                    </div>

                    {/* Username Field */}
                    <div className="col-span-1 flex items-center">
                        <div>Username</div>
                    </div>
                    <div className="col-span-3">
                        <TextField
                            fullWidth
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            error={!!errors.username}
                            helperText={errors.username}
                        />
                    </div>

                    {/* Full Name Field */}
                    <div className="col-span-1 flex items-center">
                        <div>Full Name</div>
                    </div>
                    <div className="col-span-3">
                        <TextField
                            fullWidth
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            error={!!errors.fullname}
                            helperText={errors.fullname}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="col-span-1 flex items-center">
                        <div>Email</div>
                    </div>
                    <div className="col-span-3">
                        <TextField
                            fullWidth
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="col-span-1 flex items-center">
                        <div>Password</div>
                    </div>
                    <div className="col-span-3">
                        <TextField
                            fullWidth
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                    </div>

                    {/* Re-Password Field */}
                    <div className="col-span-1 flex items-center">
                        <div>Re-Password</div>
                    </div>
                    <div className="col-span-3">
                        <TextField
                            fullWidth
                            type="password"
                            name="rePassword"
                            value={formData.rePassword}
                            onChange={handleChange}
                            error={!!errors.rePassword}
                            helperText={errors.rePassword}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4 flex items-center justify-center col-span-4">
                        <ButtonBorder type="submit">Save</ButtonBorder>
                    </div>
                </form>
            </div>
        </>
    );
}

export default TambahUsers;
