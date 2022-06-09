import {ClinicActions, ClinicActionTypes, ClinicState} from "./types";
import {IClinic} from "../../../types/clinic";

const defaultState: ClinicState = {
    clinic: {} as IClinic,
    error: "",
    isLoading: false,
    isClinic: false
}

export const clinicReducer = (state = defaultState, action: ClinicActions): ClinicState => {
    switch (action.type) {
        case ClinicActionTypes.SET_CLINIC:
            return {...state, clinic: action.payload}
        case ClinicActionTypes.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case ClinicActionTypes.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case ClinicActionTypes.SET_IS_CLINIC:
            return {...state, isClinic: action.payload, isLoading: false}
        default:
            return state
    }
}