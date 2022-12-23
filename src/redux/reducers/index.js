import { combineReducers } from 'redux'
import { userSigninReducer, getSingleUserReducer } from './userReducer'
import {
    signInManagerReducer,
    addDoctorReducer,
    deleteDoctorReducer,
    updateDoctorReducer,
    getAllDoctorsReducer,
    getDoctorByIdReducer,
    getManagerInfoReducer
} from './managerReducer'


const rootReducer = combineReducers({
    signInUser: userSigninReducer,
    getSingleUser: getSingleUserReducer,
    signInManager: signInManagerReducer,
    addDoctor: addDoctorReducer,
    deleteDoctor: deleteDoctorReducer,
    updateDoctor: updateDoctorReducer,
    getAllDoctors: getAllDoctorsReducer,
    getDoctorById: getDoctorByIdReducer,
    getManagerInfo: getManagerInfoReducer
})

export default rootReducer
