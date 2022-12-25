import {
    GET_CALENDER_REQUEST,
    GET_CALENDER_SUCCESS,
    GET_CALENDER_FAILURE,
    GET_ALL_SLOTS_REQUEST,
    GET_ALL_SLOTS_SUCCESS,
    GET_ALL_SLOTS_FAILURE
} from "../constants/shiftConstants";

// get calender
const getCalenderState={
    loading: false,
    calender: null,
    error: null,
    isAuthenticated: false
}
export const getCalenderReducer = (state = getCalenderState, action) => {
    switch (action.type) {
        case GET_CALENDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_CALENDER_SUCCESS:
            return {
                ...state,
                loading: false,
                calender: action.payload
            }
        case GET_CALENDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// get all slots
const getAllSlotsState={
    loading: false,
    slots: null,
    error: null,
    isAuthenticated: false
}
export const getAllSlotsReducer = (state = getAllSlotsState, action) => {
    switch (action.type) {
        case GET_ALL_SLOTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_SLOTS_SUCCESS:
            return {
                ...state,
                loading: false,
                slots: action.payload
            }
        case GET_ALL_SLOTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}