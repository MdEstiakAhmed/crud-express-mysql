import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/users",
        element: <Users />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);