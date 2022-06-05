import {combineReducers} from "redux";
import {store} from "../index";
import {authReducer} from "./Auth";

export const rootReducer = combineReducers({
    auth: authReducer
})
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;