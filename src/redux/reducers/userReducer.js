import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_LOGOUT,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILED
} from '../constants/userConstants'


//    SIGNIN REDUCER    
export const userSigninReducer = (
  state = {
    loading: false,
    userInfo: null,
    error: null,
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        userInfo: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        userInfo: action.payload

      }
    case USER_SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: action.payload
      }

    case USER_LOGOUT:
      return {
        userInfo: null
      }
    default:
      return state
  }
}

//get single user
export const getSingleUserReducer = (
  state = {
    loading: false,
    user: null,
    error: null,
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        user: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        user: action.payload

      }
    case GET_SINGLE_USER_FAILED:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}
