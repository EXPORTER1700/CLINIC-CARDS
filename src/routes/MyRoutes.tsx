import React from 'react';
import {Routes, Route, Navigate} from "react-router";
import NotAuthLayout from "../pages/NotAuthLayout/NotAuthLayout";
import HomePage from "../pages/HomePage/HomePage";
import {routesEnum} from "../constants/routes";
import SignInPage from "../pages/FormPages/SignInPage";
import {useTypedSelector} from "../hooks/useTypedSelector";
import SignUpPage from "../pages/FormPages/SignUpPage";
import AuthLayout from "../pages/AuthLayout/AuthLayout";
import GeneralInfoPage from "../pages/FormPages/GeneralInfoPage";

const MyRoutes = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth)
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
    } else if (isAuth && (!user.position || !user.firstName || !user.lastName || !user.photo)) {
        return (
            <Routes>
                <Route path="/" element={<AuthLayout/>}>
                    <Route path="/generalInfo" element={<GeneralInfoPage/>}/>
                    <Route path="/workerInfo" element={<p>Рабочая</p>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
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