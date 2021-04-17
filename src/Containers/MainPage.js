import React, { useState, useEffect} from "react";
import {
    MainContainer,
    Button, 
    ButtonContainer, 
    Img, 
    ModalHeadder, 
    HeaddingDiv,
    DialogContainer,
    DialogHeadder,
    SuccessImg,
    ButtonText,
    TestInput,
    InputCover,
    InputImg,
    LoginModalHeadder,
    MainHeadL,
    SubHeadL,
    LoginButton,
    LinkText
} from '../style';
import CancelButton from "../icons/circle.svg";
import SuccessButton from "../icons/checkLight.png"; 
import UserIcon from "../icons/user.svg";
import LockIcon from "../icons/lock.svg";
import eyeVisible from "../icons/eyeVisible.png";
import eyeInVisible from "../icons/eyeInVisible.png";
import Modal from "../Components/Modal";
import SignUpForm from "./SignUpForm";
import axios from 'axios'

const MainPage = () => {
    
    const formReset = {
        fullName : '',
        userName : '',
        mobile : '',
        emailId : '',
        password : '',
        confirmPass : ''
    }
    const passReset = {
        passsNew :'',
        passConf : ''
    }
    const [formValue, setFormValue] = useState(formReset)
    const [passwordDisplay, updatePasswordDisplay] = useState(passReset)
    const [signUpModalState, setSignUpModalState] = useState(false)
    const [loginModalState, setLoginModalState] = useState(false)
    const [dialogState, setDialogState] = useState(false)
    const [dataBase, setDataBase] = useState(null)
    const [passwordStatus, setPasswordStatus] = useState({
        key:'visible',
        value: eyeVisible
    })

    useEffect(() => {
        axios.get(`https://my-project-database-c4a55-default-rtdb.firebaseio.com/.json`)
            .then(res => {
                if (!dataBase) {
                    const dataBaseArray = Object.entries(res.data).map((e) => { return (e[1])})
                    setDataBase(dataBaseArray)
                }
            })
            .catch(err => console.log(err))
    },[dataBase])

    const inputHandler = (e) => {
        const data = e.target.value
        switch (e.target.name) {
            case 'name':{
            setFormValue({...formValue, fullName: data})
            break
            }
            case 'user':{
            setFormValue({...formValue, userName: data})
            break
            }
            case 'mobileNo':{
            if (data.length <= 10) {
                setFormValue({...formValue, mobile: data })
            }
            break
            }
            case 'emailId':{
            setFormValue({...formValue, emailId: data })
            break
            }
            case 'passNew':{
            if (data.slice(-1) === '*' || data.slice(-1) === '') {
                setFormValue({...formValue, password: formValue.password.slice(0, data.length) })
            }
            else {
                setFormValue({...formValue, password: formValue.password + data.slice(-1) })
            }
            updatePasswordDisplay({...passwordDisplay, passsNew:'*'.repeat(data.length)})
            break
            }
            case 'passConfirm':{
            if (data.slice(-1) === '*' || data.slice(-1) === '') {
                setFormValue({...formValue, confirmPass: formValue.confirmPass.slice(0, data.length) })
            }
            else {
                setFormValue({...formValue, confirmPass: formValue.confirmPass + data.slice(-1) })
            }
            updatePasswordDisplay({...passwordDisplay, passConf:'*'.repeat(data.length)})
            break
            }
            default:
            return null
        }
    }

    const formFilledHandler = () => {
        ModalHandler()
        DialogHandler()
        setFormValue(formReset)
        updatePasswordDisplay(passReset)
    }
    
    const ModalHandler = () => {
        setSignUpModalState((current) => !current)
      }
    const LoginModalhandler = () => {
        setLoginModalState((current) => !current)
    }
    const DialogHandler = () => {
        setDialogState((current) => !current)
    }
    const HandlePassWordDisplay = () => {
        let {key, value} = ''
        passwordStatus.key === 'visible'
        ?  (() => {key = 'invisible'
         value = eyeInVisible})()
        :  (() => {key = 'visible'
         value = eyeVisible})()
        setPasswordStatus({key,value})
    }
    const HandleSignUp = () => {
        LoginModalhandler()
        ModalHandler()
    }

    return(
        <MainContainer>
            <ButtonContainer>
                <Button onClick={ModalHandler}>Sign-Up</Button>
                <Button onClick={LoginModalhandler}>Login</Button>
            </ButtonContainer>
            {signUpModalState &&
            <Modal>
                <ModalHeadder>
                    <HeaddingDiv>Please Enter The Following Details</HeaddingDiv>
                    <Img src={CancelButton} alt="Close Logo" onClick={ModalHandler}/>
                </ModalHeadder>
                <SignUpForm 
                formFilledHandler ={formFilledHandler}
                onChange={inputHandler} 
                fullName = {formValue.fullName}
                userName = {formValue.userName}
                mobile = {formValue.mobile}
                email = {formValue.emailId}
                password = {passwordDisplay.passsNew}
                confirmPass = {passwordDisplay.passConf}
                passData = {formValue}
                dataBase = {dataBase} />
            </Modal>}
            {loginModalState &&
            <Modal>
                <LoginModalHeadder>
                    <MainHeadL>Login</MainHeadL>
                    <SubHeadL>Enter your details below to continue</SubHeadL>
                </LoginModalHeadder>
                <InputCover>
                    <InputImg src={UserIcon} alt="Close Logo"/>
                    <TestInput />
                </InputCover>
                <InputCover>
                    <InputImg src={LockIcon} alt="Close Logo"/>
                    <TestInput />
                    <InputImg src={passwordStatus.value} alt="Password Status" onClick={HandlePassWordDisplay} />
                </InputCover>
                <ButtonContainer>
                    <LoginButton onClick={LoginModalhandler}>NEXT</LoginButton>
                </ButtonContainer>
                <SubHeadL style = {{marginTop:'42px',marginBottom:'12px'}}>
                    Don,t have an account ? <LinkText onClick={HandleSignUp}>Sign up here </LinkText>
                </SubHeadL>
            </Modal>}
            {dialogState &&
            <Modal>
                <DialogContainer>
                    <SuccessImg src={SuccessButton} alt="Success Logo"/>
                    <DialogHeadder>Account Created !!</DialogHeadder>
                    <Button onClick={DialogHandler}>
                        <ButtonText>
                            OK
                        </ButtonText>
                    </Button>
                </DialogContainer>
            </Modal>}
        </MainContainer>
    )
}

export default MainPage