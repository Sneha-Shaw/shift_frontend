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

// get all shifts
const getAllShiftsState = {
    loading: false,
    shifts: null,
    error: null,
    isAuthenticated: false
}
export const getAllShiftsReducer = (state = getAllShiftsState, action) => {
    switch (action.type) {
        case GET_ALL_SHIFTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_SHIFTS_SUCCESS:
            return {
                ...state,
                loading: false,
                shifts: action.payload
            }
        case GET_ALL_SHIFTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// get all shift replace requests
const getAllShiftReplaceRequestsState = {
    loading: false,
    requests: null,
    error: null,
    isAuthenticated: false
}
export const getAllShiftReplaceRequestsReducer = (state = getAllShiftReplaceRequestsState, action) => {
    switch (action.type) {
        case GET_ALL_SHIFT_REPLACE_REQUESTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_SHIFT_REPLACE_REQUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                requests: action.payload
            }
        case GET_ALL_SHIFT_REPLACE_REQUESTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

//add availability
const addAvailabilityState = {
    loading: false,
    availability: null,
    error: null,
    isAuthenticated: false
}
export const addAvailabilityReducer = (state = addAvailabilityState, action) => {
    switch (action.type) {
        case ADD_AVAILABILITY_REQUEST:
            return {
                ...state,
                availability: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case ADD_AVAILABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                availability: action.payload

            }
        case ADD_AVAILABILITY_FAILED:
            return {
                ...state,
                loading: false,
                availability: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}

//get availabilities
const getAvailabilityState = {
    loading: false,
    availabilities: null,
    error: null,
    isAuthenticated: false
}
export const getAvailabilityReducer = (state = getAvailabilityState, action) => {
    switch (action.type) {
        case GET_AVAILABILITY_REQUEST:
            return {
                ...state,
                availabilities: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_AVAILABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                availabilities: action.payload

            }
        case GET_AVAILABILITY_FAILED:
            return {
                ...state,
                loading: false,
                availabilities: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}

// delete availability by day
const deleteAvailabilityByDateState = {
    loading: false,
    deleteData: null,
    error: null,
    isAuthenticated: false
}
export const deleteAvailabilityByDateReducer = (state = deleteAvailabilityByDateState, action) => {
    switch (action.type) {
        case DELETE_AVAILABILITY_BY_DATE_REQUEST:
            return {
                ...state,
                deleteData: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case DELETE_AVAILABILITY_BY_DATE_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                deleteData: action.payload

            }
        case DELETE_AVAILABILITY_BY_DATE_FAILED:
            return {
                ...state,
                loading: false,
                deleteData: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}

// delete availability 
const deleteAvailabilityState = {
    loading: false,
    deleteData: null,
    error: null,
    isAuthenticated: false
}
export const deleteAvailabilityReducer = (state = deleteAvailabilityState, action) => {
    switch (action.type) {
        case DELETE_AVAILABILITY_REQUEST:
            return {
                ...state,
                deleteData: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case DELETE_AVAILABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                deleteData: action.payload

            }
        case DELETE_AVAILABILITY_FAILED:
            return {
                ...state,
                loading: false,
                deleteData: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}

// get availability by date
const getAvailabilityByDateState = {
    loading: false,
    availability: null,
    error: null,
    isAuthenticated: false
}
export const getAvailabilityByDateReducer = (state = getAvailabilityByDateState, action) => {
    switch (action.type) {
        case GET_AVAILABILITY_BY_DATE_REQUEST:
            return {
                ...state,
                availability: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_AVAILABILITY_BY_DATE_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                availability: action.payload

            }
        case GET_AVAILABILITY_BY_DATE_FAILED:
            return {
                ...state,
                loading: false,
                availability: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}

// get all availability
const getAllAvailabilityState = {
    loading: false,
    availabilities: null,
    error: null,
    isAuthenticated: false
}
export const getAllAvailabilityReducer = (state = getAllAvailabilityState, action) => {
    switch (action.type) {
        case GET_ALL_AVAILABILITY_REQUEST:
            return {
                ...state,
                availabilities: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_ALL_AVAILABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                availabilities: action.payload

            }
        case GET_ALL_AVAILABILITY_FAILED:
            return {
                ...state,
                loading: false,
                availabilities: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}