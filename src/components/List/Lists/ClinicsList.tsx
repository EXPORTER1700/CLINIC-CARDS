import React, {FC} from 'react';
import {IClinic} from "../../../types/clinic";
import ClinicListItem from "../Items/ClinicListItem";
import classes from "./List.module.css"

interface ClinicsListProps {
    clinics: IClinic[]
}

const ClinicsList: FC<ClinicsListProps> = ({clinics}) => {
    return (
        <ul className={classes.container}>
            {clinics.map(clinic => <ClinicListItem clinic={clinic} key={clinic.id}/>)}
        </ul>
    );
};

export default ClinicsList;