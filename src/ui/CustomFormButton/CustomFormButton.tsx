import React, {FC} from 'react';
import classes from "./CustomFormButton.module.css"

type TButtonType = 'button' | 'reset' | 'submit'

interface MyFormButtonProps {
    children: React.ReactNode | React.ReactChild
    type?: TButtonType
}

const CustomFormButton: FC<MyFormButtonProps> = ({type, children}) => {
    return (
        <button className={classes.button} type={type}>{children}</button>
    );
};

export default CustomFormButton;