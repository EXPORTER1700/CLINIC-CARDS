import React, {ChangeEvent, useState} from 'react';
import userIcon from "../../assets/images/user-icon.png";
import CustomFormInput from "../../ui/CustomFormInput/CustomFormInput";
import {IPatientGeneralInfo} from "../../types/patient";
import CustomErrorMessage from "../../ui/CustomErrorMessage/CustomErrorMessage";
import CustomSuccessMessage from "../../ui/CustomSuccessMessage/CustomSuccessMessage";
import CustomFormButton from "../../ui/CustomFormButton/CustomFormButton";

const CreatePatientForm = () => {
    const [formData, setFormData] = useState<IPatientGeneralInfo>({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phone: ''
    })
    const [message, setMessage] = useState({
        error: '',
        success: ''
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage({error: '', success: ''})
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    return (
        <form>
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
                placeholder="Дата рождения"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
            />
            <CustomFormInput
                type="text"
                src={userIcon}
                placeholder="Номер телефона"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            {message.error && <CustomErrorMessage>{message.error}</CustomErrorMessage>}
            {message.success && <CustomSuccessMessage>{message.success}</CustomSuccessMessage>}
            <CustomFormButton type="submit">Добавить</CustomFormButton>
        </form>
    );
};

export default CreatePatientForm;