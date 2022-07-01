import React, {ChangeEvent, useState} from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import PatientsList from "../../components/List/Lists/PatientsList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import CustomTitle from "../../ui/CustomTitle/CustomTitle";
import {useSearchPatients} from "../../hooks/useSearchPatients";
import Filter from "../../components/Filter/Filter";
import {linksEnum} from "../../constants/routes";

const PatientsListPage = () => {
    const {clinic} = useTypedSelector(state => state.clinic)
    const [search, setSearch] = useState('')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    const searchPatients = useSearchPatients(clinic.patients, search)
    const handleAddPatient = () => {

    }
    return (
        <Wrapper title="Список пациентов">
            <Filter
                handleChange={handleChange}
                to={linksEnum.clinic + linksEnum.slash + clinic.id + linksEnum.createPatient}
            />
            {
                clinic.patients.length
                    ? <PatientsList patients={searchPatients}/>
                    : <CustomTitle>Пока нет пациентов</CustomTitle>
            }
        </Wrapper>
    );
};

export default PatientsListPage;