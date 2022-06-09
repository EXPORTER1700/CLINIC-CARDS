import {IUser} from "../types/user";
import axios from "axios";
import {FetchURL} from "../constants/fetchURL";
import {IBaseClinicInfo} from "../types/clinic";
import {makeClinicObject} from "../helpers/makeClinicObject";

export const registrationClinic = (user: IUser, clinic: IBaseClinicInfo) => {
    axios.post(FetchURL.CLINICS, makeClinicObject(user, clinic))
}