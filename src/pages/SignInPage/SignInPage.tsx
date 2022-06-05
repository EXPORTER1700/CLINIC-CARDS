import React from 'react';
import classes from "./SignInPage.module.css"
import SignInForm from "../../components/SignForm/SignInForm";

const SignInPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h2 className={classes.title}>Вход</h2>
                <SignInForm/>
            </div>
        </div>
    );
};

export default SignInPage;