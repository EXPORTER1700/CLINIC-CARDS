import React, {ChangeEvent, FormEvent, useState} from 'react';
import CustomFormInput from "../../ui/CustomFormInput/CustomFormInput";
import userIcon from "../../assets/images/user-icon.png"
import passwordIcon from "../../assets/images/password-icon.png"
import CustomFormButton from "../../ui/CustomFormButton/CustomFormButton";
import classes from "./SignForm.module.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import CustomErrorMessage from "../../ui/CustomErrorMessage/CustomErrorMessage";
import {useActions} from "../../hooks/useAction";

const SignInForm = () => {
    const {error} = useTypedSelector(state => state.auth)
    const {login, setError} = useActions()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        login(formData.username, formData.password)
    }
    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <CustomFormInput
                type="text"
                src={userIcon}
                placeholder="Логин"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <CustomFormInput
                type="text"
                src={passwordIcon}
                placeholder="Пароль"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            {error && <CustomErrorMessage>{error}</CustomErrorMessage>}
            <CustomFormButton type={"submit"}>Вход</CustomFormButton>
        </form>
    );
};

export default SignInForm;