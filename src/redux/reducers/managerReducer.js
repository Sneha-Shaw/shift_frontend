import {
    MANAGER_SIGNIN_REQUEST,
    MANAGER_SIGNIN_SUCCESS,
    MANAGER_SIGNIN_FAILED,
    MANAGER_LOGOUT,
    GET_MANAGER_INFO_REQUEST,
    GET_MANAGER_INFO_SUCCESS,
    GET_MANAGER_INFO_FAILED,
    UPDATE_MANAGER_REQUEST,
    UPDATE_MANAGER_SUCCESS,
    UPDATE_MANAGER_FAILED,
    ADD_DOCTOR_REQUEST,
    ADD_DOCTOR_SUCCESS,
    ADD_DOCTOR_FAILED,
    SEARCH_DOCTOR_REQUEST,
    SEARCH_DOCTOR_SUCCESS,
    SEARCH_DOCTOR_FAILED,
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
    GET_DOCTOR_BY_ID_FAILED,
    ADD_BREAKS_REQUEST,
    ADD_BREAKS_SUCCESS,
    ADD_BREAKS_FAILED,
    DELETE_BREAKS_REQUEST,
    DELETE_BREAKS_SUCCESS,
    DELETE_BREAKS_FAILED,
    GET_ALL_BREAKS_REQUEST,
    GET_ALL_BREAKS_SUCCESS,
    GET_ALL_BREAKS_FAILED,
    GET_BREAKS_BY_ID_REQUEST,
    GET_BREAKS_BY_ID_SUCCESS,
    GET_BREAKS_BY_ID_FAILED,
    UPDATE_BREAK_STATUS_REQUEST,
    UPDATE_BREAK_STATUS_SUCCESS,
    UPDATE_BREAK_STATUS_FAILED,
    GET_ALL_LEAVES_REQUEST,
    GET_ALL_LEAVES_SUCCESS,
    GET_ALL_LEAVES_FAILED,
    APPROVE_DENY_LEAVE_REQUEST,
    APPROVE_DENY_LEAVE_SUCCESS,
    APPROVE_DENY_LEAVE_FAILED,
    GET_ALL_SPECIAL_REQUESTS_REQUEST,
    GET_ALL_SPECIAL_REQUESTS_SUCCESS,
    GET_ALL_SPECIAL_REQUESTS_FAILED,
    APPROVE_DENY_SPECIAL_REQUEST_REQUEST,
    APPROVE_DENY_SPECIAL_REQUEST_SUCCESS,
    APPROVE_DENY_SPECIAL_REQUEST_FAILED

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

// Update Manager
const updateManagerState = {
    loading: false,
    manager: null,
    error: null,
    isAuthenticated: false
}
export const updateManagerReducer = (state = updateManagerState, action) => {
    switch (action.type) {
        case UPDATE_MANAGER_REQUEST:
            return {
                ...state,
                manager: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case UPDATE_MANAGER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                manager: action.payload
            }
        case UPDATE_MANAGER_FAILED:
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

// SEARCH DOCTOR
const searchDoctorState = {
    loading: false,
    doctorInfo: null,
    error: null,
    isAuthenticated: false
}
export const searchDoctorReducer = (state = searchDoctorState, action) => {
    switch (action.type) {
        case SEARCH_DOCTOR_REQUEST:
            return {
                ...state,
                doctorInfo: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case SEARCH_DOCTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                doctorInfo: action.payload
            }
        case SEARCH_DOCTOR_FAILED:
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

// ADD BREAKS
const addBreaksState = {
    loading: false,
    breaks: null,
    error: null,
    isAuthenticated: false
}
export const addBreaksReducer = (state = addBreaksState, action) => {
    switch (action.type) {
        case ADD_BREAKS_REQUEST:
            return {
                ...state,
                breaks: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case ADD_BREAKS_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                breaks: action.payload
            }
        case ADD_BREAKS_FAILED:
            return {
                ...state,
                loading: false,
                breaks: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// GET BREAKS
const getBreaksState = {
    loading: false,
    breaks: null,
    error: null,
    isAuthenticated: false
}
export const getBreaksReducer = (state = getBreaksState, action) => {
    switch (action.type) {
        case GET_BREAKS_BY_ID_REQUEST:
            return {
                ...state,
                breaks: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_BREAKS_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                breaks: action.payload
            }
        case GET_BREAKS_BY_ID_FAILED:
            return {
                ...state,
                loading: false,
                breaks: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// DELETE BREAKS
const deleteBreaksState = {
    loading: false,
    breaks: null,
    error: null,
    isAuthenticated: false
}
export const deleteBreaksReducer = (state = deleteBreaksState, action) => {
    switch (action.type) {
        case DELETE_BREAKS_REQUEST:
            return {
                ...state,
                breaks: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case DELETE_BREAKS_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                breaks: action.payload
            }
        case DELETE_BREAKS_FAILED:
            return {
                ...state,
                loading: false,
                breaks: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// GET ALL BREAKS
const getAllBreaksState = {
    loading: false,
    breaks: null,
    error: null,
    isAuthenticated: false
}
export const getAllBreaksReducer = (state = getAllBreaksState, action) => {
    switch (action.type) {
        case GET_ALL_BREAKS_REQUEST:
            return {
                ...state,
                breaks: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_ALL_BREAKS_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                breaks: action.payload
            }
        case GET_ALL_BREAKS_FAILED:
            return {
                ...state,
                loading: false,
                breaks: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// UPDATE BREAKS STATUS
const updateBreaksStatusState = {
    loading: false,
    breaks: null,
    error: null,
    isAuthenticated: false
}
export const updateBreaksStatusReducer = (state = updateBreaksStatusState, action) => {
    switch (action.type) {
        case UPDATE_BREAK_STATUS_REQUEST:
            return {
                ...state,
                breaks: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case UPDATE_BREAK_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                breaks: action.payload
            }
        case UPDATE_BREAK_STATUS_FAILED:
            return {
                ...state,
                loading: false,
                breaks: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// GET ALL LEAVES
const getAllLeavesState = {
    loading: false,
    leaves: null,
    error: null,
    isAuthenticated: false
}
export const getAllLeavesReducer = (state = getAllLeavesState, action) => {
    switch (action.type) {
        case GET_ALL_LEAVES_REQUEST:
            return {
                ...state,
                leaves: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_ALL_LEAVES_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                leaves: action.payload
            }
        case GET_ALL_LEAVES_FAILED:
            return {
                ...state,
                loading: false,
                leaves: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// APPROVE DENY LEAVE
const approveDenyLeaveState = {
    loading: false,
    leaves: null,
    error: null,
    isAuthenticated: false
}
export const approveDenyLeaveReducer = (state = approveDenyLeaveState, action) => {
    switch (action.type) {
        case APPROVE_DENY_LEAVE_REQUEST:
            return {
                ...state,
                leaves: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case APPROVE_DENY_LEAVE_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                leaves: action.payload
            }
        case APPROVE_DENY_LEAVE_FAILED:
            return {
                ...state,
                loading: false,
                leaves: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// GET ALL SPECIAL REQUESTS
const getAllSpecialRequestsState = {
    loading: false,
    specialRequests: null,
    error: null,
    isAuthenticated: false
}
export const getAllSpecialRequestsReducer = (state = getAllSpecialRequestsState, action) => {
    switch (action.type) {
        case GET_ALL_SPECIAL_REQUESTS_REQUEST:
            return {
                ...state,
                specialRequests: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case GET_ALL_SPECIAL_REQUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                specialRequests: action.payload
            }
        case GET_ALL_SPECIAL_REQUESTS_FAILED:
            return {
                ...state,
                loading: false,
                specialRequests: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}

// APPROVE DENY SPECIAL REQUEST
const approveDenySpecialRequestState = {
    loading: false,
    specialRequests: null,
    error: null,
    isAuthenticated: false
}
export const approveDenySpecialRequestReducer = (state = approveDenySpecialRequestState, action) => {
    switch (action.type) {
        case APPROVE_DENY_SPECIAL_REQUEST_REQUEST:
            return {
                ...state,
                specialRequests: null,
                error: null,
                isAuthenticated: false,
                loading: true
            }
        case APPROVE_DENY_SPECIAL_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null,
                specialRequests: action.payload
            }
        case APPROVE_DENY_SPECIAL_REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                specialRequests: null,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return state
    }
}
