import {IPatient} from "./patient";
import {IEvent} from "./event";

export interface IBaseClinicInfo {
    name: string
    password: string
}

export interface IClinic extends IBaseClinicInfo {
    id: string
    patients: IPatient[] | []
    admin: string
    workers: string[]
    events: IEvent[] | []
}