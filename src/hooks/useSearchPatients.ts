import {useMemo} from "react";
import {IPatient} from "../types/patient";

export const useSearchPatients = (patients: IPatient[], search: string) => {
    return useMemo(() => {
        return patients.filter(patient => {
            const fullName = patient.firstName + ' ' + patient.lastName
            return fullName.toLowerCase().includes(search.toLowerCase())
        })
    }, [patients, search])
}