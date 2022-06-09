import React, {ChangeEvent, useState} from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import PatientsList from "../../components/List/Lists/PatientsList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import CustomTitle from "../../ui/CustomTitle/CustomTitle";
import {linksEnum} from "../../constants/routes";
import SortAndAdd from "../../components/SortAndAdd/SortAndAdd";
import {IPatient} from "../../types/patient";

const PatientsListPage = () => {
    const {clinic} = useTypedSelector(state => state.clinic)
    const [search, setSearch] = useState('')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    // const searchClinic = useSearch<IPatient>(clinic.patients, ["firstName" , "lastName"], search)

    return (
        <Wrapper title="Список пациентов">
            <SortAndAdd
                value={search}
                onChange={handleChange}
                to={linksEnum.clinic + linksEnum.slash + clinic.id + linksEnum.createPatient}/>
            <PatientsList patients={clinic.patients}/>
            {!clinic.patients.length && <CustomTitle>Пока нет пациентов</CustomTitle>}
        </Wrapper>
    );
};

export default PatientsListPage;