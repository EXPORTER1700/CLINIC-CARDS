import {IBaseClinicInfo, IClinic} from "../types/clinic";
import {IUser} from "../types/user";

export const makeClinicObject = (user: IUser, clinic: IBaseClinicInfo): IClinic => {
    const baseObject = {
        id: String(Date.now()),
        patients: [],
        workers: [user.id],
        admin: user.id,
        events: []
    }
    return ({
        ...baseObject,
        ...clinic
    })
}