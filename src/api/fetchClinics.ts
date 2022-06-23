import axios from "axios";
import {FetchURL} from "../constants/fetchURL";
import {makeRequestParams} from "../helpers/makeRequestParams";
import {IClinic} from "../types/clinic";

export const fetchClinics = async (param: string, values: string[]) => {
    return await axios.get<IClinic[]>(FetchURL.CLINICS + makeRequestParams(param, values))
}