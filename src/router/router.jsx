import {
  createBrowserRouter,
  
} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import { Component } from "react";
import Register from "../pages/auth/register/Register";
import SignIn from "../pages/auth/login/SignIn";
import JobDetails from "../pages/JobDetails";
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
            },
            {
                path: "signIn",
                Component: SignIn
            },
            {
                path: "jobs/:id",
                Component: JobDetails
            }
        ]
    }
])

export default router;