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
    UPDATE_SLOT_FAILURE
} from "../constants/shiftConstants";

// get calender
const getCalenderState = {
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
const getAllSlotsState = {
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

// update slot
const updateSlotState = {
    loading: false,
    slot: null,
    error: null,
    isAuthenticated: false
}
export const updateSlotReducer = (state = updateSlotState, action) => {
    switch (action.type) {
        case UPDATE_SLOT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_SLOT_SUCCESS:
            return {
                ...state,
                loading: false,
                slot: action.payload
            }
        case UPDATE_SLOT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

//request shift replace
const requestShiftReplaceState = {
    loading: false,
    shiftReplace: null,
    error: null,
    isAuthenticated: false
}
export const requestShiftReplaceReducer = (state = requestShiftReplaceState, action) => {
    switch (action.type) {
        case POST_SHIFT_REPLACE_REQUEST:
            return {
                ...state,
                shiftReplace: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case POST_SHIFT_REPLACE_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                shiftReplace: action.payload

            }
        case POST_SHIFT_REPLACE_FAILED:
            return {
                ...state,
                loading: false,
                shiftReplace: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}
