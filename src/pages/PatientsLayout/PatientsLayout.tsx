import React from 'react';
import {Outlet} from "react-router";

const PatientsLayout = () => {
    return (
        <>
            <Outlet/>
        </>
    );
};

export default PatientsLayout;