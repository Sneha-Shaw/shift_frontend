import axios from "axios";
import {
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
} from '../constants/availabilityConstants'

const API = process.env.REACT_APP_NODE_API


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


// delete availability by id
export const deleteAvailabilityByDate = (id,date,start,end) => async (dispatch) => {
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
        const { data } = await axios.post(`${API}/private/availability/delete-availability-by-date`,body, config)
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