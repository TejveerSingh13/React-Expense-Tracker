import React, { useState, useEffect} from "react";
import {
    MainContainer,
    ButtonContainer, 
    Img, 
    ModalHeadder, 
    HeaddingDiv,
    DialogContainer,
    DialogHeadder,
    SuccessImg,
    ButtonText,
    LoginButton
} from '../style';
import CancelButton from "../icons/cancel.svg";
import SuccessButton from "../icons/checkLight.png"; 
import Modal from "../Components/Modal";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginPage";
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
    const HandleSignUp = () => {
        LoginModalhandler()
        ModalHandler()
    }

    return(
        <MainContainer>
            <ButtonContainer>
                <LoginButton onClick={ModalHandler}>Sign-Up</LoginButton>
                <LoginButton onClick={LoginModalhandler}>Login</LoginButton>
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
                <LoginForm HandleSignUp={HandleSignUp} LoginModalhandler={LoginModalhandler}/>
            </Modal>}
            {dialogState &&
            <Modal>
                <DialogContainer>
                    <SuccessImg src={SuccessButton} alt="Success Logo"/>
                    <DialogHeadder>Account Created !!</DialogHeadder>
                    <LoginButton onClick={DialogHandler}>
                        <ButtonText>
                            OK
                        </ButtonText>
                    </LoginButton>
                </DialogContainer>
            </Modal>}
        </MainContainer>
    )
}

export default MainPage