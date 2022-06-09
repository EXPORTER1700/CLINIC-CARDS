import {authActionCreators} from "./Auth/action-creators";
import {clinicActionCreators} from "./Clinic/action-creators";

export const allActionCreators = {
    ...authActionCreators,
    ...clinicActionCreators
}