import { createBrowserRouter, Navigate } from "react-router-dom";
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
export const privateRouter = createBrowserRouter([
    {
        path: "/users",
        element: <Users />
    },
    {
        path: "/",
        element: <Navigate to="/users" />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export const publicRouter = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Navigate to="/login" />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);