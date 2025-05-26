import {
  createBrowserRouter,
  
} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import { Component } from "react";
import Register from "../pages/auth/register/Register";
const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "register",
                Component: Register
            }
        ]
    }
])

export default router;