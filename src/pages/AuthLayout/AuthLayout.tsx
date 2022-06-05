import React from 'react';
import {Outlet} from "react-router";
import AuthHeader from "../../components/Header/AuthHeader";
import Footer from "../../components/Footer/Footer";

const AuthLayout = () => {
    return (
        <>
            <AuthHeader/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default AuthLayout;