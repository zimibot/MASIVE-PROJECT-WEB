import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ButtonBorder } from '../../../component/elements/button-border';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Jabar from "../../../assets/jabar.png";
import Petir from "../../../assets/icon/petir.png";
import Waktu from "../../../assets/icon/waktu.png";



function Profil() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[200px] h-[200px] bg-zinc-300 rounded-full"></div>
        <p className="text-neutral-700 text-[25px] font-bold font-['Inter'] leading-[18px] tracking-tight">Galih Yoga</p>
        <p className="text-zinc-400 text-[15px] font-medium font-['Inter'] leading-[18px] tracking-tight">galihyoga@gmail.com</p>
        <p className="text-neutral-500 text-[15px] font-medium font-['Inter'] leading-[18px] tracking-tight"><AccessTimeIcon></AccessTimeIcon> Bergabung pada November 2023</p>
        <ButtonBorder className="w-[189px]"><p className="normal-case">Edit Profile</p></ButtonBorder>
      </div>

      <div className="flex flex-col items-center gap-8 mt-28">
        <div>
          <p className="text-black text-xl font-semibold font-['Inter'] leading-[18px] tracking-tight">Statistik</p>
        </div>
        <div className="flex flex-row gap-7">
          <div className="w-[272px] h-[78px] bg-white rounded-[15px] border-2 border-neutral-200 flex flex-row items-center">
            <img src={Petir} alt="" className="w-[30px] h-[39px] ms-4" />
            <div className="flex flex-col ms-8">
              <p className="text-neutral-700 text-lg font-bold font-['Inter'] leading-tight">27</p>
              <p className="text-zinc-400 text-sm font-medium font-['Inter'] leading-tight">total xp</p>
            </div>
          </div>
          <div className="w-[272px] h-[78px] bg-white rounded-[15px] border-2 border-neutral-200 flex flex-row items-center">
            <img src={Waktu} alt="" className="w-[45.58px] h-[45px] bg-orange-500 rounded-full ms-4" />
            <div className="flex flex-col ms-8">
              <p className="text-neutral-700 text-lg font-bold font-['Inter'] leading-tight">2j, 45m</p>
              <p className="text-zinc-400 text-sm font-medium font-['Inter'] leading-tight">Waktu Belajar</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-7 mt-28">
        <p className="text-black text-xl font-semibold font-['Inter'] leading-[18px] tracking-tight">Dipelajari Terakhir</p>
        <ButtonBorder
          className=' w-[738px]  h-[171px] '
          iconLeft={<img src={Jabar}></img>}
          iconRight={<KeyboardArrowRightIcon className='bg-neutral-300 rounded-full ms-11' color='action'></KeyboardArrowRightIcon>}>
          <div className='flex flex-col items-start'>
            <p className='normal-case text-xl'>Bahasa Jawa</p>
            <div className='flex flex-row items-center gap-3'>
              <div className="w-[357px] h-[9px] bg-zinc-300 rounded-[10px]">
                <div className="w-[188px] h-[9px] bg-amber-500 rounded-[10px]"></div>
              </div>
              <p>60%</p>

            </div>
            <p className="text-xs normal-case font-thin">Stage 3</p>

          </div>

        </ButtonBorder>
      </div>
    </div>
  )
}

export default Profil