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
    updateBreaksStatusReducer,
    getAllLeavesReducer,
    approveDenyLeaveReducer,
    getAllSpecialRequestsReducer,
    approveDenySpecialRequestReducer
} from './managerReducer'
import {
    getCalenderReducer,
    getAllSlotsReducer
} from './shiftReducer'


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
    updateBreaksStatus: updateBreaksStatusReducer,
    getAllLeaves: getAllLeavesReducer,
    approveDenyLeave: approveDenyLeaveReducer,
    getAllSpecialRequests: getAllSpecialRequestsReducer,
    approveDenySpecialRequest: approveDenySpecialRequestReducer,
    getCalender: getCalenderReducer,
    getAllSlots: getAllSlotsReducer
})

export default rootReducer
