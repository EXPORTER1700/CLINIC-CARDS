import React, {ChangeEvent, useState} from 'react';
import userIcon from '../../assets/images/user-icon.png'
import CustomFormInput from "../../ui/CustomFormInput/CustomFormInput";
import CustomSelect from "../../ui/CustomSelect/CustomSelect";
import CustomOption from "../../ui/CustomOption/CustomOption";
import {IGeneralUserInfo, UserPositionEnum} from "../../types/user";
import CustomFormButton from "../../ui/CustomFormButton/CustomFormButton";
import classes from "./Form.module.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";

const GeneralInfoForm = () => {
    const {user} = useTypedSelector(state => state.auth)
    const [formData, setFormData] = useState<IGeneralUserInfo>({
        firstName: user.firstName,
        lastName: user.lastName,
        position: user.position,
        photo: user.photo,
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    return (
        <form className={classes.container}>
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
                type="file"
                src={userIcon}
                placeholder="Фотография"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
            />
            <CustomSelect name="position" onChange={handleChange}>
                <CustomOption value={UserPositionEnum.owner}>Я владелец клиники</CustomOption>
                <CustomOption value={UserPositionEnum.worker}>Я работник</CustomOption>
            </CustomSelect>
            <CustomFormButton type="submit">Сохранить</CustomFormButton>
        </form>
    );
};

export default GeneralInfoForm;