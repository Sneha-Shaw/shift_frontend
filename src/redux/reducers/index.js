import { combineReducers } from 'redux'
import {
    userSigninReducer,
    getSingleUserReducer,
    getAllUsersReducer,
    requestLeaveReducer,
    getLeavesReducer,
    requestSpecialReducer,
    getSpecialRequestsReducer,
    resetPasswordReducer,
    addAvailabilityReducer,
    getAvailabilityReducer,
    deleteAvailabilityByDayReducer
} from './userReducer'
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
    getAllSlotsReducer,
    requestShiftReplaceReducer
} from './shiftReducer'


const rootReducer = combineReducers({
    // user actions
    signInUser: userSigninReducer,
    getSingleUser: getSingleUserReducer,
    getAllUsers: getAllUsersReducer,
    requestLeave: requestLeaveReducer,
    getLeaves: getLeavesReducer,
    requestSpecial: requestSpecialReducer,
    getSpecialRequests: getSpecialRequestsReducer,
    requestShiftReplace: requestShiftReplaceReducer,
    resetPassword: resetPasswordReducer,
    addAvailability: addAvailabilityReducer,
    getAvailability: getAvailabilityReducer,
    deleteAvailabilityByDay: deleteAvailabilityByDayReducer,
    // manager actions
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
    // shift actions
    getCalender: getCalenderReducer,
    getAllSlots: getAllSlotsReducer,

})

export default rootReducer
