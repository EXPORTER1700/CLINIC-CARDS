import React from 'react';
import CustomLink from "../../ui/CustomLink/CustomLink";
import {linksEnum} from "../../constants/routes";
import classes from "./Sidebar.module.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import CustomTitle from "../../ui/CustomTitle/CustomTitle";

const Sidebar = () => {
    const {clinic} = useTypedSelector(state => state.clinic)
    return (
        <div className={classes.container}>
            <CustomTitle>{clinic.name}</CustomTitle>
            <CustomLink to={linksEnum.clinic + linksEnum.slash + clinic.id}>Клиника</CustomLink>
            <CustomLink to={linksEnum.clinic + linksEnum.slash + clinic.id + linksEnum.patients}>Пациенты</CustomLink>
            <CustomLink to={linksEnum.clinic + linksEnum.slash + clinic.id + linksEnum.workers}>Врачи</CustomLink>
            <CustomLink to={linksEnum.slash}>График</CustomLink>
        </div>
    );
};

export default Sidebar;