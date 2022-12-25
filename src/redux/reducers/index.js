import { combineReducers } from 'redux'
import { userSigninReducer, getSingleUserReducer } from './userReducer'
import {
    signInManagerReducer,
    addDoctorReducer,
    deleteDoctorReducer,
    updateDoctorReducer,
    getAllDoctorsReducer,
    getDoctorByIdReducer,
    getManagerInfoReducer,
    addBreaksReducer,
    getBreaksReducer,
    deleteBreaksReducer,
    getAllBreaksReducer,
    updateBreaksStatusReducer
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
    getManagerInfo: getManagerInfoReducer,
    addBreaks: addBreaksReducer,
    getBreaksById: getBreaksReducer,
    deleteBreaks: deleteBreaksReducer,
    getAllBreaks: getAllBreaksReducer,
    updateBreaksStatus: updateBreaksStatusReducer
})

export default rootReducer
