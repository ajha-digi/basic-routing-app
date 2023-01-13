import {createBrowserRouter} from "react-router-dom";

import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EditUser from "../pages/EditUser";
import ForgetPassword from "../pages/ForgetPassword";
import ErrorPage  from "../pages/ErrorPage";

const routers = createBrowserRouter([
    {
        path:"/",
        element: <Registration />,
        errorElement:<ErrorPage />
    },
    {
        path:"/login",
        element: <Login />
    },
    {
        path:"/dashboard",
        element: <Dashboard />
    },
    {
        path:"/edituser/:userId",
        element: <EditUser />
    },
    {
        path:"/forgetpassword",
        element: <ForgetPassword />
    }
])

export {routers}