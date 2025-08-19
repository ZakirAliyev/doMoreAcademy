import MainPage from "../pages/UserPages/index.jsx";
import HomePage from "../pages/UserPages/HomePage/index.jsx";
import PaymentPage from "../pages/UserPages/PaymentPage/index.jsx";
import ErrorPage from "../pages/ErrorPage/index.jsx";
import LoginPage from "../pages/AdminPages/LoginPage/index.jsx";
import ForgotPassPage from "../pages/UserPages/ForgotPassPage/index.jsx";
import ResetPassPage from "../pages/UserPages/ResetPassPage/index.jsx";

export const ROUTES = [
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: '/payment',
                element: <PaymentPage/>,
            },
            {
                path: '/forgot-pass',
                element: <ForgotPassPage/>,
            },
            {
                path: '/reset-pass',
                element: <ResetPassPage/>,
            },
            {
                path: '/login',
                element: <LoginPage/>,
            },
            {
                path: '*',
                element: <ErrorPage/>,
            }
        ]
    }
];