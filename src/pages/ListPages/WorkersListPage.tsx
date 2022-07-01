import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import WorkersList from "../../components/List/Lists/WorkersList";
import {IUser} from "../../types/user";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchUsers} from "../../api/fetchUsers";
import Loader from "../../ui/Loader/Loader";

const WorkersListPage = () => {
    const [workers, setWorkers] = useState<IUser[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const {clinic} = useTypedSelector(state => state.clinic)
    useEffect(() => {
        const fetchWorkers = async () => {
            setIsLoading(true)
            const {data} = await fetchUsers('id', clinic.workers)
            setWorkers(data)
        }
        fetchWorkers()
        setIsLoading(false)
    }, [])
    if (isLoading) return <Loader/>
    return (
        <Wrapper title={"Список работников"}>
            <WorkersList workers={workers}/>
        </Wrapper>
    );
};

export default WorkersListPage;