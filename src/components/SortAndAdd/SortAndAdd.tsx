import React, {ChangeEvent, FC} from 'react';
import CustomFormInput from "../../ui/CustomFormInput/CustomFormInput";
import searchImage from "../../assets/images/search.png";
import {Link} from "react-router-dom";
import CustomFormButton from "../../ui/CustomFormButton/CustomFormButton";
import classes from "./SortAndAdd.module.css"

interface SortAndAddProps {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    to: string
}

const SortAndAdd: FC<SortAndAddProps> = ({value, onChange, to}) => {
    return (
        <div className={classes.buttons}>
            <CustomFormInput
                type="text"
                src={searchImage}
                placeholder="Поиск"
                onChange={onChange}
                value={value}
            />
            <Link to={to}>
                <CustomFormButton type="button">+</CustomFormButton>
            </Link>
        </div>
    );
};

export default SortAndAdd;

