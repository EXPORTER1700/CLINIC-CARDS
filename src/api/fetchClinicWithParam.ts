import axios from "axios";
import {FetchURL} from "../constants/fetchURL";
import {IClinic} from "../types/clinic";

export const fetchClinicWithParams = async (params: object) => {
    return await axios.get<IClinic[]>(FetchURL.CLINICS, {
        params
    })
}