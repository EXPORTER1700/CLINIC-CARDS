import React, {FC} from 'react';
import classes from "./CustomTitle.module.css"

export interface CustomTitleProps {
    children: React.ReactNode
}

const CustomTitle: FC<CustomTitleProps> = ({children}) => {
    return (
        <p className={classes.title}>
            {children}
        </p>
    );
};

export default CustomTitle;