import {AuthActions, AuthActionTypes, AuthState} from "./types";
import {IUser} from "../../../types/user";


const initialState: AuthState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
    error: ''
}

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_IS_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionTypes.SET_USER:
            return {...state, user: action.payload}
        case AuthActionTypes.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case AuthActionTypes.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}