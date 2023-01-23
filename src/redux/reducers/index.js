import { combineReducers } from 'redux'
import {
    userSigninReducer,
    getSingleUserReducer,
    getAllUsersReducer,
    requestLeaveReducer,
    getLeavesReducer,
    requestSpecialReducer,
    getSpecialRequestsReducer,
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
    approveDenySpecialRequestReducer,
    addDomainReducer,
    getAllDomainsReducer,
    deleteDomainReducer,
    updateDomainReducer,
    getDomainByIdReducer

} from './managerReducer'
import {
    getCalenderReducer,
    getAllSlotsReducer,
    requestShiftReplaceReducer,
    updateSlotReducer,
    getAllShiftsReducer,
    getAllShiftReplaceRequestsReducer,
    addAvailabilityReducer,
    getAvailabilityReducer,
    deleteAvailabilityByDateReducer,
    deleteAvailabilityReducer,
    getAvailabilityByDateReducer,
    getAllAvailabilityReducer,
    getShiftsByDomainReducer
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
    addDomain: addDomainReducer,
    getAllDomains: getAllDomainsReducer,
    deleteDomain: deleteDomainReducer,
    updateDomain: updateDomainReducer,
    getDomainById: getDomainByIdReducer,
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
    getAllShiftReplaceRequests: getAllShiftReplaceRequestsReducer,
    addAvailability: addAvailabilityReducer,
    getAvailability: getAvailabilityReducer,
    deleteAvailabilityByDate: deleteAvailabilityByDateReducer,
    deleteAvailability: deleteAvailabilityReducer,
    getAvailabilityByDate: getAvailabilityByDateReducer,
    getAllAvailability: getAllAvailabilityReducer,
    getShiftsByDomain: getShiftsByDomainReducer,
    // password
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer

})

export default rootReducer
