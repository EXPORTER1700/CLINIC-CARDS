import {IBaseUserInfo, IUser} from "../types/user";

export const makeUserObject = (user: IBaseUserInfo): IUser => {
    return ({
        ...user,
        firstName: '',
        lastName: '',
        id: String(Date.now()),
        role: '',
        clinic: '',
        position: '',
        photo: ''
    })
}