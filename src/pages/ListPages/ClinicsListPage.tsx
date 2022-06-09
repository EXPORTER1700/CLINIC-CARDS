import React, {useEffect, useState} from 'react';
import ClinicsList from "../../components/List/Lists/ClinicsList";
import Wrapper from "../../components/Wrapper/Wrapper";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IClinic} from "../../types/clinic";
import {fetchClinics} from "../../api/fetchClinics";
import Loader from "../../ui/Loader/Loader";
import CustomTitle from "../../ui/CustomTitle/CustomTitle";


const ClinicsListPage = () => {
    const {user} = useTypedSelector(state => state.auth)
    const [clinics, setClinics] = useState<IClinic[]>([] as IClinic[])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (user.clinics.length) {
            setIsLoading(true)
            const fetchClinic = async () => {
                const {data} = await fetchClinics('id', user.clinics)
                setClinics(data)
                setIsLoading(false)
            }
            fetchClinic()
        }
    }, [])
    if (isLoading) return <Loader/>
    return (
        <Wrapper title={"Список клиник"}>
            <ClinicsList clinics={clinics}/>
            {!clinics.length && <CustomTitle>Пока не добавлена ни одна клиника</CustomTitle>}
        </Wrapper>
    );
};

export default ClinicsListPage;