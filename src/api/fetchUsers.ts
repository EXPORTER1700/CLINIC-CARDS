import axios from "axios";
import {FetchURL} from "../constants/fetchURL";
import {makeRequestParams} from "../helpers/makeRequestParams";

export const fetchUsers = async (param: string, values: string[]) => {
    return await axios.get(FetchURL.USERS + makeRequestParams(param, values))
}