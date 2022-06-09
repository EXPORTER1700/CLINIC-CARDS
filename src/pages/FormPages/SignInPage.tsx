import React from 'react';
import SignInForm from "../../components/Forms/SignInForm";
import Wrapper from "../../components/Wrapper/Wrapper";

const SignInPage = () => {
    return (
        <Wrapper title={"Вход"}>
            <SignInForm/>
        </Wrapper>
    );
};

export default SignInPage;