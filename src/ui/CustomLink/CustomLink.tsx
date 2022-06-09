import React, {FC} from 'react';
import {Link, useMatch} from "react-router-dom";
import styles from './CustomLink.module.css'

interface CustomLinkProps {
    to: string
    children: React.ReactNode | React.ReactChild
}

const CustomLink: FC<CustomLinkProps> = ({children, to}) => {
    const match = useMatch({
        path: to,
    })
    const classes = [styles.link]
    if (match) classes.push(styles.active)
    return (
        <Link to={to} className={classes.join(' ')}>
            {children}
        </Link>

    );
};

export default CustomLink;