import React from 'react'
import { ButtonBorder } from '../../../component/elements/button-border';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function HelpCenterAdmin() {
  return (
    <>
    <div className='container mx-auto mt-8'>
    <div><h3>Overview Help Center</h3></div>
<div className="mt-4 float-right">
<ButtonBorder>Tambah Data</ButtonBorder>
</div><br />
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
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
                <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
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
                +62 xxxx xxxx xxxx
                </td>
                <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
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
                +62 xxxx xxxx xxxx
                </td>
                <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
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
                +62 xxxx xxxx xxxx
                </td>
                <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
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
                +62 xxxx xxxx xxxx
                </td>
                <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
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
                +62 xxxx xxxx xxxx
                </td>
                <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
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
                +62 xxxx xxxx xxxx
                </td>
                <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
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
                +62 xxxx xxxx xxxx
                </td>
                <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
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
                +62 xxxx xxxx xxxx
                </td>
                <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
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
                +62 xxxx xxxx xxxx
                </td>
                <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">S</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
    <div className="mt-3  float-right mr-14">
    <Stack spacing={2}>
      <Pagination count={5} variant="outlined" shape="rounded" />
    </Stack>
    </div>
    </>
  )
}

export default HelpCenterAdmin