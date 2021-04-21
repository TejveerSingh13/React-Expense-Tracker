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
    LinkText,
    LoginErrorContainer,
    LoginErrorImg,
    LoginErrorLabel
} from '../style';
import CancelIcon from "../icons/cancel.svg";
import UserIcon from "../icons/user.svg";
import LockIcon from "../icons/lock.svg";
import eyeVisible from "../icons/eyeVisible.png";
import eyeInVisible from "../icons/eyeInVisible.png";

const LoginPage = (props) => {

    const resetData = {
        userDetail : '',
        enteredpass : ''
    } 
    const[details, setDetails] = useState(resetData)
    const[showInvalid, setInvalide] = useState(false) 
    const [passwordStatus, setPasswordStatus] = useState({
        key:'visible',
        type:'password',
        value: eyeVisible
    })
    const [formErrors, setFormErrors] = useState({})
    let {
    userDataError,
    passError
    } = formErrors

    const labelStyle = {
        margin:'-23px 0 2px 60px',
        fontSize:'small',
        position:'fixed'}

    const inputHandler = (e) => {
        const data = e.target.value
        switch (e.target.name) {
            case 'userDetail':{
            setDetails({...details, userDetail: data})
            break
            }
            case 'userPass':{
            setDetails({...details, enteredpass:data})
            break
            }
            default:
            return null
        }
    }

    const userDataErrorHandle = (value, errors) => {
        !value.length
            ? (() => {errors.userDataError = 'This field cannot be empty'})()
            : delete errors.userDataError
        }
    const passErrorHandle = (value, errors) => {
    !value.length
        ? (() => {errors.passError = 'This field cannot be empty'})()
        : delete errors.passError
    }

    const validateError = () => {
        userDataErrorHandle(details.userDetail,formErrors)
        passErrorHandle(details.enteredpass, formErrors)
        setFormErrors({...formErrors})
        return !Object.keys(formErrors).length
    }

    const HandlePassWordDisplay = () => {
        let {key,type, value} = ''
        passwordStatus.key === 'visible'
        ?  (() => {key = 'invisible'
         type = 'text'
         value = eyeInVisible})()
        :  (() => {
            key = 'visible'
            type = 'password'
            value = eyeVisible
        })()
        setPasswordStatus({key,type,value})
    }

    const SubmitHandler = () => {
        const flag =validateError()
        if (flag) {
            let state = true
            let dataID = ''
            props.dataBase.map((data, index) => {
                if ((details.userDetail === data.userName || details.userDetail === data.emailId) && state) {
                    if (details.enteredpass === data.password) {
                        setInvalide((current) => false)                      
                        state = false
                        dataID = index
                    }
                }
                else if (!showInvalid && state) {setInvalide(true)}
                return (!showInvalid)
            })
            if (!showInvalid && !state) {
                props.HandleLogin(dataID)
            }
        }
    }

    if (showInvalid) {
        setTimeout(() => {
            setInvalide(false)
        },3000)
    }

    return(
        <Fragment>
            <LoginErrorContainer out={showInvalid}>
                <LoginErrorLabel>Invalid credentials</LoginErrorLabel>
                <LoginErrorImg src={CancelIcon} alt="Close"/>
            </LoginErrorContainer>
            <LoginModalHeadder>
                <MainHeadL>Login</MainHeadL>
                <SubHeadL>Enter your details below to continue</SubHeadL>
            </LoginModalHeadder>
            <InputCover>
                <InputImg src={UserIcon} alt="Close Logo"/>
                <TestInput 
                    autoComplete={'off'}
                    placeholder="UserID or EMail"
                    name='userDetail'
                    value={details.userDetail}
                    onChange={inputHandler}/>
            </InputCover>
            <LoginErrorLabel style={labelStyle}>{userDataError}</LoginErrorLabel>
            <InputCover>
                <InputImg src={LockIcon} alt="Pass Logo"/>
                <TestInput 
                    autoComplete={'off'}
                    type={passwordStatus.type}
                    name='userPass'
                    placeholder="Password" 
                    value={details.enteredpass}
                    onChange={inputHandler}/>
                <InputImg src={passwordStatus.value} alt="Password Status" onClick={HandlePassWordDisplay} />
            </InputCover>
            <LoginErrorLabel style={labelStyle}>{passError}</LoginErrorLabel>
            <ButtonContainer>
                <LoginButton onClick={SubmitHandler}>NEXT</LoginButton>
            </ButtonContainer>
            <SubHeadL style = {{marginTop:'42px',marginBottom:'12px'}}>
                Don,t have an account ? <LinkText onClick={props.HandleSignUp}>Sign up here </LinkText>
            </SubHeadL>    
        </Fragment>
   )
}

export default LoginPage