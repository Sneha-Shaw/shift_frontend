import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login/Login'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar/Navbar'
import Availabity from "./pages/Availabity/Availabity";
import Leave from "./pages/Leave/Leave";
import ShiftReplace from "./pages/ShiftReplace/ShiftReplace";
import SpecialRequest from "./pages/SpecialRequest/SpecialRequest";

const Router = () => {
    // doctor info from redux
    const doctorInfo = "hi"
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        exact
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
                        exact
                        path="/self-service"
                        element={
                            doctorInfo ? (
                                <Navigate to="/self-service/availability" />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/self-service/availability"
                        element={
                            doctorInfo ? (
                                <>
                                    <Navbar />
                                    <Availabity />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/self-service/requests/leave"
                        element={
                            doctorInfo ? (
                                <>
                                    <Navbar />
                                    <Leave />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/self-service/requests/shift"
                        element={
                            doctorInfo ? (
                                <>
                                    <Navbar />
                                    <ShiftReplace />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/self-service/requests/special"
                        element={
                            doctorInfo ? (
                                <>
                                    <Navbar />
                                    <SpecialRequest />
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