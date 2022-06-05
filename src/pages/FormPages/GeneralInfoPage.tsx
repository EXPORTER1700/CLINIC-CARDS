import React from 'react';
import GeneralInfoForm from "../../components/Forms/GeneralInfoForm";
import classes from "./FormPage.module.css"

const GeneralInfoPage = () => {

    return (
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h2 className={classes.title}>Общая информация</h2>
                <GeneralInfoForm/>
            </div>
        </div>
    );
};

export default GeneralInfoPage;