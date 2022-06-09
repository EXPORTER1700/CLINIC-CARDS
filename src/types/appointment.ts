export enum AppointmentTypes {
    await = "Await",
    inProgress = "In progress",
    completed = "Completed"
}

export interface IAppointment {
    patient: string
    worker: string
    date: Date
    status: AppointmentTypes
}