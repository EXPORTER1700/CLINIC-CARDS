import React, {FC} from 'react';
import classes from "./Item.module.css"
import {IPatient} from "../../../types/patient";

interface PatientItemProps {
    patient: IPatient
}

const PatientItem: FC<PatientItemProps> = ({patient}) => {
    return (
        <li className={classes.container}>
            <p className={classes.name}>{patient.firstName} {patient.lastName}</p>
        </li>
    );
};

export default PatientItem;