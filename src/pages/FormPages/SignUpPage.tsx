import React from 'react';
import SignUpForm from "../../components/Forms/SignUpForm";
import Wrapper from "../../components/Wrapper/Wrapper";

const SignUpPage = () => {
    return (
        <Wrapper title={"Регистрация"}>
            <SignUpForm/>
        </Wrapper>
    );
};

export default SignUpPage;