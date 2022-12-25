import axios from "axios";
import {
    GET_CALENDER_REQUEST,
    GET_CALENDER_SUCCESS,
    GET_CALENDER_FAILURE,
    GET_ALL_SLOTS_REQUEST,
    GET_ALL_SLOTS_SUCCESS,
    GET_ALL_SLOTS_FAILURE
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