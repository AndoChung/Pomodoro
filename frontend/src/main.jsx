import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './index.css'
import axios from 'axios';

// For Production
axios.defaults.baseURL = "https://pomodoro-api-m9tr.onrender.com";

// For Development
// axios.defaults.baseURL = "http://localhost:3001"
axios.defaults.withCredentials = true;

const router = createHashRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
