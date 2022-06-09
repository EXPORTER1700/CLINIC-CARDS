import React, {FC} from 'react';
import PatientItem from "../Items/PatientItem";
import {IPatient} from "../../../types/patient";

interface PatientsListProps {
    patients: IPatient[]
}

const PatientsList: FC<PatientsListProps> = ({patients}) => {
    return (
        <ul>
            {patients.map(patient => <PatientItem patient={patient} key={patient.id}/>)}
        </ul>
    );
};

export default PatientsList;