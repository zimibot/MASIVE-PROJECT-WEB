import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Landingspages from "./pages/landing-pages";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ContactUs from "./pages/landing-pages/kontak-kami";
import TentangKami from "./pages/landing-pages/tentang-kami";
import TerofService from "./pages/landing-pages/termofservice";
import HelpCenter from "./pages/landing-pages/help-center";
import KategoriBeginner from "./pages/landing-pages/kategori/beginer";
import Kategoriintermediate from "./pages/landing-pages/kategori/intermediate";
import TambahKategori from "./pages/admin/tambah-kategori";
import HelpCenterAdmin from "./pages/admin/helpcenter-admin";
import HalamanKategori from "./pages/admin/halaman-kategori";
import HalamanBeginer from "./pages/admin/halaman-beginer";
import HalamanUnit from "./pages/admin/halaman-unit";
import HalamanStage from "./pages/admin/halaman-stage";
import TambahSoal from "./pages/admin/tambah-soal";
import TambahUnit from "./pages/admin/tambah-unit";
import HalamanSoal from "./pages/admin/halaman-soal";
import DataUser from "./pages/admin/halaman-datauser";
import {LayoutAdmin} from "./component/layout-admin"
import Dashboard from "./pages/user/dashboard";
import Profil from "./pages/user/profil";
import EditProfile from "./pages/user/edit-profil";
import Belajar from "./pages/user/belajar";
import CSoal from "./pages/user/soal";
import { LayoutUser } from "./component/layout-user";


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
            path: "/kategori",
            children: [
                {
                    path: "beginner",
                    element: <KategoriBeginner/>,
                },
                {
                    path: "intermediate",
                    element: <Kategoriintermediate />,
                },
            ]
        },
        {
            path: "/admin",
            element: <LayoutAdmin>
            <Outlet></Outlet>
            </LayoutAdmin>,
            children: [
                {
                    path: "halamanunit",
                    element: <HalamanUnit />,
                    children: [
                        {
                            index: true,
                            element: <HalamanUnit />
                        },
                        {
                            path: "beginer",
                            element: <HalamanBeginer />,
                        },

                    ]
                },

                {
                    path: "helpcenter",
                    element: <HelpCenterAdmin />,
                },
                {
                    path: "beginer",
                    element: <HalamanBeginer />,
                },
                {
                    path: "halamanunit",
                    element: <HalamanUnit />,
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
                            index: true,
                            element: <HalamanKategori />,
                        },
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
                {
                    path: "datauser",
                    element: <DataUser/>,
                },
                
            ],
        },
        {
            path: "/user",
            element: <LayoutUser>
            <Outlet></Outlet>
        </LayoutUser>,
            children: [
                {
                    path: "dashboard",
                    element: <Dashboard />,
                    // loader: eventLoader,
                },
                {
                    path: "profil",
                    element: <Profil />,
                    children:[
                        {
                            index: true,
                            element: <Profil />
                        },
                        {
                            path: "edit",
                            element: <EditProfile />,
                            // loader: eventLoader,
                        },
                    ]
                },
                {
                    path: "belajar",
                    element:<Belajar></Belajar>
                },
                {
                    path: "soal",
                    element:<CSoal/>
                }
                
            ],
        },

    ]);

    return <RouterProvider router={router} />
}

export default RoutersPages