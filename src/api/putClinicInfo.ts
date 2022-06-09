import axios from "axios";
import {FetchURL} from "../constants/fetchURL";
import {IClinic} from "../types/clinic";

export const putClinicInfo = async (clinic: IClinic, data: object) => {
    await axios.put(FetchURL.CLINICS + clinic.id, {
        ...clinic,
        ...data
    })
}