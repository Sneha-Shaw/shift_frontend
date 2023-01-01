import axios from "axios";
import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILED,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILED
} from '../constants/passwordConstants'

const API = process.env.REACT_APP_NODE_API

// forgot password
export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            email
        }

        const { data } = await axios.post(`${API}/public/password/send-email`, body, config)

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

// reset password
export const resetPassword = (id, password) => async (dispatch) => {
    try {
        dispatch({
            type: RESET_PASSWORD_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            password
        }

        const { data } = await axios.post(`${API}/public/password/reset-password/${id}`, body, config)

        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}