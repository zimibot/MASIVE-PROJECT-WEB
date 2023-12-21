import React, { useEffect, useState } from 'react'
import { ButtonBorder } from '../../../component/elements/button-border';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { Button, Card } from "@mui/material"
import instance from '../../../middleware/api';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'


function DataUser() {

    const [data, setData] = useState()
    const [loading, setloading] = useState()
    const location = useLocation()
    const path = location.pathname
    useEffect(() => {
        instance.get("/admin/user").then(a => {
            setData(a.data.items)
        })
    }, [loading])

    

    const onDelete = async (id) => {
        setloading(true)
        try {

            await instance.delete(`/admin/user/${id}/delete`)
            Swal.fire({
                title: "BERHASIL",
                icon: "success",
                text: "Berhasil Hapus User",
            })
            setloading(false)
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "GAGAL",
                icon: "error",
                text: "Gagal Hapus User",

            })
            setloading(false)
        }
    }
    return (
        <>
            <Card className="p-5 space-y-5 flex-1" sx={{
                borderRadius: 3
            }}>
                <div className="flex justify-between items-center">
                    <div className="font-bold">
                        Overview Data User
                    </div>
                    <div className="float-right">
                        <ButtonBorder href={`${path}/add`}>Tambah Data</ButtonBorder>
                    </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-xs  text-black uppercase bg-FFF3F3-50 dark:bg-red-100 dark:text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama User
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Username
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Roles
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(d => {
                                return <tr key={d._id} className="odd:bg-white odd:dark:bg-white-900 even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-white-700">
                                    <td className="px-6 py-4">
                                        {d.fullname}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.username}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.roles}
                                    </td>
                                    <td className="px-6 py-4 space-x-2 w-[200px]">
                                        <Button onClick={() => onDelete(d._id)} color="error" variant="contained"><Delete></Delete></Button>
                                        <Button href={`${path}/edit/${d._id}`} color="error" variant="contained"><Edit></Edit></Button>
                                        {/* <Button color="error" variant="contained"><Visibility></Visibility></Button> */}
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
                {/* <div className=" float-right">
                    <ElPaggination></ElPaggination>
                </div> */}
            </Card>

        </>
    )
}

export default DataUser