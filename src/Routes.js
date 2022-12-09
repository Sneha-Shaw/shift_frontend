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
import WeeklyView from "./pages/WeeklyView/WeeklyView";
import MonthlyView from "./pages/MonthlyView/MonthlyView";
import Break from './pages/Break/Break'
import DoctorsList from './pages/DoctorsList/DoctorsList'
import Approvals from './pages/Approvals/Approvals'
import Notifications from './pages/Notifications/Notifications'


const Router = () => {
    // doctor info from redux
    const doctorInfo = null
    const managerInfo= "hi"
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        exact
                        path="/"
                        element={
                            doctorInfo || managerInfo ? (
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
                    <Route
                        exact
                        path="/self-service/view/daily"
                        element={
                            doctorInfo ? (
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
                        path="/self-service/view/weekly"
                        element={
                            doctorInfo ? (
                                <>
                                    <Navbar />
                                    <WeeklyView />
                                </>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/self-service/view/monthly"
                        element={
                            doctorInfo ? (
                                <>
                                    <Navbar />
                                    <MonthlyView />
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
                        path="/notifications"
                        element={
                          doctorInfo ||  managerInfo ? (
                                <>
                                    <Navbar />
                                    <Notifications />
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