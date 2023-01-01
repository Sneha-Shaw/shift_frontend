import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILED,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILED
} from '../constants/passwordConstants'

// forgot password
const forgotPasswordState={
    loading: false,
    success: false,
    data:null,
    error: null
}

export const forgotPasswordReducer = (state = forgotPasswordState, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
            return { ...state, loading: true }
        case FORGOT_PASSWORD_SUCCESS:
            return { ...state, loading: false, success: true, data: action.payload }
        case FORGOT_PASSWORD_FAILED:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

// reset password
const resetPasswordState={
    loading: false,
    success: false,
    data:null,
    error: null
}

export const resetPasswordReducer = (state = resetPasswordState, action) => {
    switch (action.type) {
        case RESET_PASSWORD_REQUEST:
            return { ...state, loading: true }
        case RESET_PASSWORD_SUCCESS:
            return { ...state, loading: false, success: true, data: action.payload }
        case RESET_PASSWORD_FAILED:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}