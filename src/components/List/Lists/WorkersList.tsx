import React, {FC} from 'react';
import {IUser} from "../../../types/user";
import WorkerItem from "../Items/WorkerItem";
import classes from "./List.module.css"

interface WorkersListProps {
    workers: IUser[]
}

const WorkersList: FC<WorkersListProps> = ({workers}) => {
    return (
        <ul className={classes.container}>
            {workers.map(worker => <WorkerItem worker={worker} key={worker.id}/>)}
        </ul>
    );
};

export default WorkersList;