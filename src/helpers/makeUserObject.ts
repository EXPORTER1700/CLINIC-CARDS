import {IRegistrationData, IUser, UserPositionEnum, UserRoleEnum} from "../types/user";

export const makeUserObject = (user: IRegistrationData): IUser => {
    return ({
        ...user,
        firstName: '',
        lastName: '',
        id: String(Date.now()),
        role: UserRoleEnum.doctor,
        clinic: '',
        position: UserPositionEnum.doctor,
    })
}