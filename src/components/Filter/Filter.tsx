import React, {ChangeEvent, FC} from 'react';
import CustomFormInput from "../../ui/CustomFormInput/CustomFormInput";
import CustomFormButton from "../../ui/CustomFormButton/CustomFormButton";
import classes from './Filter.module.css'
import CustomLink from "../../ui/CustomLink/CustomLink";
import {linksEnum} from "../../constants/routes";

interface FilterProps {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
    to: string
}

const Filter: FC<FilterProps> = ({handleChange, to}) => {
    return (
        <div className={classes.container}>
            <CustomFormInput
                type="text"
                src="/"
                placeholder="Search"
                onChange={handleChange}
            />
            <CustomLink to={to}>
                <CustomFormButton type="button">
                    +
                </CustomFormButton>
            </CustomLink>
        </div>
    );
};

export default Filter;