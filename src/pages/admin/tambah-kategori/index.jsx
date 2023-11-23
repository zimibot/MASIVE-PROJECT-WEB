import React from 'react'
import TextField from '@mui/material/TextField';
import { ButtonBorder } from '../../../component/elements/button-border';

function TambahKategori() {
  return (
    <>
    <div className='card flex flex-col bg-white mt-4 container '>
        <div className='header-card w-full h-16 bg-red-700 text-white  rounded-t-lg '>
        <div className=" ml-4 mt-4">Tambahkan Kategori</div>
        </div>
        <div className='body w-full  h-60  bg-white-300 '>
            <div className='ml-10 text-black mt-20'>
                <span>Kategori</span>
                <div className="float-right"><TextField id="outlined-basic"  variant="outlined" style={{ width: '600px' }}/></div>
            </div>
        </div>

        
        <div className="mt-4 flex items-center justify-center ">
        <ButtonBorder>Simpan</ButtonBorder>
        </div>
        
        
      </div>
      
    </>
  )
}

export default TambahKategori