import React from 'react';
import AddClinicForm from "../../components/Forms/AddClinicForm";
import Wrapper from "../../components/Wrapper/Wrapper";

const AddClinicPage = () => {
    return (
        <Wrapper title={"Добавить клинику"}>
            <AddClinicForm/>
        </Wrapper>
    );
};

export default AddClinicPage;