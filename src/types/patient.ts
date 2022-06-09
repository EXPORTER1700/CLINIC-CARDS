import {IAppointment} from "./appointment";

export interface IPatientGeneralInfo {
    firstName: string
    lastName: string
    dateOfBirth: string
    phone: string
}

export interface IPatient extends IPatientGeneralInfo {
    id: string
    appointments: IAppointment[]
}