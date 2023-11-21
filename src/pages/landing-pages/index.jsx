import { ArrowForward } from "@mui/icons-material"
import { ButtonBorder } from "../../component/elements/button-border"
import { Layout } from "../../component/layout"
import ImageRight from "../..//assets/image-right.svg"
import icon from "../..//assets/icon/icon-1.svg"
import icon2 from "../..//assets/icon/icon-2.svg"
import icon3 from "../..//assets/icon/icon-3.svg"
import star from "../..//assets/icon/star.png"
import shield from "../..//assets/icon/shield.png"
import rocked from "../..//assets/icon/rocked.png"
import { Button } from "@mui/material"

const Landingspages = () => {
    return <Layout>
        <div className="bg-red-100 w-full min-h-[600px] flex flex-col">
            <div className="container mx-auto flex-1 flex items-center overflow-hidden">
                <div className="grid grid-cols-2">
                    <div className="space-y-4 col-span-full xl:col-span-1">
                        <h1>Sosio-Cultural</h1>
                        <p>Media belajar bahasa daerah,dengan beragam sumber daya, pelajaran audio, dan fitur interaktif.</p>
                        <div className="flex gap-6 flex-col lg:flex-row">
                            <ButtonBorder href="/login" iconRight={<ArrowForward></ArrowForward>}>
                                Get Started
                            </ButtonBorder>
                            <ButtonBorder href="/registrasi" variant="outlined" style={{
                                minWidth: "280px"
                            }}>
                                Sudah Punya Akun?
                            </ButtonBorder>
                        </div>
                    </div>
                    <div className="relative hidden justify-center xl:flex">
                        <div className="absolute top-[-90px] right-0">
                            <img src={ImageRight} className="w-[600px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full min-h-[600px] flex flex-col py-10">
            <div className="container mx-auto flex-1 flex items-center overflow-hidden justify-center flex-col gap-[100px]">
                <h2>
                    Komitmen Kami
                </h2>
                <div className="grid lg:grid-cols-3 gap-[40px]">
                    <div className="shadow-lg rounded-md">
                        <div className="flex flex-col items-center justify-center gap-4 p-5">
                            <img className="w-24" src={icon}></img>
                            <div>
                                <h2>1</h2>
                            </div>
                            <div>Menyediakan wadah belajar dengan metode permainan pendidikan yang berfokus pada bahasa daerah.</div>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-md">
                        <div className="flex flex-col items-center justify-center gap-4 p-5">
                            <img className="w-24" src={icon2}></img>
                            <div>
                                <h2>2</h2>
                            </div>
                            <div>Membantu orang-orang dalam mempelajari bahasa daerah dengan memberikan bantuan dan sumber daya</div>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-md">
                        <div className="flex flex-col items-center justify-center gap-4 p-5">
                            <img className="w-24" src={icon3}></img>
                            <div>
                                <h2>3</h2>
                            </div>
                            <div>Menyediakan konten multimedia yang menarik seperti video pembelajaran, audio pembelajaran, yang berfokus pada bahasa daerah.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full min-h-[600px] flex flex-col bg-red-100 py-10">
            <div className="container mx-auto flex-1 flex items-center overflow-hidden justify-center flex-col gap-[100px]">
                <div className="flex justify-center flex-col items-center gap-4">
                    <h2>
                        Kategori
                    </h2>
                    <p>Belajar berdasarkan tingkat kemampuan bahasa Anda</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-[40px]">
                    <div className="relative">
                        <img className="w-[350px]" src={shield} alt="" />
                        <div className="absolute bottom-[-30px] px-4 w-full">
                            <Button fullWidth color="inherit" variant="contained" className="flex flex-col gap-3 !text-white !py-4" sx={{
                                bgcolor: "#F5F7FA"
                            }}>
                                <p className="text-center text-neutral-500 text-sm font-semibold leading-tight">Beginer</p>
                                <p className="text-center text-black text-sm font-semibold leading-tight flex items-center justify-center gap-3">Pelajari lebih lanjut
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </p>
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-[350px]" src={star} alt="" />
                        <div className="absolute bottom-[-30px] px-4 w-full">
                            <Button fullWidth color="inherit" variant="contained" className="flex flex-col gap-3 !text-white !py-4" sx={{
                                bgcolor: "#F5F7FA"
                            }}>
                                <p className="text-center text-neutral-500 text-sm font-semibold leading-tight">Intermediate</p>
                                <p className="text-center text-black text-sm font-semibold leading-tight flex items-center justify-center gap-3">Pelajari lebih lanjut
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </p>
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-[350px]" src={rocked} alt="" />
                        <div className="absolute bottom-[-30px] px-4 w-full">
                            <Button fullWidth color="inherit" variant="contained" className="flex flex-col gap-3 !text-white !py-4" sx={{
                                bgcolor: "#F5F7FA"
                            }}>
                                <p className="text-center text-neutral-500 text-sm font-semibold leading-tight">Advanced</p>
                                <p className="text-center text-black text-sm font-semibold leading-tight flex items-center justify-center gap-3">Pelajari lebih lanjut
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
}

export default Landingspages