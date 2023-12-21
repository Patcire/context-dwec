// eslint-disable-next-line no-unused-vars
import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import {LayoutRoot} from "../layouts/LayoutRoot.jsx";
import Home from "../pages/Home.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import LayoutPrivate from "../layouts/LayoutPrivate.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot></LayoutRoot>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "dashboard",
                element: <LayoutPrivate></LayoutPrivate>,
                children: [
                    {
                        index: true,
                        element: <Dashboard></Dashboard>
                    }
                ]
            }
        ]
    }
])