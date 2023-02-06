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
    requestShiftReplaceReducer,
    getAllShiftsReducer,
    getAllShiftReplaceRequestsReducer,
    getShiftsByDomainReducer,
    getShiftsByMonthReducer,
    getShiftsByDoctorReducer,
    generateShiftsManuallyReducer,
    updateShiftReducer,
    createShiftReducer,
    deleteShiftReducer
} from './shiftReducer'
import {
    addAvailabilityReducer,
    getAvailabilityReducer,
    deleteAvailabilityReducer,
    getAvailabilityByDateReducer,
    getAllAvailabilityReducer,
    deleteAvailabilityByDateReducer
} from './availabilityReducer'
import {
    updateSlotReducer,
    getAllSlotsReducer
} from './slotReducer'
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
    getAllShifts: getAllShiftsReducer,
    getAllShiftReplaceRequests: getAllShiftReplaceRequestsReducer,
    getShiftsByDomain: getShiftsByDomainReducer,
    getShiftsByMonth: getShiftsByMonthReducer,
    getShiftsByDoctor: getShiftsByDoctorReducer,
    generateShiftsManually: generateShiftsManuallyReducer,
    updateShift: updateShiftReducer,
    createShift: createShiftReducer,
    deleteShift: deleteShiftReducer,
    // slot actions
    getAllSlots: getAllSlotsReducer,
    updateSlot: updateSlotReducer,
    // availability actions
    addAvailability: addAvailabilityReducer,
    getAvailability: getAvailabilityReducer,
    deleteAvailability: deleteAvailabilityReducer,
    getAvailabilityByDate: getAvailabilityByDateReducer,
    getAllAvailability: getAllAvailabilityReducer,
    deleteAvailabilityByDate: deleteAvailabilityByDateReducer,
    // password
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer

})

export default rootReducer
