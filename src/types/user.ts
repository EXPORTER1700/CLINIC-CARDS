export enum UserPositionEnum {
    doctor = "Doctor",
    owner = "Owner"
}

export enum UserRoleEnum {
    doctor = "Doctor",
    assistant = "Assistant"
}

export interface IUser {
    firstName: string
    lastName: string
    id: string
    username: string
    password: string
    email: string
    phone: string
    role: UserRoleEnum
    clinic: string
    position: UserPositionEnum
}

export interface IRegistrationData {
    username: string
    password: string
    email: string
    phone: string
}