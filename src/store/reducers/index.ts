import {combineReducers} from "redux";
import {store} from "../index";
import {authReducer} from "./Auth";
import {clinicReducer} from "./Clinic";

export const rootReducer = combineReducers({
    auth: authReducer,
    clinic: clinicReducer
})
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;