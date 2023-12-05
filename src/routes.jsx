import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
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
import DataUser from "./pages/admin/halaman-datauser";
import Dashboard from "./pages/user/dashboard";
import Profil from "./pages/user/profil";
import EditProfile from "./pages/user/edit-profil";
import Belajar from "./pages/user/belajar";
import { LayoutAdmin } from "./component/layout-admin";
import { LayoutUser } from "./component/layout-user";
import KategoriBeginner from "./pages/landing-pages/kategori/beginer";
import InterMediate from "./pages/landing-pages/kategori/intermediate";



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
                    element: <KategoriBeginner />,
                },
                {
                    path: "intermediate",
                    element: <InterMediate />,
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
                    path: "unit",
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
                    path: "user",
                    element: <DataUser />,
                },
                {
                    path: "kategori",
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
                }
            ],
        },

    ]);

    return <RouterProvider router={router} />
}

export default RoutersPages