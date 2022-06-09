import React, {FC} from 'react';
import {IClinic} from "../../../types/clinic";
import classes from "./Item.module.css"
import {linksEnum} from "../../../constants/routes";
import {Link} from "react-router-dom";

interface ClinicListItemProps {
    clinic: IClinic
}

const ClinicListItem: FC<ClinicListItemProps> = ({clinic}) => {
    return (
        <li className={classes.container}>
            <Link className={classes.name} to={linksEnum.clinic + "/" + clinic.id}>{clinic.name}</Link>
        </li>
    );
};

export default ClinicListItem;