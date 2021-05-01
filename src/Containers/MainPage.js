import React, { useState, useEffect, Fragment} from "react";
import { useHistory } from "react-router-dom";
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
import axios from 'axios';

const MainPage = () => {
    
    const history = useHistory();
    const formReset = {
        fullName : '',
        userName : '',
        mobile : '',
        emailId : '',
        password : '',
        confirmPass : ''
    }
    const [formValue, setFormValue] = useState(formReset)
    const [signUpModalState, setSignUpModalState] = useState(false)
    const [loginModalState, setLoginModalState] = useState(false)
    const [dialogState, setDialogState] = useState(false)
    const [dataBase, setDataBase] = useState(null)
    const [apiKeys, setAPIKeys] = useState([])

    useEffect(() => {
        axios.get(`https://my-project-database-c4a55-default-rtdb.firebaseio.com/.json`)
            .then(res => {
                if (!dataBase) {
                    const dataBaseArray = Object.entries(res.data).map((e) => { return (e[1])})
                    const APIKey = Object.entries(res.data).map((e) => { return (e[0])})
                    setDataBase(dataBaseArray)
                    setAPIKeys(APIKey)
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
            setFormValue({...formValue, password: data })
            break
            }
            case 'passConfirm':{
            setFormValue({...formValue, confirmPass: data })
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
        setTimeout(() => {
            setDataBase(null)
        },5000)
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
    const HandleLogin = (dataID) => {
        history.push(`/expenses?${apiKeys[dataID]}`)
    }

    return(
        <Fragment>
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
                    password = {formValue.password}
                    confirmPass = {formValue.confirmPass}
                    passData = {formValue}
                    dataBase = {dataBase} />
                </Modal>}
                {loginModalState &&
                <Modal>
                    <LoginForm 
                    HandleSignUp={HandleSignUp} 
                    LoginModalhandler={LoginModalhandler} 
                    dataBase={dataBase} 
                    HandleLogin={HandleLogin}/>
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
        </Fragment>
    )
}

export default MainPage