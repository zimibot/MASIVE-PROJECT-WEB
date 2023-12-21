import React, { useEffect, useState } from 'react'
import { ButtonBorder } from '../../../component/elements/button-border';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { Button, Card } from "@mui/material"
import { Link } from 'react-router-dom';
import instance from '../../../middleware/api';
import Swal from 'sweetalert2'

function HalamanKategori() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        instance.get("/admin/category").then(d => {
            setData(d.data.items)
        })
    }, [loading])


    const onDelete = (id) => {
        setLoading(false)
        instance.delete(`/admin/category/delete?id=${id}`).then(() => {
            Swal.fire({
                icon: "success",
                title: "Menghapus Category Berhasil",
                didClose: () => {
                    setLoading(true)
                }
            })
        }).catch(() => {
            setLoading(true)
        })
    }
    return (
        <>
            <div className='container mx-auto mt-8'>
                <div><h3>Overview Kategori</h3></div>
                <div className="mt-4 float-right">
                    <Link to="/admin/tambahkategori">
                        <ButtonBorder>
                            Tambah Data</ButtonBorder>
                    </Link>

                </div><br />
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20 bg-white">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-xs  text-black uppercase bg-FFF3F3-50 dark:bg-red-100 dark:text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Kategori Soal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jumlah Unit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data ? data.length !== 0 ? data.map(d => {
                                return <tr key={d._id} className="odd:bg-white odd:dark:bg-white-900 even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-white-700">
                                    <td className="px-6 py-4">
                                        {d.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d?.unit || 0}
                                    </td>
                                    <td className="px-6 py-4 space-x-2 w-[15%]">
                                        <Button onClick={() => onDelete(d._id)} color="error" variant="contained"><Delete></Delete></Button>
                                        {/* <Link to={`/admin/halamankategori/edit/${d.name}`}><Button color="error" variant="contained"><Edit></Edit></Button></Link> */}
                                        <Link to={`/admin/halamankategori/${d.name}/${d._id}`}><Button color="error" variant="contained"><Visibility></Visibility></Button></Link>

                                    </td>
                                </tr>
                            }) : <tr><td colSpan={3}>
                                <div className="p-4 flex items-center justify-center w-full">Data tidak ditemukan</div>
                            </td></tr> : null}

                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="mt-3  float-right mr-14">
                <Stack spacing={2}>
                    <Pagination count={5} variant="outlined" shape="rounded" />
                </Stack>
            </div> */}
        </>
    )
}




export default HalamanKategori