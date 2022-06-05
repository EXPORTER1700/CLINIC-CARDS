import React, {FC} from 'react';
import {Link, useMatch} from "react-router-dom";
import styles from './CustomLink.module.css'
import {routesEnum} from "../../constants/routes";

interface CustomLinkProps {
    to: routesEnum
    children: React.ReactNode | React.ReactChild
}

const CustomLink: FC<CustomLinkProps> = ({children, to}) => {
    const match = useMatch({
        path: to,
        end: to.length === 1
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