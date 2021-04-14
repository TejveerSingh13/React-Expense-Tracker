import React, {Fragment, useState} from "react";
import { Container, Row, Col } from "react-grid-system";
import InputField from '../Components/InputField';
import {Button, ButtonContainer} from '../style';
import axios from 'axios'

const SignUpForm = (props) => {
    const {
        fullName,
        userName,
        mobile,
        email,
        password,
        confirmPass,
        onChange,
        formFilledHandler,
        passData,
        dataBase
    } = props

    const [formErrors, setFormErrors] = useState({})
    let {
    fullNameError,
    userNameError,
    emailIdError,
    mobileError,
    newPassError,
    confirmPassError
    } = formErrors

    const fullNameErrorHandle = (value, errors) => {
    !value.length
        ? (() => {errors.fullNameError = 'Please enter name'})()
        : delete errors.fullNameError
    }
    const userNameErrorHandle = (value, errors) => {
    !value.length
        ? (() => {errors.userNameError = 'User Name Taken'})()
        : delete errors.userNameError
    }
    const mobileErrorHandle = (value, errors) => {
    !value.length
        ? (() => {errors.mobileError = 'Please Enter Detail'})()
        : delete errors.mobileError
        }
    const emailErrorHandle = (value, errors) => {
    !value.length
        ? (() => {errors.emailIdError = 'Please Enter Detail'})()
        : delete errors.emailIdError
    }
    const passwordErrorHandle = (value, errors) => {
    !value.length
        ? (() => {errors.newPassError = 'Please Enter Detail'})()
        : delete errors.newPassError
    }
    const confirmPasswordErrorHandle = (value, errors) => {
    !value.length
        ? (() => {errors.confirmPassError = 'Please Enter Detail'})()
        : delete errors.confirmPassError
    }
    const checkPasswordErrorHandle = (value, errors) => {
    value.length 
        ? (() => {errors.confirmPassError = 'Password Does Not Match'})()
        : delete errors.confirmPassError
    }
    const checkUserNameErrorHandle = (value, errors) => {
    value.length 
            ? (() => {errors.userNameError = 'Username Exists!'})()
            : delete errors.userNameError
        }
    const checkEmailSynatxErrorHandle = (value, errors) => {
    value.length 
        ? (() => {errors.emailIdError = 'Enter Valid Email ID!'})()
        : delete errors.emailIdError
    }
    const checkEmailErrorHandle = (value, errors) => {
    value.length 
        ? (() => {errors.emailIdError = 'EmailID Exists!'})()
        : delete errors.emailIdError
    }

    const errorHandler = (e) => {
    const data = e.target.name
    const errors = {...formErrors}
    switch (data){
        case 'name' : {
        fullNameErrorHandle(fullName, errors)
        break
        }
        case 'user' :{
        userNameErrorHandle(userName,errors)
        break
        }
        case 'mobileNo' :{
        mobileErrorHandle(mobile, errors)
        break
        }
        case 'emailId' :{
        emailErrorHandle(email, errors)
        break
        }
        case 'passNew' :{
        passwordErrorHandle(password, errors)
        break
        }
        case 'passConfirm' :{
        confirmPasswordErrorHandle(confirmPass, errors)
        break
        }
        default :
        return null
    }
    setFormErrors(errors)
    }

    const validateError = () => {
        fullNameErrorHandle(fullName,formErrors)
        userNameErrorHandle(userName, formErrors)
        mobileErrorHandle(mobile, formErrors)
        emailErrorHandle(email, formErrors)
        passwordErrorHandle(password, formErrors)
        confirmPasswordErrorHandle(confirmPass, formErrors)
        setFormErrors({...formErrors})
        return !Object.keys(formErrors).length
    }

    const checkUserNameAndEmail = ( UserName, eMail) => {
        dataBase.map((data) => {
            if (data.userName === UserName) {
                checkUserNameErrorHandle(UserName, formErrors)
            }
            if (data.emailId === eMail) {
                checkEmailErrorHandle(email, formErrors)
            }
            setFormErrors({...formErrors})
            return(!Object.keys(formErrors).length)
        })
        if ((eMail.search("@") <= 0) || !(eMail.includes('.com') || eMail.includes('.in'))) {
            checkEmailSynatxErrorHandle(email, formErrors)
        }
        setFormErrors({...formErrors})
        return(!Object.keys(formErrors).length)
    }

    const updateDataHandler = () =>{
        const validate = validateError()
        let check = false
        if (validate){
             if (passData.password !== passData.confirmPass){
                checkPasswordErrorHandle(confirmPass, formErrors)
                setFormErrors({...formErrors})
            } 
            check = checkUserNameAndEmail(userName, email)
        }
        if (check) {
            axios.post(`https://my-project-database-c4a55-default-rtdb.firebaseio.com/.json`,passData)
            formFilledHandler()
        }
    }
    return(
        <Fragment>
            <Container>
                <Row>
                  <Col xs={6}>
                    <InputField 
                      label='Full Name' 
                      name='name' 
                      value={fullName}
                      error= {fullNameError}
                      onChange={onChange}
                      onBlur = {errorHandler}/>
                  </Col>
                  <Col xs={6}>
                    <InputField 
                      label='User Name' 
                      name='user' 
                      value={userName}
                      error= {userNameError}
                      onChange={onChange}
                      onBlur = {errorHandler}/>
                  </Col>
                  <Col xs={12}>
                      <InputField 
                        label='Mobile Number' 
                        name='mobileNo' 
                        value={mobile}
                        error= {mobileError}
                        onChange={onChange}
                        onBlur = {errorHandler}/>
                  </Col>
                  <Col xs={12}>
                      <InputField 
                        label='Email-ID' 
                        name='emailId' 
                        value={email}
                        error= {emailIdError}
                        onChange={onChange}
                        onBlur = {errorHandler}/>
                  </Col>
                  <Col xs={12}>
                      <InputField 
                        label='Create Password' 
                        name='passNew'
                        value={password}
                        error= {newPassError} 
                        onChange={onChange}
                        onBlur = {errorHandler}/>
                  </Col>
                  <Col xs={12}>
                      <InputField 
                        label='Confirm Password' 
                        name='passConfirm' 
                        value={confirmPass}
                        error= {confirmPassError}
                        onChange={onChange}
                        onBlur = {errorHandler}/>
                  </Col>
                </Row>
            </Container>
            <ButtonContainer>
                    <Button onClick={updateDataHandler}>Sign Me UP !</Button>
            </ButtonContainer>
        </Fragment>
    )
}

export default SignUpForm