import React, {useEffect} from 'react';
import {Outlet, useNavigate, useParams} from "react-router";
import classes from "./ClinicLayout.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import {useActions} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {linksEnum} from "../../constants/routes";

const ClinicLayout = () => {
    const {installClinic, clearClinic} = useActions()
    const navigate = useNavigate()
    const {clinic, isClinic} = useTypedSelector(state => state.clinic)
    const {user} = useTypedSelector(state => state.auth)
    const params = useParams()
    useEffect(() => {
        const setClinic = async () => {
            if (params.id) {
                await installClinic(params.id)
            }
        }
        setClinic()
        return () => {
            clearClinic()
        }
    }, [])
    if (isClinic && !clinic.workers.includes(user.id)) { //Проверка является ли пользователь работником клиники что бы по ссылке нельзя было попасть в чужой кабинет
        navigate(linksEnum.slash)
    }
    return (
        <div className={classes.container}>
            <Sidebar/>
            <Outlet/>
        </div>
    );
};

export default ClinicLayout;