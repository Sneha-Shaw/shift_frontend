import React from "react";
import { BrowserRouter, Routes, Route ,Redirect} from "react-router-dom";
import Login from './pages/Login/Login'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { NavRoute } from './Layout/NavRoute'


const Router = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    
                </Routes>
            </BrowserRouter>
        </ThemeProvider>

    )
}

export default Router