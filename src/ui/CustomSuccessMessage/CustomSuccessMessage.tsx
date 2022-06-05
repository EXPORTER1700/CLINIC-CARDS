import React, {FC} from 'react';
import classes from "./CustomSuccessMessage.module.css"

interface CustomSuccessMessageProps {
    children: React.ReactNode | React.ReactChild
}

const CustomSuccessMessage:FC<CustomSuccessMessageProps> = ({children}) => {
    return (
        <p className={classes.p}>
            {children}
        </p>
    );
};

export default CustomSuccessMessage;