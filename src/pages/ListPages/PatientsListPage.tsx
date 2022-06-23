import React, {ChangeEvent, useState} from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import PatientsList from "../../components/List/Lists/PatientsList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import CustomTitle from "../../ui/CustomTitle/CustomTitle";

const PatientsListPage = () => {
    const {clinic} = useTypedSelector(state => state.clinic)
    const [search, setSearch] = useState('')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    return (
        <Wrapper title="Список пациентов">
            <PatientsList patients={clinic.patients}/>
            {!clinic.patients.length && <CustomTitle>Пока нет пациентов</CustomTitle>}
        </Wrapper>
    );
};

export default PatientsListPage;