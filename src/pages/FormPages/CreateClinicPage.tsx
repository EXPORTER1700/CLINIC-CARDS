import React from 'react';
import CreateClinicForm from "../../components/Forms/CreateClinicForm";
import Wrapper from "../../components/Wrapper/Wrapper";

const CreateClinicPage = () => {
    return (
        <Wrapper title={"Создать клинику"}>
            <CreateClinicForm/>
        </Wrapper>
    );
};

export default CreateClinicPage;