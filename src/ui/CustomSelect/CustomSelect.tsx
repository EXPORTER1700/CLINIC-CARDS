import React, {ChangeEvent, FC} from 'react';
import classes from "./CustomSelect.module.css"

interface CustomSelectProps {
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
    children: React.ReactNode | React.ReactChild
    name: string
}

const CustomSelect: FC<CustomSelectProps> = ({name, onChange, children}) => {
    return (
        <select name={name} className={classes.select} onChange={onChange}>
            {children}
        </select>
    );
};

export default CustomSelect;