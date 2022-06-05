import React from 'react';
import classes from "../SignInPage/SignInPage.module.css";
import SignUpForm from "../../components/SignForm/SignUpForm";

const SignUpPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h2 className={classes.title}>Регистрация</h2>
                <SignUpForm/>
            </div>
        </div>
    );
};

export default SignUpPage;