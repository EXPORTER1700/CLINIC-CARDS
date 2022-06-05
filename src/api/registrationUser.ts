import {IBaseUserInfo} from "../types/user";
import axios from "axios";
import {FetchURL} from "../constants/fetchURL";
import {makeUserObject} from "../helpers/makeUserObject";

export const registrationUser = (user: IBaseUserInfo) => {
    axios.post(FetchURL.USERS, makeUserObject(user))
}