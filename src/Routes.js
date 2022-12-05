import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login/Login'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar/Navbar'
import SelfService from "./pages/SelfService/SelfService";


const Router = () => {
    // doctor info from redux
    const doctorInfo = "hi"
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        path="/"
                        element={
                            doctorInfo ? (
                                    <>
                                        <Navbar />
                                        <Home />
                                    </>                                 
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/self-service"
                        element={
                            doctorInfo ? (
                                    <>
                                        <Navbar />
                                        <SelfService />
                                    </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />

                </Routes>
            </BrowserRouter>
        </ThemeProvider>

    )
}

export default Router