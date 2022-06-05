import axios from "axios";
import {IUser} from "../types/user";
import {FetchURL} from "../constants/fetchURL";

export const fetchUserWithParams = async (params: object) => {
    return  await axios.get<IUser[]>(FetchURL.USERS, {
        params
    })
}