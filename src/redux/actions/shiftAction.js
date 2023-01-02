import axios from "axios";
import {
    GET_CALENDER_REQUEST,
    GET_CALENDER_SUCCESS,
    GET_CALENDER_FAILURE,
    GET_ALL_SLOTS_REQUEST,
    GET_ALL_SLOTS_SUCCESS,
    GET_ALL_SLOTS_FAILURE,
    POST_SHIFT_REPLACE_REQUEST,
    POST_SHIFT_REPLACE_SUCCESS,
    POST_SHIFT_REPLACE_FAILED,
    UPDATE_SLOT_REQUEST,
    UPDATE_SLOT_SUCCESS,
    UPDATE_SLOT_FAILURE,
    GET_ALL_SHIFTS_REQUEST,
    GET_ALL_SHIFTS_SUCCESS,
    GET_ALL_SHIFTS_FAILURE,
    GET_ALL_SHIFT_REPLACE_REQUESTS_REQUEST,
    GET_ALL_SHIFT_REPLACE_REQUESTS_SUCCESS,
    GET_ALL_SHIFT_REPLACE_REQUESTS_FAILURE
} from "../constants/shiftConstants";


const API = process.env.REACT_APP_NODE_API

// get calender
export const getCalender = (currentMonth) => async (dispatch) => {
    try {
        dispatch({
            type: GET_CALENDER_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/shift/get-calendar?currentMonth=${currentMonth}`, config)
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


// get all slots
export const getAllSlots = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_SLOTS_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/shift/get-all-slots`, config)
        dispatch({
            type: GET_ALL_SLOTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_SLOTS_FAILURE,
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

// update slot
export const updateSlot = (Allotment, slotTime) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_SLOT_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            Allotment,
            slotTime
        }
        const { data } = await axios.put(`${API}/private/shift/update-slot`, body, config)
        dispatch({
            type: UPDATE_SLOT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_SLOT_FAILURE,
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