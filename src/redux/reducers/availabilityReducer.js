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

// delete availability by id
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
