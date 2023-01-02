import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_LOGOUT,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILED, 
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,
  POST_LEAVE_REQUEST,
  POST_LEAVE_SUCCESS,
  POST_LEAVE_FAILED,
  GET_LEAVES_REQUEST,
  GET_LEAVES_SUCCESS,
  GET_LEAVES_FAILED,
  POST_SPECIAL_REQUEST,
  POST_SPECIAL_SUCCESS,
  POST_SPECIAL_FAILED,
  GET_SPECIAL_REQUESTS_REQUEST,
  GET_SPECIAL_REQUESTS_SUCCESS,
  GET_SPECIAL_REQUESTS_FAILED
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

// get all users
const getAllUsersState={
  loading: false,
  users: null,
  error: null,
  isAuthenticated: false
}
export const getAllUsersReducer = (state = getAllUsersState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return {
        ...state,
        users: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        users: action.payload
      }
    case GET_ALL_USERS_FAILED:
      return {
        ...state,
        loading: false,
        users: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}

//request leave
const requestLeaveState = {
  loading: false,
  leave: null,
  error: null,
  isAuthenticated: false
}
export const requestLeaveReducer = (state = requestLeaveState, action) => {
  switch (action.type) {
    case POST_LEAVE_REQUEST:
      return {
        ...state,
        leave: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case POST_LEAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        leave: action.payload
      }
    case POST_LEAVE_FAILED:
      return {
        ...state,
        loading: false,
        leave: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}

//get leaves
const getLeavesState = {
  loading: false,
  leaves: null,
  error: null,
  isAuthenticated: false
}
export const getLeavesReducer = (state = getLeavesState, action) => {
  switch (action.type) {
    case GET_LEAVES_REQUEST:
      return {
        ...state,
        leaves: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case GET_LEAVES_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        leaves: action.payload
      }
    case GET_LEAVES_FAILED:
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

//request special
const requestSpecialState = {
  loading: false,
  special: null,
  error: null,
  isAuthenticated: false
}
export const requestSpecialReducer = (state = requestSpecialState, action) => {
  switch (action.type) {
    case POST_SPECIAL_REQUEST:
      return {
        ...state,
        special: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case POST_SPECIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        special: action.payload
      }
    case POST_SPECIAL_FAILED:
      return {
        ...state,
        loading: false,
        special: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}

//get special requests
const getSpecialRequestsState = {
  loading: false,
  specialRequests: null,
  error: null,
  isAuthenticated: false
}
export const getSpecialRequestsReducer = (state = getSpecialRequestsState, action) => {
  switch (action.type) {
    case GET_SPECIAL_REQUESTS_REQUEST:
      return {
        ...state,
        specialRequests: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case GET_SPECIAL_REQUESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        specialRequests: action.payload

      }
    case GET_SPECIAL_REQUESTS_FAILED:
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

// update user
const updateUserState = {
  loading: false,
  updateData: null,
  error: null,
  isAuthenticated: false
}
export const updateUserReducer = (state = updateUserState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        updateData: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        updateData: action.payload

      }
    case UPDATE_USER_FAILED:
      return {
        ...state,
        loading: false,
        updateData: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}