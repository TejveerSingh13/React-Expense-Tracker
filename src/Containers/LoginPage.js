import React, { useState, Fragment} from "react";
import {
    ButtonContainer, 
    TestInput,
    InputCover,
    InputImg,
    LoginModalHeadder,
    MainHeadL,
    SubHeadL,
    LoginButton,
    LinkText
} from '../style';
import UserIcon from "../icons/user.svg";
import LockIcon from "../icons/lock.svg";
import eyeVisible from "../icons/eyeVisible.png";
import eyeInVisible from "../icons/eyeInVisible.png";

const LoginPage = (props) => {

    const [passwordStatus, setPasswordStatus] = useState({
        key:'visible',
        value: eyeVisible
    })

    const HandlePassWordDisplay = () => {
        let {key, value} = ''
        passwordStatus.key === 'visible'
        ?  (() => {key = 'invisible'
         value = eyeInVisible})()
        :  (() => {key = 'visible'
         value = eyeVisible})()
        setPasswordStatus({key,value})
    }

    return(
        <Fragment>
            <LoginModalHeadder>
                <MainHeadL>Login</MainHeadL>
                <SubHeadL>Enter your details below to continue</SubHeadL>
            </LoginModalHeadder>
            <InputCover>
                <InputImg src={UserIcon} alt="Close Logo"/>
                <TestInput />
            </InputCover>
            <InputCover>
                <InputImg src={LockIcon} alt="Pass Logo"/>
                <TestInput />
                <InputImg src={passwordStatus.value} alt="Password Status" onClick={HandlePassWordDisplay} />
            </InputCover>
            <ButtonContainer>
                <LoginButton onClick={props.LoginModalhandler}>NEXT</LoginButton>
            </ButtonContainer>
            <SubHeadL style = {{marginTop:'42px',marginBottom:'12px'}}>
                Don,t have an account ? <LinkText onClick={props.HandleSignUp}>Sign up here </LinkText>
            </SubHeadL>
        </Fragment>
    )
}

export default LoginPage