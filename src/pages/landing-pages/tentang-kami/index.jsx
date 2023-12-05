import { Card } from "@mui/material"
import { Layout } from "../../../component/layout"

const TentangKami = () => {
    return <Layout>
        <div className="w-full min-h-[600px] flex flex-col py-10 bg-red-100">
            <div className="container mx-auto flex-1 flex items-center overflow-hidden justify-center flex-col gap-[60px]">
                <h2>TIM KAMI</h2>
                <Card className="p-4 text-center">
                    <h3>
                        PROJECT MANAGER
                    </h3>
                    <p>Harris Munahar {`(Web)`}</p>
                </Card>
                <Card className="p-4 text-center">
                    <h3>
                        Scrum Master
                    </h3>
                    <p>Birull Hasibuan {`(Mobile)`}</p>
                    <p>Wahyu Prayoga {`(Web)`}</p>
                </Card>

                <div className="flex w-full justify-between">
                    <Card className="p-4 text-center">
                        <h3>
                            Hipster
                        </h3>
                        <p>Muhammad Fachrizal A {`(Mobile)`}</p>
                        <p>Linda Erlinda Sari {`(Mobile)`}</p>
                        <p>Nurdila {`(Web)`}</p>
                        <p>Galih Yoga Abimanyu {`(Web)`}</p>
                        <p>Fawwaz Mubarak {`(Web)`}</p>
                    </Card>
                    <Card className="p-4 text-center">
                        <h3>
                            Hacker
                        </h3>
                        <p>Alfian Diva Awangga {`(Mobile)`}</p>
                        <p>Kristo Pandapotan Samosir {`(Mobile)`}</p>
                        <p>I Nengah Pranata Adhi S {`(Web)`}</p>
                    </Card>

                </div>
            </div>
        </div>
        <div className="w-full min-h-[300px] flex flex-col py-10 text-center">
            <div className="container mx-auto flex-1 flex items-center overflow-hidden justify-center flex-col gap-[60px]">
                <h2 className="text-red-500">MISI KAMI</h2>
                <p>Menjadi media yang memukau untuk mempelajari beragam bahasa daerah dengan mudah melalui pelajaran interaktif, percakapan sehari-hari mendalami dan memahami kekayaan bahasa dan budaya lokal. Dengan beragam sumber daya, pelajaran audio, dan fitur interaktif, web ini memungkinkan Anda merasakan keindahan dan kedalaman bahasa daerah dengan mudah, sambil menjaga warisan budaya yang tak ternilai.</p>
            </div>
        </div>
    </Layout>
}

export default TentangKami