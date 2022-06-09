import React, {ChangeEvent, FormEvent, useState} from 'react';
import CustomFormInput from "../../ui/CustomFormInput/CustomFormInput";
import userIcon from "../../assets/images/user-icon.png"
import {IBaseClinicInfo} from "../../types/clinic";
import {registrationClinic} from "../../api/registrationClinic";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";
import {linksEnum} from "../../constants/routes";
import CustomFormButton from "../../ui/CustomFormButton/CustomFormButton";
import classes from "./Form.module.css";
import {fetchClinicWithParams} from "../../api/fetchClinicWithParam";
import CustomErrorMessage from "../../ui/CustomErrorMessage/CustomErrorMessage";
import CustomSuccessMessage from "../../ui/CustomSuccessMessage/CustomSuccessMessage";

const CreateClinicForm = () => {
    const navigate = useNavigate();
    const {user} = useTypedSelector(state => state.auth)
    const [message, setMessage] = useState({
        error: '',
        success: ''
    })
    const [formData, setFormData] = useState<IBaseClinicInfo>({
        name: '',
        password: ''
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage({error: '', success: ''})
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        const {data} = await fetchClinicWithParams({name: formData.name})
        if (!data.length) {
            await registrationClinic(user, formData)
            setMessage({...message, success: "Клиника создана"})
            setTimeout(() => {
                navigate(linksEnum.addClinic)
            }, 500)
        } else {
            setMessage({...message, error: 'Клиника с такими данными уже существует'})
        }
    }
    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <CustomFormInput
                type="text"
                src={userIcon}
                name="name"
                placeholder="Название клиники"
                value={formData.name}
                onChange={handleChange}
            />
            <CustomFormInput
                type="text"
                src={userIcon}
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
            />
            {message.error && <CustomErrorMessage>{message.error}</CustomErrorMessage>}
            {message.success && <CustomSuccessMessage>{message.success}</CustomSuccessMessage>}
            <CustomFormButton type={"submit"}>Создать</CustomFormButton>
        </form>
    );
};

export default CreateClinicForm;