import React from 'react';
import logo from "../../assets/images/logo.png";
import classes from "./Header.module.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import CustomLink from "../../ui/CustomLink/CustomLink";
import {routesEnum} from "../../constants/routes";

const AuthHeader = () => {
    const {user} = useTypedSelector(state => state.auth)
    return (
        <header className={classes.container}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <div className={classes.navigate}>
                {user.photo && <img src={user.photo} alt="user photo"/>}
                {user.firstName && <CustomLink to={routesEnum.home}>{user.firstName}</CustomLink>}
            </div>
        </header>
    );
};

export default AuthHeader;