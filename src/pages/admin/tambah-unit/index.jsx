import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ButtonBorder } from '../../../component/elements/button-border';


function TambahUnit() {
  return (
    <>
    <div className='card flex flex-col bg-white mt-4 container '>
        <div className='header-card w-full h-16 bg-red-700 text-white  rounded-t-lg '>
        <div className=" ml-4 mt-4">Tambahkan Unit</div>
        </div>
        <div className='body w-full  h-60  bg-white-300 '>
            <div className='ml-10 text-black mt-20'>
                <span>Soal</span>
                <div className="float-right"><TextField id="outlined-basic"  variant="outlined" style={{ width: '600px' }}/></div>
            </div>
        </div>

        <div className='body w-full h-40  bg-white-300 '>
            <div className='ml-10 text-black '>
                <span>Jawaban</span>
                <div className="float-right"><TextField id="outlined-basic" variant="outlined" style={{ width: '600px' }}/></div>
            </div>
        </div>
        <div className='body w-full  h-60  bg-white-300 '>
            <div className='ml-10 text-black '>
                <span>Pilihan Jawaban</span>
                <div className="w-1/2 h-full float-right">
                <textarea
                  id="about"
                  name="about"
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
      
    </>
  )
}

export default TambahUnit