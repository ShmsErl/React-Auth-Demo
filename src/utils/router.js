import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter(


    [

        {
            path:'/',
            element:<Home/>
        },

        {
            path:'/register',
            element:<Register/>
        },

        {
            path:'/login',
            element:<Login/>
        }
    ]
)