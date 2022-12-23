import axios from 'axios'
import {
    MANAGER_SIGNIN_REQUEST,
    MANAGER_SIGNIN_SUCCESS,
    MANAGER_SIGNIN_FAILED,
    MANAGER_LOGOUT,
    GET_MANAGER_INFO_REQUEST,
    GET_MANAGER_INFO_SUCCESS,
    GET_MANAGER_INFO_FAILED,
    ADD_DOCTOR_REQUEST,
    ADD_DOCTOR_SUCCESS,
    ADD_DOCTOR_FAILED,
    DELETE_DOCTOR_REQUEST,
    DELETE_DOCTOR_SUCCESS,
    DELETE_DOCTOR_FAILED,
    UPDATE_DOCTOR_REQUEST,
    UPDATE_DOCTOR_SUCCESS,
    UPDATE_DOCTOR_FAILED,
    GET_ALL_DOCTORS_REQUEST,
    GET_ALL_DOCTORS_SUCCESS,
    GET_ALL_DOCTORS_FAILED,
    GET_DOCTOR_BY_ID_REQUEST,
    GET_DOCTOR_BY_ID_SUCCESS,
    GET_DOCTOR_BY_ID_FAILED
} from '../constants/managerConstants'


const localStorage = window.localStorage
const API = process.env.REACT_APP_NODE_API

// signin manager
export const signInManager = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: MANAGER_SIGNIN_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            email,
            password
        }
        const { data } = await axios.post(`${API}/public/admin/login`, body, config)
        dispatch({
            type: MANAGER_SIGNIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('managerInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: MANAGER_SIGNIN_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// logout manager
export const logoutManager = () => (dispatch) => {
    if (localStorage.getItem('managerInfo')) {
        localStorage.removeItem('managerInfo')
    }
    dispatch({ type: MANAGER_LOGOUT })
}

// add doctor
export const addDoctor = (
    name,
    email,
    mobile,
    password,
    designation,
    type,
    dutyHoursPerMonth,
    dutyHoursPerDay
) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_DOCTOR_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            name,
            email,
            mobile,
            password,
            designation,
            type,
            dutyHoursPerMonth,
            dutyHoursPerDay
        }
        const { data } = await axios.post(`${API}/public/admin/add-doctor`, body, config)
        dispatch({
            type: ADD_DOCTOR_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_DOCTOR_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get manager info
export const getManagerInfo = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_MANAGER_INFO_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-profile/${id}`, config)
        dispatch({
            type: GET_MANAGER_INFO_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: GET_MANAGER_INFO_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// delete doctor
export const deleteDoctor = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_DOCTOR_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.delete(`${API}/public/admin/delete-doctor/${id}`, config)
        dispatch({
            type: DELETE_DOCTOR_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_DOCTOR_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// update doctor
export const updateDoctor = (
    name,
    email,
    mobile,
    password,
    department,
    designation,
    type,
    dutyHoursPerMonth,
    dutyHoursPerDay,
    nightDuty
) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_DOCTOR_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            name,
            email,
            mobile,
            password,
            department,
            designation,
            type,
            dutyHoursPerMonth,
            dutyHoursPerDay,
            nightDuty
        }
        const { data } = await axios.put(`${API}/public/admin/update-doctor`, body, config)
        dispatch({
            type: UPDATE_DOCTOR_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_DOCTOR_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get all doctors
export const getAllDoctors = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_DOCTORS_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-all-doctors`, config)
        dispatch({
            type: GET_ALL_DOCTORS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_DOCTORS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get doctor by id
export const getDoctorById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_DOCTOR_BY_ID_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-doctor/${id}`, config)
        dispatch({
            type: GET_DOCTOR_BY_ID_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_DOCTOR_BY_ID_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
