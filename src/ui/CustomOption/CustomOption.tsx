import React, {FC} from 'react';
import classes from "./CustomOption.module.css"

interface CustomOptionProps {
    value: string
    children: React.ReactNode | React.ReactChild
    selected?: boolean
}

const CustomOption: FC<CustomOptionProps> = ({value, selected, children}) => {
    return (
        <option selected={selected} className={classes.option} value={value}>
            {children}
        </option>
    );
};

export default CustomOption;