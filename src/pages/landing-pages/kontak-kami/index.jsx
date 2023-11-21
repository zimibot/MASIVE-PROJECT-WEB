import { Card } from "@mui/material"
import { Layout } from "../../../component/layout"
import { Email, LocationCity, Phone } from "@mui/icons-material"

const ContactUs = () => {
    return <Layout>
        <div className="w-full min-h-[600px] flex flex-col py-10 bg-red-100">
            <div className="container mx-auto flex-1 flex items-center overflow-hidden justify-center flex-col gap-[60px]">
                <h2>KONTAK KAMI</h2>
                <Card className="w-full p-0 grid grid-cols-2 gap-4">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.72445757209!2d106.61002463315567!3d-6.167640692199832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffd93dfa8b57%3A0xbb18c20935ac2eff!2sPerumahan%20Pondok%20Arum!5e0!3m2!1sid!2sid!4v1700296469195!5m2!1sid!2sid" className="w-full" height="450" style={{
                            border: 0
                        }}  loading="lazy" ></iframe>
                    </div>
                    <div className="p-4 text-[20px] space-y-4">
                        <div className="flex gap-4">
                            <div>
                                <LocationCity fontSize="large"></LocationCity>
                            </div>
                            <span>Jl. Satria Sudirman – Kota Tanggerang, Provinsi Banten - Indonesia</span>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Phone fontSize="large"></Phone>
                            </div>
                            <span>081122334455</span>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Email fontSize="large"></Email>
                            </div>
                            <span>Sosiocultural@gmail.com</span>
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    </Layout>
}

export default ContactUs