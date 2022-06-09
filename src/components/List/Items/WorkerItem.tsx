import React, {FC} from 'react';
import {IUser} from "../../../types/user";
import classes from "./Item.module.css"

interface WorkerItemProps {
    worker: IUser
}

const WorkerItem: FC<WorkerItemProps> = ({worker}) => {
    return (
        <li className={classes.container}>
            <p className={classes.name}>{worker.firstName} {worker.lastName}</p>
        </li>
    );
};

export default WorkerItem;