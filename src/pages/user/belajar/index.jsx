
import Grid from '@mui/material/Grid';
import { ButtonBorder } from '../../../component/elements/button-border';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import Chess from '../../../assets/icon/chess.png';
import LockShield from '../../../assets/icon/lockshield.png';
import GoldenChess from '../../../assets/icon/goldenchess.png';
import { Link } from 'react-router-dom';

function Belajar() {
    return (
        <Grid container spacing={2}>
            <Grid xs={6} md={8}>
                <div className="container p-5">
                    <div className='ms-9'>
                        <ButtonBorder className="w-[137px] ">
                            <p className='text-white text-base font-semibold normal-case'>Beginner</p>
                        </ButtonBorder>
                    </div>
                    <div className="mt-[49px]">
                        <div>
                            <div className="w-[582px] h-[138px] bg-rose-100 rounded-[10px] border-b-[3px] border-red-700 flex flex-row px-7 py-8">
                                <div className="flex flex-col px-3 ">
                                    <p className="w-[57.38px] text-neutral-700 text-lg font-bold ">Unit 1</p>
                                    <p className="w-[289.24px] text-black text-xs font-medium mt-3 pr-9">Memahami frasa dasar, menggunakan kalimat dasar</p>
                                </div>
                                <div className="pt-6 ps-7">
                                    <ButtonBorder iconLeft={<LibraryBooksIcon></LibraryBooksIcon>} className="h-11 w-[194px] mt-9">
                                        <p className="normal-case text-white text-[15px] font-medium">Buku Panduan</p>
                                    </ButtonBorder>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-11 mt-16 ms-11">
                            <Link to={"/user/soal"}>
                                <div className="w-[60px] h-[60px] bg-red-500 rounded-full border-b-[3px] border-slate-400 relative"><StarRateRoundedIcon sx={{ color: 'white', fontSize: '40px' }} className='absolute left-[9px] top-2'></StarRateRoundedIcon></div>
                            </Link>
                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><LockRoundedIcon sx={{ color: 'black', fontSize: '30px' }} className='absolute left-[14px] top-3'></LockRoundedIcon></div>
                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><LockRoundedIcon sx={{ color: 'black', fontSize: '30px' }} className='absolute left-[14px] top-3'></LockRoundedIcon></div>
                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><LockRoundedIcon sx={{ color: 'black', fontSize: '30px' }} className='absolute left-[14px] top-3'></LockRoundedIcon></div>

                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><img src={Chess} alt="" className='absolute left-[17px] top-5' /></div>
                        </div>
                    </div>
                </div>
                <div className="container p-5">
                    <div className="mt-[49px]">
                        <div>
                            <div className="w-[582px] h-[138px] bg-rose-100 rounded-[10px] border-b-[3px] border-red-700 flex flex-row px-7 py-8">
                                <div className="flex flex-col px-3 ">
                                    <p className="w-[57.38px] text-neutral-700 text-lg font-bold ">Unit 2</p>
                                    <p className="w-[289.24px] text-black text-xs font-medium mt-3 pr-9">Mengungkapkan frasa umum, membahas makanan</p>
                                </div>
                                <div className="pt-6 ps-7">
                                    <ButtonBorder iconLeft={<LibraryBooksIcon></LibraryBooksIcon>} className="h-11 w-[194px] mt-9">
                                        <p className="normal-case text-white text-[15px] font-medium">Buku Panduan</p>
                                    </ButtonBorder>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-11 mt-16 ms-11">
                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><LockRoundedIcon sx={{ color: 'black', fontSize: '30px' }} className='absolute left-[14px] top-3'></LockRoundedIcon></div>
                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><LockRoundedIcon sx={{ color: 'black', fontSize: '30px' }} className='absolute left-[14px] top-3'></LockRoundedIcon></div>
                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><LockRoundedIcon sx={{ color: 'black', fontSize: '30px' }} className='absolute left-[14px] top-3'></LockRoundedIcon></div>
                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><LockRoundedIcon sx={{ color: 'black', fontSize: '30px' }} className='absolute left-[14px] top-3'></LockRoundedIcon></div>

                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><img src={Chess} alt="" className='absolute left-[17px] top-5' /></div>
                        </div>
                    </div>
                </div>
                <div className="container p-5">
                    <div className="mt-[49px]">
                        <div>
                            <div className="w-[582px] h-[138px] bg-rose-100 rounded-[10px] border-b-[3px] border-red-700 flex flex-row px-7 py-8">
                                <div className="flex flex-col px-3 ">
                                    <p className="w-[57.38px] text-neutral-700 text-lg font-bold ">Unit 3</p>
                                    <p className="w-[289.24px] text-black text-xs font-medium mt-3 pr-9">Mengungkapkan frasa umum, membahas makanan</p>
                                </div>
                                <div className="pt-6 ps-7">
                                    <ButtonBorder iconLeft={<LibraryBooksIcon></LibraryBooksIcon>} className="h-11 w-[194px] mt-9">
                                        <p className="normal-case text-white text-[15px] font-medium">Buku Panduan</p>
                                    </ButtonBorder>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-11 mt-16 ms-11">
                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><LockRoundedIcon sx={{ color: 'black', fontSize: '30px' }} className='absolute left-[14px] top-3'></LockRoundedIcon></div>
                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><LockRoundedIcon sx={{ color: 'black', fontSize: '30px' }} className='absolute left-[14px] top-3'></LockRoundedIcon></div>
                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><LockRoundedIcon sx={{ color: 'black', fontSize: '30px' }} className='absolute left-[14px] top-3'></LockRoundedIcon></div>
                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><LockRoundedIcon sx={{ color: 'black', fontSize: '30px' }} className='absolute left-[14px] top-3'></LockRoundedIcon></div>

                            <div className="w-[60px] h-[60px] bg-neutral-200 rounded-full border-b-[3px] border-slate-400  relative"><img src={Chess} alt="" className='absolute left-[17px] top-5' /></div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} md={4}>
                <div className="mt-14">
                    <div>
                        <ButtonBorder className="w-[135px] h-9">
                            <p className='text-white text-xs font-semibold normal-case'>Pilih Bahasa</p>
                        </ButtonBorder>

                    </div>
                    <div className="w-[343px] h-[154px] bg-white rounded-[10px] border-2 border-gray-200 p-5 mt-6">
                        <div>
                            <p className='text-neutral-700 text-xl font-bold'>Buka Papan Skor!</p>
                        </div>
                        <div className='flex mt-3 items-center content-center'>
                            <div className='w-[100px] h-[50px]'>
                                <img src={LockShield} alt="" />
                            </div>
                            <div>
                                <p className='text-neutral-700 text-[15px] font-medium px-3'>Selesaikan 8 Pertandingan
                                    lagi untuk memulai kompetisi</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[343px] h-[154px] bg-white rounded-[10px] border-2 border-gray-200 p-5 mt-6">
                        <div>
                            <p className='text-neutral-700 text-xl font-bold'> Buka Papan Skor!</p>
                        </div>
                        <div className='flex mt-3'>
                            <img src={GoldenChess} alt="" />
                            <div className='ms-4'>
                                <div className="text-neutral-700 text-sm font-semibold font-['Inter'] leading-[18px] tracking-tight">Dapatkan 20 XP +</div>
                                <div className="w-[210px] h-[13px] bg-zinc-300 rounded-[10px] mt-3">
                                    <div className="w-[61px] h-[13px] bg-red-500 rounded-[10px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Belajar