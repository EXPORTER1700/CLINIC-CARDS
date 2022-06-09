export interface IBaseUserInfo {
    username: string
    password: string
    email: string
    phone: string
    firstName: string
    lastName: string
}


export interface IUser extends IBaseUserInfo{
    id: string
    clinics: []
    notifications: []
}