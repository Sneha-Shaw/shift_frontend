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
import DailyView from "./pages/DailyView/DailyView";
import Break from './pages/Break/Break'
import DoctorsList from './pages/DoctorsList/DoctorsList'
import Approvals from './pages/Approvals/Approvals'
import Notifications from './pages/Notifications/Notifications'
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import UpdateSlot from "./pages/UpdateSlot/UpdateSlot"

import { useSelector } from "react-redux";


const Router = () => {
    // doctor info from redux
    const { managerInfo } = useSelector((state) => state.signInManager)
    const { userInfo } = useSelector((state) => state.signInUser)

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        exact
                        path="/"
                        element={
                            userInfo || managerInfo ? (
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
                            userInfo ? (
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
                            userInfo ? (
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
                            userInfo ? (
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
                            userInfo || managerInfo ? (
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
                            userInfo ? (
                                <>
                                    <Navbar />
                                    <SpecialRequest />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/self-service/view/daily"
                        element={
                            userInfo ? (
                                <>
                                    <Navbar />
                                    <DailyView />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/attendance/view/daily"
                        element={
                            managerInfo ? (
                                <>
                                    <Navbar />
                                    <DailyView />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/attendance/breaks"
                        element={
                            managerInfo ? (
                                <>
                                    <Navbar />
                                    <Break />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/attendance"
                        element={
                            managerInfo ? (
                                <Navigate to="/attendance/breaks" />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/attendance/doctors"
                        element={
                            managerInfo ? (
                                <>
                                    <Navbar />
                                    <DoctorsList />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/attendance/approvals"
                        element={
                            managerInfo ? (
                                <>
                                    <Navbar />
                                    <Approvals />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/attendance/slots"
                        element={
                            managerInfo ? (
                                <>
                                    <Navbar />
                                    <UpdateSlot />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/notifications"
                        element={
                            userInfo || managerInfo ? (
                                <>
                                    <Navbar />
                                    <Notifications />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/reset-password/:id"
                        element={
                            userInfo || managerInfo ? (
                                <>
                                    <Navbar />
                                    <ResetPassword />
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