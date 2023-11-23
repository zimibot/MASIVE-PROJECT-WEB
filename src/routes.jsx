import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import Landingspages from "./pages/landing-pages";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ContactUs from "./pages/landing-pages/kontak-kami";
import TentangKami from "./pages/landing-pages/tentang-kami";
import TerofService from "./pages/landing-pages/termofservice";
import HelpCenter from "./pages/landing-pages/help-center";
import TambahKategori from "./pages/admin/tambah-kategori";
import HelpCenterAdmin from "./pages/admin/helpcenter-admin";
import HalamanKategori from "./pages/admin/halaman-kategori";
import HalamanBeginer from "./pages/admin/halaman-beginer";
import HalamanUnit from "./pages/admin/halaman-unit";
import HalamanStage from "./pages/admin/halaman-stage";
import TambahSoal from "./pages/admin/tambah-soal";
import TambahUnit from "./pages/admin/tambah-unit";
import HalamanSoal from "./pages/admin/halaman-soal";


const RoutersPages = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landingspages />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/registrasi",
            element: <Register />,
        },
        {
            path: "/kontak-kami",
            element: <ContactUs />,
        },
        {
            path: "/tentang-kami",
            element: <TentangKami />,
        },
        {
            path: "/terofservice",
            element: <TerofService />,
        },
        {
            path: "/helpcenter",
            element: <HelpCenter />,
        },
        {
            path: "/admin",
            children: [
                {
                    path: "halamanunit",
                    element: <HalamanUnit />,
                },
                {
                    path: "halamanbeginer",
                    element: <HalamanBeginer />,
                },
                {
                    path: "helpcenter",
                    element: <HelpCenterAdmin />,
                },
                {
                    path: "halamanstage",
                    element: <HalamanStage/>,
                },
                {
                    path: "tambahsoal",
                    element: <TambahSoal/>,
                },
                
                {
                    path: "halamankategori",
                    element: <HalamanKategori />,
                    children: [
                        {
                            path: "tambahkategori",
                            element: <TambahKategori />,
                        }
                    ]
                },
                {
                    path: "tambahkategori",
                    element: <TambahKategori/>,
                },
                {
                    path: "tambahunit",
                    element: <TambahUnit/>,
                },
                {
                    path: "halamansoal",
                    element: <HalamanSoal/>,
                },
                
            ],
        },
        {
            path: "/user",
            children: [
                {
                    path: "dashboard",
                    element: <HelpCenter />,
                    // loader: eventLoader,
                },
            ],
        },

    ]);

    return <RouterProvider router={router} />
}

export default RoutersPages