import { Layout } from "../../../component/layout"
import { Card, Button } from "@mui/material"
import shield from "../../../assets/icon/shield.png"

const KategoriBeginner = () => {
    return <Layout>
        <div className="w-full min-h-[600px] flex flex-col py-10 bg-red-100">
            <div className="container mx-auto flex-1 flex items-center overflow-hidden justify-center flex-col gap-[60px]">
                <h2>KATEGORI</h2>
                <Card className="w-full min-h-[400px] py-10 px-5 grid grid-cols-2 gap-4">
                    <div className="relative flex flex-col items-center justify-center">
                        <img className="w-[350px]" src={shield} alt="" />
                        <div className="absolute bottom-[-30px] px-4 w-full">
                            <Button fullWidth color="inherit" variant="contained" className="flex flex-col gap-3 !text-white !py-4" sx={{
                                bgcolor: "#F5F7FA"
                            }}>
                                <p className="text-center text-neutral-500 text-sm font-semibold leading-tight">Beginer</p>
                            </Button>
                        </div>
                    </div>
                    <div>
                        Level "beginner" atau "pemula" akan mengindikasikan tingkat awal atau tingkat yang ditujukan untuk para pemain yang baru memulai atau memiliki sedikit pengalaman dalam permainan tersebut. Pada level ini, permainan mungkin memberikan petunjuk atau tantangan yang lebih mudah untuk membantu pemain belajar dan beradaptasi dengan mekanisme permainan.
                    </div>
                </Card>

            </div>
        </div>
    </Layout>
}

export default KategoriBeginner