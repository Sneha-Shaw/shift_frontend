import axios from "axios";
import {
    GET_ALL_SLOTS_REQUEST,
    GET_ALL_SLOTS_SUCCESS,
    GET_ALL_SLOTS_FAILURE,
    UPDATE_SLOT_REQUEST,
    UPDATE_SLOT_SUCCESS,
    UPDATE_SLOT_FAILURE
} from '../constants/slotConstants'

const API = process.env.REACT_APP_NODE_API

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