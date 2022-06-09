import {IClinic} from "../../../types/clinic";
import {ClinicActions, ClinicActionTypes} from "./types";
import {AppDispatch} from "../index";
import {fetchClinicWithParams} from "../../../api/fetchClinicWithParam";

export const clinicActionCreators = {
    setClinic: (payload: IClinic): ClinicActions => ({type: ClinicActionTypes.SET_CLINIC, payload}),
    setIsClinic: (payload: boolean): ClinicActions => ({type: ClinicActionTypes.SET_IS_CLINIC, payload}),
    setIsLoading: (payload: boolean): ClinicActions => ({type: ClinicActionTypes.SET_IS_LOADING, payload}),
    setError: (payload: string): ClinicActions => ({type: ClinicActionTypes.SET_ERROR, payload}),
    installClinic: (id: string) => async (dispatch: AppDispatch) => {
        dispatch(clinicActionCreators.setIsLoading(true))
        const {data} = await fetchClinicWithParams({id})
        const [clinic] = data
        if (data.length) {
            await dispatch(clinicActionCreators.setClinic(clinic))
            await dispatch(clinicActionCreators.setIsClinic(true))
        } else {
            await dispatch(clinicActionCreators.setError('Такой клиники нет'))
        }
        dispatch(clinicActionCreators.setIsLoading(false))
    },
    clearClinic: () => (dispatch: AppDispatch) => {
        dispatch(clinicActionCreators.setIsClinic(false))
        dispatch(clinicActionCreators.setClinic({} as IClinic))
    }
}