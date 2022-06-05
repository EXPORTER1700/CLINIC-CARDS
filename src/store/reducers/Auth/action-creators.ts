import {IUser} from "../../../types/user";
import {AuthActions, AuthActionTypes} from "./types";
import axios from "axios";
import {AppDispatch} from "../index";
import {FetchURL} from "../../../constants/fetchURL";
import {fetchUserWithParams} from "../../../api/fetchUserWithParams";

export const authActionCreators = {
    setUser: (payload: IUser): AuthActions => ({type: AuthActionTypes.SET_USER, payload}),
    setIsAuth: (payload: boolean): AuthActions => ({type: AuthActionTypes.SET_IS_AUTH, payload}),
    setIsLoading: (payload: boolean): AuthActions => ({type: AuthActionTypes.SET_IS_LOADING, payload}),
    setError: (payload: string): AuthActions => ({type: AuthActionTypes.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        dispatch(authActionCreators.setIsLoading(true))
        const {data} = await fetchUserWithParams({username, password})
        if (data.length) {
            dispatch(authActionCreators.setUser(data[0]))
            dispatch(authActionCreators.setIsAuth(true))
        } else {
            dispatch(authActionCreators.setError('Неверный логин или пароль'))
        }
        dispatch(authActionCreators.setIsLoading(false))
    }
}