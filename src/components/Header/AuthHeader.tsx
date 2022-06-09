import React from 'react';
import logo from "../../assets/images/logo.png";
import classes from "./Header.module.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import CustomLink from "../../ui/CustomLink/CustomLink";
import {linksEnum} from "../../constants/routes";

const AuthHeader = () => {
    const {user} = useTypedSelector(state => state.auth)
    return (
        <header className={classes.container}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <div className={classes.navigate}>
                <CustomLink to={linksEnum.addClinic}>Добавить клинику</CustomLink>
                <CustomLink to={linksEnum.listClinics}>Список клиник</CustomLink>
                <CustomLink to={linksEnum.createClinic}>Создать клинику</CustomLink>
                <CustomLink to={linksEnum.userProfile}>{user.firstName}</CustomLink>
            </div>
        </header>
    );
};

export default AuthHeader;