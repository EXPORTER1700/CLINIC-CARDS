import React from 'react';
import CustomLink from "../../ui/CustomLink/CustomLink";
import {linksEnum} from "../../constants/routes";
import logo from '../../assets/images/logo.png'
import classes from "./Header.module.css"

const NotAuthHeader = () => {
    return (
        <header className={classes.container}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <nav className={classes.navigate}>
                <CustomLink to={linksEnum.slash}>ГЛАВНАЯ</CustomLink>
                <CustomLink to={linksEnum.signIn}>ВХОД</CustomLink>
                <CustomLink to={linksEnum.signUn}>РЕГИСТРАЦИЯ</CustomLink>
            </nav>
        </header>
    );
};

export default NotAuthHeader;