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
    GET_ALL_SHIFT_REPLACE_REQUESTS_FAILURE,
    ADD_AVAILABILITY_REQUEST,
    ADD_AVAILABILITY_SUCCESS,
    ADD_AVAILABILITY_FAILED,
    GET_AVAILABILITY_REQUEST,
    GET_AVAILABILITY_SUCCESS,
    GET_AVAILABILITY_FAILED,
    GET_ALL_AVAILABILITY_REQUEST,
    GET_ALL_AVAILABILITY_SUCCESS,
    GET_ALL_AVAILABILITY_FAILED,
    DELETE_AVAILABILITY_REQUEST,
    DELETE_AVAILABILITY_SUCCESS,
    DELETE_AVAILABILITY_FAILED,
    GET_AVAILABILITY_BY_DATE_REQUEST,
    GET_AVAILABILITY_BY_DATE_SUCCESS,
    GET_AVAILABILITY_BY_DATE_FAILED,
    DELETE_AVAILABILITY_BY_DATE_REQUEST,
    DELETE_AVAILABILITY_BY_DATE_SUCCESS,
    DELETE_AVAILABILITY_BY_DATE_FAILED
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
        const { data } = await axios.get(`${API}/private/calendar/get-calendar?currentMonth=${currentMonth}`, config)
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
        const { data } = await axios.get(`${API}/private/slot/get-all-slots`, config)
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
        const { data } = await axios.put(`${API}/private/slot/update-slot`, body, config)
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

// ADD AVAILABILITY
export const addAvailability = (id, schedule) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_AVAILABILITY_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            id,
            schedule
        }
        const { data } = await axios.post(`${API}/private/availability/add-availability`, body, config)
        dispatch({
            type: ADD_AVAILABILITY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_AVAILABILITY_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get availability
export const getAvailability = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_AVAILABILITY_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/availability/${id}/get-availability`, config)
        dispatch({
            type: GET_AVAILABILITY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_AVAILABILITY_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get availability by date
export const getAvailabilityByDate = (date) => async (dispatch) => {
    try {
        dispatch({
            type: GET_AVAILABILITY_BY_DATE_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/availability/get-availability-by-date?date=${date}`, config)
        dispatch({
            type: GET_AVAILABILITY_BY_DATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_AVAILABILITY_BY_DATE_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get all availability
export const getAllAvailability = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_AVAILABILITY_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/availability/get-all-availability`, config)
        dispatch({
            type: GET_ALL_AVAILABILITY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_AVAILABILITY_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// delete availability by date
export const deleteAvailabilityByDate = (id, date,start,end) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_AVAILABILITY_BY_DATE_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            id,
            date,
            start,
            end
        }
        const { data } = await axios.put(`${API}/private/availability/delete-availability-by-date`, body, config)
        dispatch({
            type: DELETE_AVAILABILITY_BY_DATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_AVAILABILITY_BY_DATE_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// delete availability 
export const deleteAvailability = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_AVAILABILITY_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            id
        }
        console.log(body);
        const { data } = await axios.post(`${API}/private/availability/delete-availability`, body, config)
        dispatch({
            type: DELETE_AVAILABILITY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_AVAILABILITY_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
