import React, { useEffect, useState } from 'react'
import { ButtonBorder } from '../../../component/elements/button-border';
import { Delete } from "@mui/icons-material"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import instance from '../../../middleware/api';
import Swal from 'sweetalert2'
function HalamanBeginer() {
    const location = useLocation()
    
    const name = location.pathname.split("/")[3]
    const id = location.pathname.split("/")[4]

    const [unit, setUnit] = useState()
    const [Loading, setLoading] = useState()

    useEffect(() => {
        instance.get(`/admin/unit?category_id=${id}`).then(d => {
            setUnit(d.data.items)
        })
    }, [Loading])

    const onDelete = async (id, category_id) => {
        setLoading(false)
        try {
            await instance.delete(`/admin/unit/delete?id=${id}&category_id=${category_id}`)
            Swal.fire({
                title: "BERHASIL",
                icon: "success",
                text: "Hapus Unit Berhasil",
            })
            setLoading(true)
        } catch (error) {
            Swal.fire({
                title: "BERHASIL",
                icon: "error",
                text: "Gagal Hapus Unit",

            })
            setLoading(true)
        }
    }

    return (
        <>
            <div className='container mx-auto mt-8'>
                <div>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        {name}
                    </button>
                </div>
                <div className="mt-4 float-right">
                    <Link to={`/admin/halamankategori/halamanunit/add/${name}/${id}`}>
                        <ButtonBorder>
                            Tambah Data</ButtonBorder>
                    </Link>
                </div><br />
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20 bg-white">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-xs  text-black uppercase bg-FFF3F3-50 dark:bg-red-100 dark:text-black">
                            <tr>

                                <th scope="col" className="px-6 py-3">
                                    Unit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jumlah Stage
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {unit ? unit.length !== 0 ? unit.map(d => {
                                return <tr key={d._id} className="odd:bg-white odd:dark:bg-white-900 even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-white-700">

                                    <td className="px-6 py-4">
                                        {d.unit}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.stages}
                                    </td>
                                    <td className="px-6 py-4 w-[20%]">
                                        <button onClick={() => onDelete(d._id, id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2">{<Delete></Delete>}</button>
                                        <Link to={`/admin/halamankategori/halamanunit/edit/${name}/${d._id}_${id}`}>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2">{<BorderColorIcon></BorderColorIcon>}</button>
                                        </Link>
                                        <Link to={`/admin/halamankategori/halamanstage/${name}/${id}/${d.unit}/${d._id}`}>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2">{<RemoveRedEyeIcon></RemoveRedEyeIcon>}</button>
                                        </Link>
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

export default HalamanBeginer