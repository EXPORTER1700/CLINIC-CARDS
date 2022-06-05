import React from 'react';
import classes from "./FormPage.module.css";
import SignUpForm from "../../components/Forms/SignUpForm";

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