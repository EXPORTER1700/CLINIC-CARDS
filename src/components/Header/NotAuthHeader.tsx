import React from 'react';
import CustomLink from "../../ui/CustomLink/CustomLink";
import {routesEnum} from "../../constants/routes";
import logo from '../../assets/images/logo.png'
import classes from "./Header.module.css"

const NotAuthHeader = () => {
    return (
        <header className={classes.container}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <nav className={classes.navigate}>
                <CustomLink to={routesEnum.home}>ГЛАВНАЯ</CustomLink>
                <CustomLink to={routesEnum.signIn}>ВХОД</CustomLink>
                <CustomLink to={routesEnum.signUn}>РЕГИСТРАЦИЯ</CustomLink>
            </nav>
        </header>
    );
};

export default NotAuthHeader;