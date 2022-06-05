import React from 'react';
import {Routes, Route, Navigate} from "react-router";
import NotAuthLayout from "../pages/NotAuthLayout/NotAuthLayout";
import HomePage from "../pages/HomePage/HomePage";
import {routesEnum} from "../constants/routes";
import SignInPage from "../pages/SignInPage/SignInPage";
import {useTypedSelector} from "../hooks/useTypedSelector";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AuthLayout from "../pages/AuthLayout/AuthLayout";

const MyRoutes = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    if (!isAuth) {
        return (
            <Routes>
                <Route path="/" element={<NotAuthLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={routesEnum.signIn} element={<SignInPage/>}/>
                    <Route path={routesEnum.signUn} element={<SignUpPage/>}/>
                    <Route path="*" element={<Navigate to={"/"}/>}/>
                </Route>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Route>
        </Routes>
    )
};

export default MyRoutes;