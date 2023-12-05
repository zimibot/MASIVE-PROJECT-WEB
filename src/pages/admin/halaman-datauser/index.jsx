import React from 'react'
import { ButtonBorder } from '../../../component/elements/button-border';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { ElPaggination } from "../../../component/elements/paggination"
import { Button, Card } from "@mui/material"



function DataUser() {
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
                        <ButtonBorder>Tambah Data</ButtonBorder>
                    </div>
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
                                    Username
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
                                    Galih001
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Button color="error" variant="contained"><Delete></Delete></Button>
                                    <Button color="error" variant="contained"><Edit></Edit></Button>
                                    <Button color="error" variant="contained"><Visibility></Visibility></Button>
                                </td>
                            </tr>
                            <tr className="odd:bg-gray odd:dark:bg-white-900 even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-white-700">
                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                    2
                                </th>
                                <td className="px-6 py-4">
                                    Yoga
                                </td>
                                <td className="px-6 py-4">
                                    Yoga@gmail.com
                                </td>
                                <td className="px-6 py-4">
                                    Yoga002
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Button color="error" variant="contained"><Delete></Delete></Button>
                                    <Button color="error" variant="contained"><Edit></Edit></Button>
                                    <Button color="error" variant="contained"><Visibility></Visibility></Button>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-white-900 even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-white-700">
                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                    3
                                </th>
                                <td className="px-6 py-4">
                                    Abimanyu
                                </td>
                                <td className="px-6 py-4">
                                    Abimayu@gmail.com
                                </td>
                                <td className="px-6 py-4">
                                    Abimanyu003
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Button color="error" variant="contained"><Delete></Delete></Button>
                                    <Button color="error" variant="contained"><Edit></Edit></Button>
                                    <Button color="error" variant="contained"><Visibility></Visibility></Button>
                                </td>
                            </tr>
                            <tr className="odd:bg-gray odd:dark:bg-white-900 even:bg-gray-50 even:dark:bg-white-800 border-b dark:border-white-700">
                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                    4
                                </th>
                                <td className="px-6 py-4">
                                    Nurdila
                                </td>
                                <td className="px-6 py-4">
                                    Nurdila@gmail.com
                                </td>
                                <td className="px-6 py-4">
                                    Nurdila004
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Button color="error" variant="contained"><Delete></Delete></Button>
                                    <Button color="error" variant="contained"><Edit></Edit></Button>
                                    <Button color="error" variant="contained"><Visibility></Visibility></Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    5
                                </th>
                                <td className="px-6 py-4">
                                    Fawwaz
                                </td>
                                <td className="px-6 py-4">
                                    Fawwaz@gmail.com
                                </td>
                                <td className="px-6 py-4">
                                    Fawwaz005
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Button color="error" variant="contained"><Delete></Delete></Button>
                                    <Button color="error" variant="contained"><Edit></Edit></Button>
                                    <Button color="error" variant="contained"><Visibility></Visibility></Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    6
                                </th>
                                <td className="px-6 py-4">
                                    Mubarak
                                </td>
                                <td className="px-6 py-4">
                                    Mubarak@gmail.com
                                </td>
                                <td className="px-6 py-4">
                                    Mubarak006
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Button color="error" variant="contained"><Delete></Delete></Button>
                                    <Button color="error" variant="contained"><Edit></Edit></Button>
                                    <Button color="error" variant="contained"><Visibility></Visibility></Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    7
                                </th>
                                <td className="px-6 py-4">
                                    Rina
                                </td>
                                <td className="px-6 py-4">
                                    Rina@gmail.com
                                </td>
                                <td className="px-6 py-4">
                                    Rina007
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Button color="error" variant="contained"><Delete></Delete></Button>
                                    <Button color="error" variant="contained"><Edit></Edit></Button>
                                    <Button color="error" variant="contained"><Visibility></Visibility></Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    8
                                </th>
                                <td className="px-6 py-4">
                                    Mira
                                </td>
                                <td className="px-6 py-4">
                                    Mira@gmail.com
                                </td>
                                <td className="px-6 py-4">
                                    Mira008
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Button color="error" variant="contained"><Delete></Delete></Button>
                                    <Button color="error" variant="contained"><Edit></Edit></Button>
                                    <Button color="error" variant="contained"><Visibility></Visibility></Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    9
                                </th>
                                <td className="px-6 py-4">
                                    Alfi
                                </td>
                                <td className="px-6 py-4">
                                    Alfi@gmail.com
                                </td>
                                <td className="px-6 py-4">
                                    Alfi009
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Button color="error" variant="contained"><Delete></Delete></Button>
                                    <Button color="error" variant="contained"><Edit></Edit></Button>
                                    <Button color="error" variant="contained"><Visibility></Visibility></Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    10
                                </th>
                                <td className="px-6 py-4">
                                    Isya
                                </td>
                                <td className="px-6 py-4">
                                    Isya@gmail.com
                                </td>
                                <td className="px-6 py-4">
                                    Isya010
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Button color="error" variant="contained"><Delete></Delete></Button>
                                    <Button color="error" variant="contained"><Edit></Edit></Button>
                                    <Button color="error" variant="contained"><Visibility></Visibility></Button>
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

export default DataUser