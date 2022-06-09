import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import NotAuthLayout from "../pages/NotAuthLayout/NotAuthLayout";
import HomePage from "../pages/HomePage/HomePage";
import {routesEnum} from "../constants/routes";
import SignInPage from "../pages/FormPages/SignInPage";
import {useTypedSelector} from "../hooks/useTypedSelector";
import SignUpPage from "../pages/FormPages/SignUpPage";
import AuthLayout from "../pages/AuthLayout/AuthLayout";
import CreateClinicPage from "../pages/FormPages/CreateClinicPage";
import AddClinicPage from "../pages/FormPages/AddClinicPage";
import ClinicsListPage from "../pages/ListPages/ClinicsListPage";
import ClinicLayout from "../pages/ClinicLayout/ClinicLayout";
import WorkersListPage from "../pages/ListPages/WorkersListPage";
import PatientsListPage from "../pages/ListPages/PatientsListPage";

const MyRoutes = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    const {slash, signIn, signUn, some, createClinic, addClinic, listClinics, clinic, id, workers, patients, createPatient} = routesEnum
    if (!isAuth) {
        return (
            <Routes>
                <Route path={slash} element={<NotAuthLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={signIn} element={<SignInPage/>}/>
                    <Route path={signUn} element={<SignUpPage/>}/>
                    <Route path={some} element={<Navigate to={slash}/>}/>
                </Route>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path={slash} element={<AuthLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={createClinic} element={<CreateClinicPage/>}/>
                <Route path={addClinic} element={<AddClinicPage/>}/>
                <Route path={listClinics} element={<ClinicsListPage/>}/>
                <Route path={clinic + slash + id} element={<ClinicLayout/>}>
                    <Route index element={<p>Clinic info</p>}/>
                    <Route path={workers} element={<WorkersListPage/>}/>
                    <Route path={patients} element={<PatientsListPage/>}/>
                    <Route path={createPatient} element={<p>create</p>}/>
                </Route>
                <Route path={some} element={<Navigate to={slash}/>}/>
            </Route>
        </Routes>
    )
};

export default MyRoutes;