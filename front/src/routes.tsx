import { createBrowserRouter } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />
    },
]);


export default router;