import React, {FC} from 'react';
import classes from "./Wrapper.module.css"

interface WrapperProps {
    title: string
    children: React.ReactNode | React.ReactChild
}

const Wrapper: FC<WrapperProps> = ({title, children}) => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <p className={classes.title}>{title}</p>
                {children}
            </div>
        </div>
    );
};

export default Wrapper;