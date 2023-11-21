import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landingspages from "./pages/landing-pages";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ContactUs from "./pages/landing-pages/kontak-kami";
import TentangKami from "./pages/landing-pages/tentang-kami";
import TerofService from "./pages/landing-pages/termofservice";
import HelpCenter from "./pages/landing-pages/help-center";


const RoutersPages = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landingspages />,
            // errorElement: <ErrorPage />,
        },
        {
            path: "/login",
            element: <Login />,
            // errorElement: <ErrorPage />,
        },
        {
            path: "/registrasi",
            element: <Register />,
            // errorElement: <ErrorPage />,
        },
        {
            path: "/kontak-kami",
            element: <ContactUs />,
            // errorElement: <ErrorPage />,
        },
        {
            path: "/tentang-kami",
            element: <TentangKami />,
            // errorElement: <ErrorPage />,
        },
        {
            path: "/terofservice",
            element: <TerofService />,
            // errorElement: <ErrorPage />,
        },
        {
            path: "/helpcenter",
            element: <HelpCenter />,
            // errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />
}

export default RoutersPages