import React from 'react'
import { ButtonBorder } from '../../../component/elements/button-border';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { ElPaggination } from "../../../component/elements/paggination"
import { Button, Card } from "@mui/material"



function HelpCenterAdmin() {
    return (
        <>


            <Card className="p-5 space-y-5 flex-1" sx={{
                borderRadius: 3
            }}>
                <div className="flex justify-between items-center">
                    <div className="font-bold">
                        Overview Help Center
                    </div>
                    {/* <div className="float-right">
                        <ButtonBorder>Tambah Data</ButtonBorder>
                    </div> */}
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-xs  text-black uppercase bg-FFF3F3-50 dark:bg-red-100 dark:text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama User
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-white-900 even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-white-700">
                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                    1
                                </th>
                                <td className="px-6 py-4">
                                    Galih
                                </td>
                                <td className="px-6 py-4">
                                    Galih@gmail.com
                                </td>
                                <td className="px-6 py-4">
                                    +62 7858 8454 6584
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Button color="error" variant="contained"><Delete></Delete></Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className=" float-right">
                    <ElPaggination></ElPaggination>
                </div>
            </Card>

        </>
    )
}

export default HelpCenterAdmin