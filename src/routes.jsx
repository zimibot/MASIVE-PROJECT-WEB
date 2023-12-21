import { RouterProvider, createBrowserRouter, Outlet, Navigate } from "react-router-dom";
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
import HalamanBeginer from "./pages/admin/halaman-unit";
import HalamanUnit from "./pages/admin/halaman-unit";
import HalamanStage from "./pages/admin/halaman-stage";
import TambahSoal from "./pages/admin/tambah-soal";
import TambahUnit from "./pages/admin/tambah-unit";
import HalamanSoal from "./pages/admin/halaman-soal";
import DataUser from "./pages/admin/halaman-datauser";
import { LayoutAdmin } from "./component/layout-admin"
import Dashboard from "./pages/user/dashboard";
import Profil from "./pages/user/profil";
import EditProfile from "./pages/user/edit-profil";
import Belajar from "./pages/user/belajar";
import CSoal from "./pages/user/soal";
import { LayoutUser } from "./component/layout-user";
import TambahStage from "./pages/admin/tambah-stage";
import KategoriAdvance from "./pages/landing-pages/kategori/advance";
import CreatePassword from "./pages/create-password";
import TambahUsers from "./pages/admin/tambah-users";
import CJawaban from "./pages/user/jawban";


const RoutersPages = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landingspages />,
        },
        {
            path: "*",
            element: localStorage.getItem("token") ? <Navigate to={"/admin"}></Navigate> : '',
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
            path: "/create-password",
            element: <CreatePassword />,
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
                    element: <Kategoriintermediate />,
                },
                {
                    path: "advance",
                    element: <KategoriAdvance />,
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
                    index: true,
                    element: <Navigate to={"/admin/halamankategori"}></Navigate>,
                    // loader: eventLoader,
                },
                {
                    path: "*",
                    element: <Navigate to={"/admin"}></Navigate>,
                },
                {
                    path: "helpcenter",
                    element: <HelpCenterAdmin />,
                },

                {
                    path: "tambahsoal",
                    element: <TambahSoal />,
                },
                {
                    path: "datauser",
                    children: [
                        {
                            index: true,
                            element: <DataUser />,
                        },
                        {
                            path: "add",
                            element: <TambahUsers></TambahUsers>
                        },
                        {
                            path: "edit/:id",
                            element: <TambahUsers></TambahUsers>
                        }
                    ]
                },
                {
                    path: "halamankategori",
                    children: [
                        {
                            index: true,
                            element: <HalamanKategori />,
                        },
                        {
                            path: "tambahkategori",
                            element: <TambahKategori />,
                        },
                        {
                            path: "edit/:id",
                            element: <TambahKategori />,
                        },
                        {
                            path: ":id/:id",
                            element: <HalamanBeginer />,
                        },
                        {
                            path: "halamanstage",
                            children: [
                                {
                                    path: ":id/:id/:id/:id",
                                    children: [
                                        {
                                            index: true,
                                            element: <HalamanStage />,
                                        },
                                        {
                                            path: "add",
                                            caseSensitive: true,
                                            element: <TambahStage />,
                                        },
                                        {
                                            path: "edit/:id",
                                            caseSensitive: true,
                                            element: <TambahStage />,
                                        },
                                        {
                                            path: "soal/:id",
                                            caseSensitive: true,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <HalamanSoal />,
                                                },
                                                {
                                                    path: "add",
                                                    element: <TambahSoal />,
                                                },
                                                {
                                                    path: "edit/:id",
                                                    element: <TambahSoal />,
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            path: "halamanunit",
                            children: [
                                {
                                    index: true,
                                    element: <HalamanUnit />
                                },
                                {
                                    path: "add/:id/:id",
                                    element: <TambahUnit />,
                                },
                                {
                                    path: "edit/:id/:id",
                                    element: <TambahUnit />,
                                },

                            ]
                        },
                    ]
                },
                {
                    path: "tambahkategori",
                    element: <TambahKategori />,
                },
                {
                    path: "tambahunit",
                    element: <TambahUnit />,
                },
                {
                    path: "halamansoal",
                    element: <HalamanSoal />,
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
                    index: true,
                    element: <Navigate to={"/user/dashboard"}></Navigate>,
                    // loader: eventLoader,
                },
                {
                    path: "dashboard",
                    element: <Dashboard />,
                    // loader: eventLoader,
                },
                {
                    path: "profil",
                    element: <Profil />,
                    children: [
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
                    element: <Belajar></Belajar>
                },
                {
                    path: "soal",
                    element: <CSoal />
                },
                {
                    path: "jawaban",
                    element: <CJawaban />
                }

            ],
        },

    ]);

    return <RouterProvider router={router} />
}

export default RoutersPages