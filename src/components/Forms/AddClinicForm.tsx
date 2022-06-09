import React, {ChangeEvent, FormEvent, useState} from 'react';
import classes from "./Form.module.css";
import CustomFormInput from "../../ui/CustomFormInput/CustomFormInput";
import userIcon from "../../assets/images/user-icon.png";
import passwordIcon from "../../assets/images/password-icon.png";
import CustomFormButton from "../../ui/CustomFormButton/CustomFormButton";
import {putUserInfo} from "../../api/putUserInfo";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchClinicWithParams} from "../../api/fetchClinicWithParam";
import CustomErrorMessage from "../../ui/CustomErrorMessage/CustomErrorMessage";
import CustomSuccessMessage from "../../ui/CustomSuccessMessage/CustomSuccessMessage";
import {useActions} from "../../hooks/useAction";
import {putClinicInfo} from "../../api/putClinicInfo";

const AddClinicForm = () => {
    const {user} = useTypedSelector(state => state.auth)
    const {login} = useActions()
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    })
    const [message, setMessage] = useState({
        error: '',
        success: ''
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage({error: '', success: ''})
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        const {data} = await fetchClinicWithParams(formData)
        const [clinic] = data
        if (data.length) {
            await putUserInfo(user, {clinics: [...user.clinics, clinic.id]})
            await putClinicInfo(clinic, {workers: [...clinic.workers]})
            await login(user.username, user.password)
            setMessage({...message, success: 'Клиника успешно добавлена'})
        } else {
            setMessage({...message, error: 'Клиника с такими данными не найдена'})
        }
    }
    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <CustomFormInput
                type="text"
                src={userIcon}
                placeholder="Название клиники"
                name="name"
                value={formData.name}
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
            {message.error && <CustomErrorMessage>{message.error}</CustomErrorMessage>}
            {message.success && <CustomSuccessMessage>{message.success}</CustomSuccessMessage>}
            <CustomFormButton type={"submit"}>Добавить</CustomFormButton>
        </form>
    );
};

export default AddClinicForm;