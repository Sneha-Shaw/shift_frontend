import axios from "axios";
import {
    GET_CALENDER_REQUEST,
    GET_CALENDER_SUCCESS,
    GET_CALENDER_FAILURE,
    POST_SHIFT_REPLACE_REQUEST,
    POST_SHIFT_REPLACE_SUCCESS,
    POST_SHIFT_REPLACE_FAILED,
    GET_ALL_SHIFTS_REQUEST,
    GET_ALL_SHIFTS_SUCCESS,
    GET_ALL_SHIFTS_FAILURE,
    GET_ALL_SHIFT_REPLACE_REQUESTS_REQUEST,
    GET_ALL_SHIFT_REPLACE_REQUESTS_SUCCESS,
    GET_ALL_SHIFT_REPLACE_REQUESTS_FAILURE,
    GET_SHIFTS_BY_DOMAIN_REQUEST,
    GET_SHIFTS_BY_DOMAIN_SUCCESS,
    GET_SHIFTS_BY_DOMAIN_FAILED,
    GENERATE_SHIFTS_MANUALLY_REQUEST,
    GENERATE_SHIFTS_MANUALLY_SUCCESS,
    GENERATE_SHIFTS_MANUALLY_FAILED,
    UPDATE_SHIFT_REQUEST,
    UPDATE_SHIFT_SUCCESS,
    UPDATE_SHIFT_FAILED,
    CREATE_SHIFT_REQUEST,
    CREATE_SHIFT_SUCCESS,
    CREATE_SHIFT_FAILED,
    DELETE_SHIFT_REQUEST,
    DELETE_SHIFT_SUCCESS,
    DELETE_SHIFT_FAILED,
    GET_SHIFTS_BY_MONTH_REQUEST,
    GET_SHIFTS_BY_MONTH_SUCCESS,
    GET_SHIFTS_BY_MONTH_FAILED,
    GET_SHIFTS_BY_DOCTOR_REQUEST,
    GET_SHIFTS_BY_DOCTOR_SUCCESS,
    GET_SHIFTS_BY_DOCTOR_FAILED
} from "../constants/shiftConstants";


const API = process.env.REACT_APP_NODE_API

// get calender
export const getCalender = (currentMonth, year) => async (dispatch) => {
    try {
        dispatch({
            type: GET_CALENDER_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/calendar/get-calendar?currentMonth=${currentMonth}&year=${year}`, config)
        dispatch({
            type: GET_CALENDER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_CALENDER_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}



// request shift replace
export const requestShiftReplace = (name, replacement, date, start, end) => async (dispatch) => {
    try {
        dispatch({
            type: POST_SHIFT_REPLACE_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            name,
            replacement,
            date,
            start,
            end
        }
        const { data } = await axios.post(`${API}/private/shift/shift-replace`, body, config)
        dispatch({
            type: POST_SHIFT_REPLACE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: POST_SHIFT_REPLACE_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get all shifts
export const getAllShifts = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_SHIFTS_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/shift/get-shifts`, config)
        dispatch({
            type: GET_ALL_SHIFTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_SHIFTS_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get all shift replace requests
export const getAllShiftReplaceRequests = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_SHIFT_REPLACE_REQUESTS_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/shift/get-shift-replace-requests`, config)
        dispatch({
            type: GET_ALL_SHIFT_REPLACE_REQUESTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_SHIFT_REPLACE_REQUESTS_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


// get shifts by domain
export const getShiftsByDomain = (domain) => async (dispatch) => {
    try {
        dispatch({
            type: GET_SHIFTS_BY_DOMAIN_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/shift/get-shifts-by-domain?domain=${domain}`, config)
        dispatch({
            type: GET_SHIFTS_BY_DOMAIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_SHIFTS_BY_DOMAIN_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// generate shifts manually
export const generateShiftsManually = (domain, startDate, endDate) => async (dispatch) => {
    try {
        dispatch({
            type: GENERATE_SHIFTS_MANUALLY_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            domain,
            startDate,
            endDate
        }
        const { data } = await axios.post(`${API}/private/shift/generate-shift`, body, config)
        dispatch({
            type: GENERATE_SHIFTS_MANUALLY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GENERATE_SHIFTS_MANUALLY_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// update shift
export const updateShift = (id, doctors) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_SHIFT_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            doctors
        }
        const { data } = await axios.put(`${API}/private/shift/update-shift/${id}`, body, config)
        dispatch({
            type: UPDATE_SHIFT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_SHIFT_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// create shift
export const createShift = (doctors, shiftDate, shiftDay, shiftTime, shiftDomain, slotId) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_SHIFT_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            doctors,
            shiftDate,
            shiftDay,
            shiftTime,
            shiftDomain,
            slotId
        }
        const { data } = await axios.post(`${API}/private/shift/create-shift`, body, config)
        dispatch({
            type: CREATE_SHIFT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_SHIFT_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// delete shift
export const deleteShift = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_SHIFT_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.delete(`${API}/private/shift/delete-shift/${id}`, config)
        dispatch({
            type: DELETE_SHIFT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_SHIFT_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get shuifts by month
export const getShiftsByMonth = (month, year, domain) => async (dispatch) => {
    try {
        dispatch({
            type: GET_SHIFTS_BY_MONTH_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/shift/get-shifts-by-month?month=${month}&year=${year}&domain=${domain}`, config)
        dispatch({
            type: GET_SHIFTS_BY_MONTH_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_SHIFTS_BY_MONTH_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get shifts by doctor
export const getShiftsByDoctor = (id, domain) => async (dispatch) => {
    try {
        dispatch({
            type: GET_SHIFTS_BY_DOCTOR_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/shift/get-shifts-by-doctor/${id}?domain=${domain}`, config)
        dispatch({
            type: GET_SHIFTS_BY_DOCTOR_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_SHIFTS_BY_DOCTOR_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}