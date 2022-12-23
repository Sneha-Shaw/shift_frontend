import {
    MANAGER_SIGNIN_REQUEST,
    MANAGER_SIGNIN_SUCCESS,
    MANAGER_SIGNIN_FAILED,
    MANAGER_LOGOUT,
    GET_MANAGER_INFO_REQUEST,
    GET_MANAGER_INFO_SUCCESS,
    GET_MANAGER_INFO_FAILED,
    ADD_DOCTOR_REQUEST,
    ADD_DOCTOR_SUCCESS,
    ADD_DOCTOR_FAILED,
    DELETE_DOCTOR_REQUEST,
    DELETE_DOCTOR_SUCCESS,
    DELETE_DOCTOR_FAILED,
    UPDATE_DOCTOR_REQUEST,
    UPDATE_DOCTOR_SUCCESS,
    UPDATE_DOCTOR_FAILED,
    GET_ALL_DOCTORS_REQUEST,
    GET_ALL_DOCTORS_SUCCESS,
    GET_ALL_DOCTORS_FAILED,
    GET_DOCTOR_BY_ID_REQUEST,
    GET_DOCTOR_BY_ID_SUCCESS,
    GET_DOCTOR_BY_ID_FAILED
} from '../constants/managerConstants'

// SIGNIN MANAGER
const signInManagerState = {
    loading: false,
    managerInfo: null,
    error: null,
    isAuthenticated: false
}
export const signInManagerReducer = (state = signInManagerState, action) => {
    switch (action.type) {
        case MANAGER_SIGNIN_REQUEST:
            return {
                ...state,
                managerInfo: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case MANAGER_SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                managerInfo: action.payload
            }
        case MANAGER_SIGNIN_FAILED:
            return {
                ...state,
                loading: false,
                managerInfo: null,
                isAuthenticated: false,
                error: action.payload
            }
        case MANAGER_LOGOUT:
            return {
                managerInfo: null
            }
        default:
            return state
    }
}

// GET MANAGER INFO
const getManagerInfoState = {
    loading: false,
    manager: null,
    error: null,
    isAuthenticated: false
}
export const getManagerInfoReducer = (state = getManagerInfoState, action) => {
    switch (action.type) {
        case GET_MANAGER_INFO_REQUEST:
            return {
                ...state,
                manager: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_MANAGER_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                manager: action.payload
            }
        case GET_MANAGER_INFO_FAILED:
            return {
                ...state,
                loading: false,
                manager: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// ADD DOCTOR
const addDoctorState = {
    loading: false,
    doctorInfo: null,
    error: null,
    isAuthenticated: false
}
export const addDoctorReducer = (state = addDoctorState, action) => {
    switch (action.type) {
        case ADD_DOCTOR_REQUEST:
            return {
                ...state,
                doctorInfo: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case ADD_DOCTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                doctorInfo: action.payload
            }
        case ADD_DOCTOR_FAILED:
            return {
                ...state,
                loading: false,
                doctorInfo: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// DELETE DOCTOR
const deleteDoctorState = {
    loading: false,
    doctorInfo: null,
    error: null,
    isAuthenticated: false
}
export const deleteDoctorReducer = (state = deleteDoctorState, action) => {
    switch (action.type) {
        case DELETE_DOCTOR_REQUEST:
            return {
                ...state,
                doctorInfo: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case DELETE_DOCTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                doctorInfo: action.payload
            }
        case DELETE_DOCTOR_FAILED:
            return {
                ...state,
                loading: false,
                doctorInfo: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// UPDATE DOCTOR
const updateDoctorState = {
    loading: false,
    doctorInfo: null,
    error: null,
    isAuthenticated: false
}
export const updateDoctorReducer = (state = updateDoctorState, action) => {
    switch (action.type) {
        case UPDATE_DOCTOR_REQUEST:
            return {
                ...state,
                doctorInfo: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case UPDATE_DOCTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                doctorInfo: action.payload
            }
        case UPDATE_DOCTOR_FAILED:
            return {
                ...state,
                loading: false,
                doctorInfo: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// GET ALL DOCTORS
const getAllDoctorsState = {
    loading: false,
    doctorsInfo: null,
    error: null,
    isAuthenticated: false
}
export const getAllDoctorsReducer = (state = getAllDoctorsState, action) => {
    switch (action.type) {
        case GET_ALL_DOCTORS_REQUEST:
            return {
                ...state,
                doctorsInfo: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_ALL_DOCTORS_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                doctorsInfo: action.payload
            }
        case GET_ALL_DOCTORS_FAILED:
            return {
                ...state,
                loading: false,
                doctorsInfo: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// GET DOCTOR BY ID
const getDoctorByIdState = {
    loading: false,
    doctorInfo: null,
    error: null,
    isAuthenticated: false
}
export const getDoctorByIdReducer = (state = getDoctorByIdState, action) => {
    switch (action.type) {
        case GET_DOCTOR_BY_ID_REQUEST:
            return {
                ...state,
                doctorInfo: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_DOCTOR_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                doctorInfo: action.payload
            }
        case GET_DOCTOR_BY_ID_FAILED:
            return {
                ...state,
                loading: false,
                doctorInfo: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}