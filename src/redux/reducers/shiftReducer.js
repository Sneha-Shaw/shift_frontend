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


// get shifts by domain
const getShiftsByDomainState = {
    loading: false,
    shifts: null,
    error: null,
    isAuthenticated: false
}
export const getShiftsByDomainReducer = (state = getShiftsByDomainState, action) => {
    switch (action.type) {
        case GET_SHIFTS_BY_DOMAIN_REQUEST:
            return {
                ...state,
                shifts: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_SHIFTS_BY_DOMAIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                shifts: action.payload

            }
        case GET_SHIFTS_BY_DOMAIN_FAILED:
            return {
                ...state,
                loading: false,
                shifts: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}

// GENERATE SHIFTS MANUALY
const generateShiftsState = {
    loading: false,
    shifts: null,
    error: null,
    isAuthenticated: false
}

export const generateShiftsManuallyReducer = (state = generateShiftsState, action) => {
    switch (action.type) {
        case GENERATE_SHIFTS_MANUALLY_REQUEST:
            return {
                ...state,
                shifts: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GENERATE_SHIFTS_MANUALLY_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                shifts: action.payload

            }
        case GENERATE_SHIFTS_MANUALLY_FAILED:
            return {
                ...state,
                loading: false,
                shifts: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}

// Update shift
const updateShiftState = {
    loading: false,
    shift: null,
    error: null,
    isAuthenticated: false
}

export const updateShiftReducer = (state = updateShiftState, action) => {
    switch (action.type) {
        case UPDATE_SHIFT_REQUEST:
            return {
                ...state,
                shift: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case UPDATE_SHIFT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                shift: action.payload

            }
        case UPDATE_SHIFT_FAILED:
            return {
                ...state,
                loading: false,
                shift: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}

// create shift
const createShiftState = {
    loading: false,
    shift: null,
    error: null,
    isAuthenticated: false
}

export const createShiftReducer = (state = createShiftState, action) => {
    switch (action.type) {
        case CREATE_SHIFT_REQUEST:
            return {
                ...state,
                shift: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case CREATE_SHIFT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                shift: action.payload

            }
        case CREATE_SHIFT_FAILED:
            return {
                ...state,
                loading: false,
                shift: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}

// delete shift
const deleteShiftState = {
    loading: false,
    shift: null,
    error: null,
    isAuthenticated: false
}

export const deleteShiftReducer = (state = deleteShiftState, action) => {
    switch (action.type) {
        case DELETE_SHIFT_REQUEST:
            return {
                ...state,
                shift: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case DELETE_SHIFT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                shift: action.payload

            }
        case DELETE_SHIFT_FAILED:
            return {
                ...state,
                loading: false,
                shift: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}

// getShiftsByMonth
const getShiftsByMonthState = {
    loading: false,
    shifts: null,
    error: null,
    isAuthenticated: false
}

export const getShiftsByMonthReducer = (state = getShiftsByMonthState, action) => {
    switch (action.type) {
        case GET_SHIFTS_BY_MONTH_REQUEST:
            return {
                ...state,
                shifts: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_SHIFTS_BY_MONTH_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                shifts: action.payload

            }
        case GET_SHIFTS_BY_MONTH_FAILED:
            return {
                ...state,
                loading: false,
                shifts: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}

// getShiftsByDoctor
const getShiftsByDoctorState = {
    loading: false,
    shifts: null,
    error: null,
    isAuthenticated: false
}

export const getShiftsByDoctorReducer = (state = getShiftsByDoctorState, action) => {
    switch (action.type) {
        case GET_SHIFTS_BY_DOCTOR_REQUEST:
            return {
                ...state,
                shifts: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_SHIFTS_BY_DOCTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                shifts: action.payload

            }
        case GET_SHIFTS_BY_DOCTOR_FAILED:
            return {
                ...state,
                loading: false,
                shifts: null,
                isAuthenticated: false,
                error: action.payload
            }

        default:
            return state
    }
}