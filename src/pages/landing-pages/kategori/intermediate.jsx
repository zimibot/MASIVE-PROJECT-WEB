import { Layout } from "../../../component/layout"
import { Card, Button } from "@mui/material"
import star from "../../../assets/icon/star.png"

const Kategoriintermediate = () => {
    return <Layout>
        <div className="w-full min-h-[600px] flex flex-col py-10 bg-red-100">
            <div className="container mx-auto flex-1 flex items-center overflow-hidden justify-center flex-col gap-[60px]">
                <h2>KATEGORI</h2>
                <Card className="w-full min-h-[400px] py-10 px-5 grid grid-cols-2 gap-4">
                    <div className="relative flex flex-col items-center justify-center">
                        <img className="w-[350px]" src={star} alt="" />
                        <div className="absolute bottom-[-30px] px-4 w-full">
                            <Button fullWidth color="inherit" variant="contained" className="flex flex-col gap-3 !text-white !py-4" sx={{
                                bgcolor: "#F5F7FA"
                            }}>
                                <p className="text-center text-neutral-500 text-sm font-semibold leading-tight">Intermediate</p>
                            </Button>
                        </div>
                    </div>
                    <div>
                    Level intermediate menunjukkan tingkat kemampuan di antara pemula dan tingkat lanjutan. Pada level ini, pemain diharapkan memiliki pemahaman dasar tentang mekanisme permainan dan mungkin telah mengembangkan beberapa keterampilan khusus. Pada tingkat intermediate, permainan mungkin menyajikan tantangan yang sedikit lebih kompleks daripada pada tingkat pemula.
                    </div>
                </Card>

            </div>
        </div>
    </Layout>
}

export default Kategoriintermediate