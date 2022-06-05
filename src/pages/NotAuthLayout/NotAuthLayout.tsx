import React from 'react';
import NotAuthHeader from "../../components/Header/NotAuthHeader";
import {Outlet} from "react-router";
import Footer from "../../components/Footer/Footer";

const NotAuthLayout = () => {
    return (
        <>
            <NotAuthHeader/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default NotAuthLayout;