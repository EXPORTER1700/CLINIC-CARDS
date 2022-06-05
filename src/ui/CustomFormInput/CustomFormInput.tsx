import React, {ChangeEvent, FC} from 'react';
import classes from "./CustomFormInput.module.css"

interface CustomFormInput {
    type: string
    src: string
    placeholder?: string
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    name?: string
}

const CustomFormInput: FC<CustomFormInput> = (
    {
        src,
        type,
        value,
        onChange,
        placeholder,
        name
    }
) => {
    return (
        <div className={classes.container}>
            <img className={classes.image} src={src} alt=""/>
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                className={classes.input}
                name={name}
            />
        </div>
    );
};

export default CustomFormInput;