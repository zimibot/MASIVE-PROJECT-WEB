import { Card } from "@mui/material"
import { Layout } from "../../../component/layout"
import { Email, LocationCity, Phone } from "@mui/icons-material"

const TerofService = () => {
    return <Layout>
        <div className="w-full min-h-[600px] flex flex-col py-10 bg-red-100">
            <div className="container mx-auto flex- 1 flex items-center overflow-hidden justify-center flex-col gap-[60px]">
                <h2>Terms Of Service</h2>
                <Card className="w-full p-6 space-y-4">
                    <p>Selamat datang di platform belajar bahasa kami! Sebelum Anda menggunakan layanan kami, harap luangkan waktu
                        sejenak untuk membaca dan memahami syarat dan ketentuan penggunaan di bawah ini. Dengan mengakses atau
                        menggunakan platform ini, Anda dianggap telah membaca, memahami, dan menyetujui semua ketentuan ini. Jika
                        Anda tidak setuju dengan salah satu bagian dari syarat dan ketentuan ini, mohon untuk tidak menggunakan layanan
                        kami.</p>
                    <h3 className="text-red-500">1. Penerimaan Ketentuan Penggunaan</h3>
                    <p>Dengan menggunakan platform ini, Anda setuju untuk terikat oleh semua ketentuan dan syarat yang tercantum di sini. Jika Anda tidak menyetujui salah satu bagian dari syarat dan ketentuan ini, kami sarankan untuk tidak melanjutkan penggunaan platform ini.</p>
                    <h3 className="text-red-500">2. Pendaftaran Akun</h3>
                    <p>a. Untuk mengakses beberapa fitur platform, Anda mungkin perlu membuat akun. Anda bertanggung jawab atas semua aktivitas yang terjadi di bawah akun Anda.
                        <br></br>
                        b. Informasi pribadi yang Anda berikan saat mendaftar harus akurat dan lengkap. Anda bertanggung jawab untuk memperbarui informasi Anda agar tetap akurat.
                    </p>
                    <h3 className="text-red-500">3. Penggunaan Layanan</h3>
                    <p>
                        a. Anda diizinkan untuk mengakses dan menggunakan platform ini untuk tujuan belajar bahasa dan aktivitas terkait.
                        <br></br>
                        b. Tidak diperkenankan untuk menggunakan platform ini untuk tujuan ilegal atau yang melanggar hukum yang berlaku.
                    </p>
                    <h3 className="text-red-500">4. Hak Kekayaan Intelektual</h3>
                    <p>
                        a. Semua materi yang disediakan di platform ini, termasuk tetapi tidak terbatas pada konten, desain, dan logo, dilindungi oleh hak cipta dan hak kekayaan intelektual lainnya.
                        <br></br>
                        b. Anda setuju untuk tidak mereproduksi, mendistribusikan, atau membuat karya turunan dari materi di platform ini tanpa izin tertulis.  </p>
                    <h3 className="text-red-500">5. Tautan Pihak Ketiga</h3>
                    <p>
                        a. Platform ini mungkin berisi tautan ke situs web pihak ketiga. Kami tidak bertanggung jawab atas konten atau kebijakan privasi situs web tersebut.
                        <br></br>
                        b. Penggunaan situs web pihak ketiga sepenuhnya berada pada risiko pengguna
                    </p>
                    <h3 className="text-red-500">6. Pemutusan dan Perubahan Layanan</h3>
                    <p>
                        a. Kami berhak untuk memutuskan layanan atau mengubah syarat dan ketentuan ini setiap saat tanpa pemberitahuan sebelumnya.
                        <br></br>
                        b. Kami tidak bertanggung jawab atas kerugian atau kerusakan yang mungkin timbul akibat pemutusan layanan atau perubahan syarat dan ketentuan.
                    </p>
                    <h3 className="text-red-500">7. Privasi</h3>
                    <p>
                    a. Kami menghargai privasi Anda. Informasi pribadi yang Anda berikan akan diatur oleh Kebijakan Privasi kami.
                    </p>

                </Card>

            </div>
        </div>
    </Layout>
}

export default TerofService