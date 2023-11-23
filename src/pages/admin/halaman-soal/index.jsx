import React from 'react'
import { ButtonBorder } from '../../../component/elements/button-border';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function HalamanSoal() {
  return (
    <>
    <div className='container mx-auto mt-8'>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Beginner
</button>
<span className="m-3">/</span>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Unit 1
</button>
<span className="m-3">/</span>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Stage 1
</button>
<span className="m-3">/</span>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Soal 1
</button>

<div className="mt-4 float-right">
<ButtonBorder>Tambah Data</ButtonBorder>
</div><br />
<div className='card flex flex-col bg-white mt-4 container '>
        <div className='body w-full  h-40  bg-white-300 '>
            <div className='ml-10 text-black mt-20'>
                <span>Soal</span>
                <div className="float-right"><TextField id="outlined-basic" placeholder='Tuliskan dalam bentuk Bahasa Indonesia! Dhahar!'  variant="outlined" style={{ width: '600px' }}/></div>
            </div>
        </div>

        <div className='body w-full h-40  bg-white-300 '>
            <div className='ml-10 text-black '>
                <span>Jawaban</span>
                <div className="float-right"><TextField id="outlined-basic" placeholder='Makan' variant="outlined" style={{ width: '600px' }}/></div>
            </div>
        </div>
        <div className='body w-full  h-20  bg-white-300 '>
            <div className='ml-10 text-black '>
                <span>Pilihan Jawaban</span>
                <div className="w-1/2 h-full float-right">
                <textarea
                  id="about"
                  name="about"
                  placeholder='Makan'
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-gray-100 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
                </div>
            </div>
        </div>
        <div className="mt-4 flex items-center justify-center ">
        <ButtonBorder>Simpan</ButtonBorder>
        </div>
        
        
      </div>
    </div>
    </>
  )
}

export default HalamanSoal