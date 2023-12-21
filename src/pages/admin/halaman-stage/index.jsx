import React, { useEffect, useState } from 'react'
import { ButtonBorder } from '../../../component/elements/button-border';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { Button } from "@mui/material"
import { Link, useLocation } from 'react-router-dom';
import instance from '../../../middleware/api';
import Swal from 'sweetalert2'


function HalamanStage() {
    const [data, setData] = useState()
    const [loading, setloading] = useState(false)
    const parts = useLocation().pathname.split("/")
    const path = useLocation().pathname

    // Function to check if a part of the URL is a MongoDB ObjectId
    const isObjectId = (part) => /^[0-9a-fA-F]{24}$/.test(part);

    // Find the first two occurrences of ObjectIds in the URL
    const objectIds = parts.filter(part => isObjectId(part));
    // Assuming the structure of the URL is consistent,
    // 'Beginner' should be at the 6th position and 'test' at the 8th position
    const beginner = parts[4];
    const test = parts[6];


    useEffect(() => {
        instance.get(`/admin/stage?category_id=${objectIds[0]}&unit_id=${objectIds[1]}`).then(d => {
            setData(d.data.items)
        })
    }, [loading])


    const onDelete = async (id) => {
        setloading(true)
        try {
            await instance.delete(`/admin/stage/${id}/delete/${objectIds[1] }`)

            Swal.fire({
                title: "BERHASIL",
                icon: "success",
                text: "Berhasil Hapus stage",
            })
            setloading(false)
        } catch (error) {
            Swal.fire({
                title: "GAGAL",
                icon: "error",
                text: "Gagal Hapus stage",

            })
            setloading(false)
        }
    }



    return (
        <>
            <div className='container mx-auto mt-8'>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    {beginner.replace(/%20/g, " ")}
                </button>
                <span className="m-3">/</span>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    {test?.replace(/%20/g, " ")}
                </button>
                <div className="mt-4 float-right">
                    <Link to={`${path}/add`}>
                        <ButtonBorder>Tambah Data</ButtonBorder>
                    </Link>
                </div><br />
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20 bg-white">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-xs  text-black uppercase bg-FFF3F3-50 dark:bg-red-100 dark:text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Stage
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jumlah Soal
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data ? data.length === 0 ? <tr><td colSpan={3}>
                                <div className="p-4 flex items-center justify-center w-full">Data tidak ditemukan</div>
                            </td></tr> : data?.map(d => {
                                return <tr key={d._id} className="odd:bg-white odd:dark:bg-white-900 even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-white-700">
                                    <td className="px-6 py-4">
                                        {d.stage}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.soal}
                                    </td>
                                    <td className="px-6 py-4 space-x-2 w-[20%]">
                                        <Button onClick={() => onDelete(d._id)} color="error" variant="contained"><Delete></Delete></Button>
                                        <Link to={`${path}/edit/${d._id}`}><Button color="error" variant="contained"><Edit></Edit></Button></Link>
                                        <Link to={`${path}/soal/${d._id}`}><Button color="error" variant="contained"><Visibility></Visibility></Button></Link>
                                    </td>
                                </tr>
                            }) : null}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default HalamanStage