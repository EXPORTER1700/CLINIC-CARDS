import React, {ChangeEvent, FormEvent, useState} from 'react';
import CustomFormInput from "../../ui/CustomFormInput/CustomFormInput";
import userIcon from "../../assets/images/user-icon.png"
import passwordIcon from "../../assets/images/password-icon.png"
import emailIcon from "../../assets/images/email-icon.png"
import phoneIcon from "../../assets/images/phone-icon.png"
import CustomFormButton from "../../ui/CustomFormButton/CustomFormButton";
import classes from "./SignForm.module.css"
import CustomErrorMessage from "../../ui/CustomErrorMessage/CustomErrorMessage";
import {fetchUserWithParams} from "../../api/fetchUserWithParams";
import {registrationUser} from "../../api/registrationUser";
import {IRegistrationData} from "../../types/user";
import CustomSuccessMessage from "../../ui/CustomSuccessMessage/CustomSuccessMessage";

const SignUnForm = () => {
    const [formData, setFormData] = useState<IRegistrationData>({
        username: '',
        password: '',
        email: '',
        phone: '',
    })
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSuccess('')
        setError('')
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        const {data} = await fetchUserWithParams({
            username: formData.username,
            password: formData.password,
            email: formData.email,
            phone: formData.phone
        })
        if (!data.length) {
            registrationUser(formData)
            setSuccess('Регистрация успешна')
            setFormData({
                username: '',
                password: '',
                email: '',
                phone: '',
            })
        } else {
            setError('Такой пользователь уже есть')
        }
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
            <CustomFormInput
                type="text"
                src={emailIcon}
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <CustomFormInput
                type="text"
                src={phoneIcon}
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            {error && <CustomErrorMessage>{error}</CustomErrorMessage>}
            {success && <CustomSuccessMessage>{success}</CustomSuccessMessage>}
            <CustomFormButton type={"submit"}>Регистрация</CustomFormButton>
        </form>
    );
};

export default SignUnForm;