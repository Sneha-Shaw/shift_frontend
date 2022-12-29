import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_LOGOUT,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILED,
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
  GET_SPECIAL_REQUESTS_FAILED,
  ADD_AVAILABILITY_REQUEST,
  ADD_AVAILABILITY_SUCCESS,
  ADD_AVAILABILITY_FAILED,
  GET_AVAILABILITY_REQUEST,
  GET_AVAILABILITY_SUCCESS,
  GET_AVAILABILITY_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  DELETE_AVAILABILITY_BY_DAY_REQUEST,
  DELETE_AVAILABILITY_BY_DAY_SUCCESS,
  DELETE_AVAILABILITY_BY_DAY_FAILED
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
// reset password
const resetPasswordState = {
  loading: false,
  passData: null,
  error: null,
  isAuthenticated: false
}
export const resetPasswordReducer = (state = resetPasswordState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        passData: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        passData: action.payload
      }
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        loading: false,
        passData: null,
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
const deleteAvailabilityByDayState = {
  loading: false,
  deleteData: null,
  error: null,
  isAuthenticated: false
}
export const deleteAvailabilityByDayReducer = (state = deleteAvailabilityByDayState, action) => {
  switch (action.type) {
    case DELETE_AVAILABILITY_BY_DAY_REQUEST:
      return {
        ...state,
        deleteData: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case DELETE_AVAILABILITY_BY_DAY_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        deleteData: action.payload

      }
    case DELETE_AVAILABILITY_BY_DAY_FAILED:
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

