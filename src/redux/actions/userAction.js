import axios from 'axios'
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




const localStorage = window.localStorage
const API = process.env.REACT_APP_NODE_API



// signIn user
export const signInUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST
    })

    const config = {
      'Content-Type': 'application/json'
    }
    const body = {
      email,
      password
    }
    const { data } = await axios.post(`${API}/public/auth/login`, body, config)
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
//get single user
export const getSingleUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SINGLE_USER_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const { data } = await axios.get(`${API}/public/auth/get-single-user/${id}`, config)
    dispatch({
      type: GET_SINGLE_USER_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: GET_SINGLE_USER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// get all users
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_USERS_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const { data } = await axios.get(`${API}/public/auth/get-all-users`, config)
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// user logout
export const logoutUser = () => (dispatch) => {
  if (localStorage.getItem('userInfo')) {
    localStorage.removeItem('userInfo')
  }
  dispatch({
    type: USER_LOGOUT
  })
}

// reset password
export const resetPassword = (id, password) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const body = {
      password
    }
    const { data } = await axios.post(`${API}/public/auth/${id}/reset-password`, body, config)
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data
    })
  }
  catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// request leave
export const requestLeave = (
  id,
  leaveType,
  leaveReason,
  startDate,
  endDate) => async (dispatch) => {
    try {
      dispatch({
        type: POST_LEAVE_REQUEST
      })
      const config = {
        'Content-Type': 'application/json'
      }
      const body = {

        leaveType,
        leaveReason,
        startDate,
        endDate
      }
      const { data } = await axios.post(`${API}/public/auth/${id}/request-leave`, body, config)
      dispatch({
        type: POST_LEAVE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: POST_LEAVE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }

// get leaves
export const getLeaves = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_LEAVES_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const { data } = await axios.get(`${API}/public/auth/${id}/get-leaves`, config)
    dispatch({
      type: GET_LEAVES_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: GET_LEAVES_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// request special
export const requestSpecial = (id, request) => async (dispatch) => {
  try {
    dispatch({
      type: POST_SPECIAL_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const body = {

      request
    }
    const { data } = await axios.post(`${API}/public/auth/${id}/special-request`, body, config)
    dispatch({
      type: POST_SPECIAL_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: POST_SPECIAL_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// get special requests
export const getSpecialRequests = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SPECIAL_REQUESTS_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const { data } = await axios.get(`${API}/public/auth/${id}/get-special-requests`, config)
    dispatch({
      type: GET_SPECIAL_REQUESTS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: GET_SPECIAL_REQUESTS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}


// ADD AVAILABILITY
export const addAvailability = (id, schedule) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_AVAILABILITY_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const body = {
      schedule
    }
    const { data } = await axios.post(`${API}/public/auth/${id}/add-availability`, body, config)
    dispatch({
      type: ADD_AVAILABILITY_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ADD_AVAILABILITY_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// get availability
export const getAvailability = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_AVAILABILITY_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const { data } = await axios.get(`${API}/public/auth/${id}/get-availability`, config)
    dispatch({
      type: GET_AVAILABILITY_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: GET_AVAILABILITY_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// delete availability by day
export const deleteAvailabilityByDay = (id, date) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_AVAILABILITY_BY_DAY_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const body = {
      date
    }
    const { data } = await axios.put(`${API}/public/auth/${id}/delete-availability-by-day`, body, config)
    dispatch({
      type: DELETE_AVAILABILITY_BY_DAY_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: DELETE_AVAILABILITY_BY_DAY_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// update user
export const updateUser = (
  id,
  name,
  email,
  mobile,
  address,
  city,
  state,
  pincode,
  about,
  designation,
  nightDuty
) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const body = {
      name,
      email,
      mobile,
      address,
      city,
      state,
      pincode,
      about,
      designation,
      nightDuty
    }
    const { data } = await axios.put(`${API}/public/auth/${id}/update-profile`, body, config)
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}