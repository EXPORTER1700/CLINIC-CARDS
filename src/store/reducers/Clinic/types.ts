import {IClinic} from "../../../types/clinic";

export interface ClinicState {
    clinic: IClinic
    isLoading: boolean
    error: string
    isClinic: boolean
}

export enum ClinicActionTypes {
    SET_CLINIC = "SET_CLINIC",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
    SET_IS_CLINIC = "SET_IS_CLINIC"
}

export interface SetClinicAction {
    type: ClinicActionTypes.SET_CLINIC
    payload: IClinic
}

export interface SetIsLoadingAction {
    type: ClinicActionTypes.SET_IS_LOADING
    payload: boolean
}

export interface SetErrorAction {
    type: ClinicActionTypes.SET_ERROR
    payload: string
}

export interface SetIsClinicAction {
    type: ClinicActionTypes.SET_IS_CLINIC
    payload: boolean
}

export type ClinicActions = SetIsLoadingAction | SetErrorAction | SetClinicAction | SetIsClinicAction