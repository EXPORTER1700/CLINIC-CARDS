import {IUser} from "../../../types/user";

export interface AuthState {
    user: IUser
    isAuth: boolean
    isLoading: boolean
    error: string
}

export enum AuthActionTypes {
    SET_USER = "SET_USER",
    SET_IS_AUTH = "SET_IS_AUTH",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
}

export interface SetUserAction {
    type: AuthActionTypes.SET_USER
    payload: IUser
}

export interface SetIsAuthAction {
    type: AuthActionTypes.SET_IS_AUTH
    payload: boolean
}

export interface SetIsLoadingAction {
    type: AuthActionTypes.SET_IS_LOADING
    payload: boolean
}

export interface SetErrorAction {
    type: AuthActionTypes.SET_ERROR
    payload: string
}

export type AuthActions = SetIsAuthAction | SetErrorAction | SetIsLoadingAction | SetUserAction