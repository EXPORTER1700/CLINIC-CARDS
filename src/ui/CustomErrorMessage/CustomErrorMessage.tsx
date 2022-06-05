import React, {FC} from 'react';
import classes from "./CustomErrorMessage.module.css"

interface CustomErrorMessageProps {
    children: React.ReactChild | React.ReactNode
}

const CustomErrorMessage: FC<CustomErrorMessageProps> = ({children}) => {
    return (
        <p className={classes.p}>
            {children}
        </p>
    );
};

export default CustomErrorMessage;