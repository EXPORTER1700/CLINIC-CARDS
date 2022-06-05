export enum UserPositionEnum {
    worker = "Worker",
    owner = "Owner"
}

export enum UserRoleEnum {
    doctor = "Doctor",
    assistant = "Assistant"
}

export interface IBaseUserInfo {
    username: string
    password: string
    email: string
    phone: string
}

export interface IGeneralUserInfo {
    firstName: string
    lastName: string
    photo: string
    position: UserPositionEnum | ''
}
export interface IWorkingInfo {
    role: UserRoleEnum | ''
    clinic: string
}

export interface IUser extends IBaseUserInfo, IGeneralUserInfo, IWorkingInfo {
    id: string
}