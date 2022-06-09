import {IBaseUserInfo, IUser} from "../types/user";

export const makeUserObject = (user: IBaseUserInfo): IUser => {
    const baseObject: IUser = {
        username: '',
        password: '',
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        id: String(Date.now()),
        clinics: [],
        notifications: [],
    }
    return ({
        ...baseObject,
        ...user
    })
}
