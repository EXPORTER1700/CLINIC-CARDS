import {IUser} from "../../../types/user";

export interface AuthState {
    user: IUser
    isAuth: boolean
    isLoading: boolean
    error: string
    isAdmin: boolean
}

export enum AuthActionTypes {
    SET_USER = "SET_USER",
    SET_IS_AUTH = "SET_IS_AUTH",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
    SET_IS_ADMIN = "SET_IS_ADMIN"
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

export interface SetIsAdminAction {
    type: AuthActionTypes.SET_IS_ADMIN
    payload: boolean
}

export type AuthActions = SetIsAuthAction | SetErrorAction | SetIsLoadingAction | SetUserAction | SetIsAdminAction