import { combineReducers } from 'redux'
import {
    userSigninReducer,
    getSingleUserReducer,
    getAllUsersReducer,
    requestLeaveReducer,
    getLeavesReducer,
    requestSpecialReducer,
    getSpecialRequestsReducer,
    addAvailabilityReducer,
    getAvailabilityReducer,
    deleteAvailabilityByDayReducer,
    updateUserReducer
} from './userReducer'
import {
    signInManagerReducer,
    updateManagerReducer,
    addDoctorReducer,
    deleteDoctorReducer,
    searchDoctorReducer,
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
    requestShiftReplaceReducer,
    updateSlotReducer,
    getAllShiftsReducer
} from './shiftReducer'
import {
    forgotPasswordReducer,
    resetPasswordReducer
} from './passwordReducer'

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
    addAvailability: addAvailabilityReducer,
    getAvailability: getAvailabilityReducer,
    deleteAvailabilityByDay: deleteAvailabilityByDayReducer,
    updateUser: updateUserReducer,
    // manager actions
    signInManager: signInManagerReducer,
    updateManager: updateManagerReducer,
    addDoctor: addDoctorReducer,
    searchDoctor: searchDoctorReducer,
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
    updateSlot: updateSlotReducer,
    getAllShifts: getAllShiftsReducer,
    // password
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer

})

export default rootReducer
