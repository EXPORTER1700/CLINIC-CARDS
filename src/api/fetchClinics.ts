import axios from "axios";
import {FetchURL} from "../constants/fetchURL";
import {makeRequestParams} from "../helpers/makeRequestParams";

export const fetchClinics = async (param: string, values: string[]) => {
    return await axios.get(FetchURL.CLINICS + makeRequestParams(param, values))
}