import React, {ChangeEvent, FormEvent, useState} from 'react';
import CustomFormInput from "../../ui/CustomFormInput/CustomFormInput";
import userIcon from "../../assets/images/user-icon.png"
import passwordIcon from "../../assets/images/password-icon.png"
import emailIcon from "../../assets/images/email-icon.png"
import phoneIcon from "../../assets/images/phone-icon.png"
import CustomFormButton from "../../ui/CustomFormButton/CustomFormButton";
import classes from "./Form.module.css"
import CustomErrorMessage from "../../ui/CustomErrorMessage/CustomErrorMessage";
import {fetchUserWithParams} from "../../api/fetchUserWithParams";
import {registrationUser} from "../../api/registrationUser";
import {IBaseUserInfo} from "../../types/user";
import CustomSuccessMessage from "../../ui/CustomSuccessMessage/CustomSuccessMessage";
import {linksEnum} from "../../constants/routes";
import {useNavigate} from "react-router-dom";

const SignUnForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<IBaseUserInfo>({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
        phone: '',
    })
    const [message, setMessage] = useState({
        error: '',
        success: ''
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setMessage({error: '', success: ''})
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
            setMessage({...message, success: "Регистрация успешна"})
            setTimeout(() => {
                navigate(linksEnum.signIn)
            }, 500)
        } else {
            setMessage({...message, error: 'Пользователь с такими данными уже существует'})
        }
    }
    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <CustomFormInput
                type="text"
                src={userIcon}
                placeholder="Имя"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <CustomFormInput
                type="text"
                src={userIcon}
                placeholder="Фамилия"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
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
            {message.error && <CustomErrorMessage>{message.error}</CustomErrorMessage>}
            {message.success && <CustomSuccessMessage>{message.success}</CustomSuccessMessage>}
            <CustomFormButton type={"submit"}>Регистрация</CustomFormButton>
        </form>
    );
};

export default SignUnForm;