import axios from 'axios'
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
    APPROVE_DENY_SPECIAL_REQUEST_FAILED,
    ADD_DOMAIN_REQUEST,
    ADD_DOMAIN_SUCCESS,
    ADD_DOMAIN_FAILED,
    GET_ALL_DOMAINS_REQUEST,
    GET_ALL_DOMAINS_SUCCESS,
    GET_ALL_DOMAINS_FAILED,
    DELETE_DOMAIN_REQUEST,
    DELETE_DOMAIN_SUCCESS,
    DELETE_DOMAIN_FAILED,
    UPDATE_DOMAIN_REQUEST,
    UPDATE_DOMAIN_SUCCESS,
    UPDATE_DOMAIN_FAILED,
    GET_DOMAIN_BY_ID_REQUEST,
    GET_DOMAIN_BY_ID_SUCCESS,
    GET_DOMAIN_BY_ID_FAILED
} from '../constants/managerConstants'


const localStorage = window.localStorage
const API = process.env.REACT_APP_NODE_API

// signin manager
export const signInManager = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: MANAGER_SIGNIN_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            email,
            password
        }
        const { data } = await axios.post(`${API}/public/admin/login`, body, config)
        dispatch({
            type: MANAGER_SIGNIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('managerInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: MANAGER_SIGNIN_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// logout manager
export const logoutManager = () => (dispatch) => {
    if (localStorage.getItem('managerInfo')) {
        localStorage.removeItem('managerInfo')
    }
    dispatch({ type: MANAGER_LOGOUT })
}

// add doctor
export const addDoctor = (
    name,
    email,
    mobile,
    password,
    designation,
    domain,
    type,
    dutyHoursPerMonth,
    dutyHoursPerDay,
    nightDuty
) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_DOCTOR_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            name,
            email,
            mobile,
            password,
            designation,
            domain,
            type,
            dutyHoursPerMonth,
            dutyHoursPerDay,
            nightDuty
        }
        const { data } = await axios.post(`${API}/public/admin/add-doctor`, body, config)
        dispatch({
            type: ADD_DOCTOR_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_DOCTOR_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get manager info
export const getManagerInfo = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_MANAGER_INFO_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-profile/${id}`, config)
        dispatch({
            type: GET_MANAGER_INFO_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: GET_MANAGER_INFO_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// update manager
export const updateManager = (
    id,
    name,
    email,
    mobile,
    address,
    city,
    state,
    pincode,
    about
) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_MANAGER_REQUEST
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
            about
        }
        const { data } = await axios.put(`${API}/public/admin/update-profile/${id}`, body, config)
        dispatch({
            type: UPDATE_MANAGER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_MANAGER_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// search dpctor
export const searchDoctor = (name) => async (dispatch) => {
    try {
        dispatch({
            type: SEARCH_DOCTOR_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/search-doctor?name=${name}`, config)
        dispatch({
            type: SEARCH_DOCTOR_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SEARCH_DOCTOR_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// delete doctor
export const deleteDoctor = (email) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_DOCTOR_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            email
        }
        const { data } = await axios.post(`${API}/public/admin/delete-doctor`, body, config)
        dispatch({
            type: DELETE_DOCTOR_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_DOCTOR_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// update doctor
export const updateDoctor = (
    name,
    email,
    mobile,
    designation,
    domain,
    type,
    dutyHoursPerMonth,
    dutyHoursPerDay,
    nightDuty,
    id
) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_DOCTOR_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            name,
            email,
            mobile,
            designation,
            domain,
            type,
            dutyHoursPerMonth,
            dutyHoursPerDay,
            nightDuty
        }
        const { data } = await axios.put(`${API}/public/admin/update-doctor/${id}`, body, config)
        dispatch({
            type: UPDATE_DOCTOR_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_DOCTOR_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get all doctors
export const getAllDoctors = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_DOCTORS_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-all-doctors`, config)
        dispatch({
            type: GET_ALL_DOCTORS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_DOCTORS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get doctor by id
export const getDoctorById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_DOCTOR_BY_ID_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-doctor/${id}`, config)
        dispatch({
            type: GET_DOCTOR_BY_ID_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_DOCTOR_BY_ID_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// ADD BREAKS
export const addBreaks = (
    breakName,
    startTime,
    endTime,
    breakDuration,
    breakType,
    breakStatus
) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_BREAKS_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            breakName,
            startTime,
            endTime,
            breakDuration,
            breakType,
            breakStatus
        }
        const { data } = await axios.post(`${API}/public/admin/add-breaks`, body, config)
        dispatch({
            type: ADD_BREAKS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_BREAKS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get all breaks
export const getAllBreaks = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_BREAKS_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-all-breaks`, config)
        dispatch({
            type: GET_ALL_BREAKS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_BREAKS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get break by id
export const getBreaksById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_BREAKS_BY_ID_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-break/${id}`, config)
        dispatch({
            type: GET_BREAKS_BY_ID_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_BREAKS_BY_ID_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// update breaks status
export const updateBreaksStatus = (id, breakStatus) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_BREAK_STATUS_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            breakStatus
        }
        const { data } = await axios.put(`${API}/public/admin/update-break-status/${id}`, body, config)
        dispatch({
            type: UPDATE_BREAK_STATUS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_BREAK_STATUS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// delete breaks
export const deleteBreaks = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_BREAKS_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.post(`${API}/public/admin/delete-break/${id}`, config)
        dispatch({
            type: DELETE_BREAKS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_BREAKS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

//  get all leaves
export const getAllLeaves = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_LEAVES_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-all-leaves`, config)
        dispatch({
            type: GET_ALL_LEAVES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_LEAVES_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// approve deny leave
export const approveDenyLeave = (id, leaveStatus) => async (dispatch) => {
    try {
        dispatch({
            type: APPROVE_DENY_LEAVE_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            leaveStatus
        }
        const { data } = await axios.put(`${API}/public/admin/approve-deny-leave/${id}`, body, config)
        dispatch({
            type: APPROVE_DENY_LEAVE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: APPROVE_DENY_LEAVE_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// get all special requests
export const getAllSpecialRequests = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_SPECIAL_REQUESTS_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-all-special-requests`, config)
        dispatch({
            type: GET_ALL_SPECIAL_REQUESTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_SPECIAL_REQUESTS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// approve deny special request
export const approveDenySpecialRequest = (id, requestStatus) => async (dispatch) => {
    try {
        dispatch({
            type: APPROVE_DENY_SPECIAL_REQUEST_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            requestStatus
        }
        const { data } = await axios.put(`${API}/public/admin/approve-deny-special-request/${id}`, body, config)
        dispatch({
            type: APPROVE_DENY_SPECIAL_REQUEST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: APPROVE_DENY_SPECIAL_REQUEST_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// addDomain
export const addDomain = (domainName) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_DOMAIN_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            domainName
        }
        const { data } = await axios.post(`${API}/public/admin/add-domain`, body, config)
        dispatch({
            type: ADD_DOMAIN_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: ADD_DOMAIN_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
// getAllDomains
export const getAllDomains = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_DOMAINS_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-all-domains`, config)
        dispatch({
            type: GET_ALL_DOMAINS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: GET_ALL_DOMAINS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
// getDomainById
export const getDomainById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_DOMAIN_BY_ID_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/admin/get-domain-by-id/${id}`, config)
        dispatch({
            type: GET_DOMAIN_BY_ID_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: GET_DOMAIN_BY_ID_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
// updateDomain
export const updateDomain = (id, domainName) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_DOMAIN_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            domainName
        }
        const { data } = await axios.put(`${API}/public/admin/update-domain/${id}`, body, config)
        dispatch({
            type: UPDATE_DOMAIN_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: UPDATE_DOMAIN_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
// deleteDomain
export const deleteDomain = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_DOMAIN_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.post(`${API}/public/admin/delete-domain/${id}`, config)
        dispatch({
            type: DELETE_DOMAIN_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: DELETE_DOMAIN_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}