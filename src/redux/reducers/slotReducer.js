import {
    GET_ALL_SLOTS_REQUEST,
    GET_ALL_SLOTS_SUCCESS,
    GET_ALL_SLOTS_FAILURE,
    UPDATE_SLOT_REQUEST,
    UPDATE_SLOT_SUCCESS,
    UPDATE_SLOT_FAILURE
} from '../constants/slotConstants'


// get all slots
const getAllSlotsState = {
    loading: false,
    slots: null,
    error: null,
    isAuthenticated: false
}
export const getAllSlotsReducer = (state = getAllSlotsState, action) => {
    switch (action.type) {
        case GET_ALL_SLOTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_SLOTS_SUCCESS:
            return {
                ...state,
                loading: false,
                slots: action.payload
            }
        case GET_ALL_SLOTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// update slot
const updateSlotState = {
    loading: false,
    slot: null,
    error: null,
    isAuthenticated: false
}
export const updateSlotReducer = (state = updateSlotState, action) => {
    switch (action.type) {
        case UPDATE_SLOT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_SLOT_SUCCESS:
            return {
                ...state,
                loading: false,
                slot: action.payload
            }
        case UPDATE_SLOT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}