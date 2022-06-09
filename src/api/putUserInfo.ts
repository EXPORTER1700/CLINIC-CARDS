import axios from "axios";
import {FetchURL} from "../constants/fetchURL";
import {IUser} from "../types/user";

export const putUserInfo = async (user: IUser, data: object) => {
    await axios.put(FetchURL.USERS + user.id, {
        ...user,
        ...data
    })
}