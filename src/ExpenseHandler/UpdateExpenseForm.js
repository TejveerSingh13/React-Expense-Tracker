import React from "react";
import useInput from "./hooks/use-input";
import { 
    ExpenseFormWrapper,
    TestInput,
    InputCover,
    InputLabel,
    ButtonContainerUpdate,
    FormButtonUpdate,
    ExpenseFormTitle
 } from "./style";
 import {
    LoadindContainer,
    LoaderBackground
 } from "../Components/style"

const UpdateExpenseForm = (props) => {

    const initialState = {
        date : props.date,
        description : props.description,
        value : props.value
    }

    const MaxDate = new Date().toISOString().slice(0, 10)

    const validateAmount =  (value) => {
        const state = (value === '' || value <= 0) ? true : false 
        return state
    }
    const validateDescription =  (value) => {
        const state = (value === '') ? true : false 
        return state
    }

    const {
        value : enteredAmount,
        showError: showAmountError,
        handleOnChange :handleOnChangeAmount,
        handleOnBlur: handleOnBlurAmount,
        resetValue: resetExpenseAmount
      } = useInput(validateAmount, props.value)
    const {
        value : enteredDescr,
        showError: showDescrError,
        handleOnChange :handleOnChangeDescr,
        handleOnBlur: handleOnBlurDescr,
        resetValue: resetDescr
      } = useInput(validateDescription, props.description)
    const {
        value : enteredDate,
        showError: showDateError,
        handleOnChange :handleOnChangeDate,
        handleOnBlur: handleOnBlurDate,
        resetValue: resetDate
      } = useInput(validateDescription, props.date)
    const resetInputs = () => {
        resetExpenseAmount()
        resetDescr()
        resetDate()
    }
    const submitHandler = (e) => {
        if (!showAmountError && !showDescrError && !showDateError) {
            const DATA = {
                date: enteredDate,
                description: enteredDescr,
                value: enteredAmount
            }
            const Type = e.target.value
            props.SubmitChanges(DATA, initialState, Type)
            resetInputs()
            props.onClick()
        }
    }

    return(
        <LoadindContainer>
            <LoaderBackground>
                <ExpenseFormWrapper height= 'true' margin='true'>
                <ExpenseFormTitle>Edit your Expense</ExpenseFormTitle>
                <InputCover error={showAmountError}>
                <InputLabel>Value</InputLabel>
                <TestInput 
                    type='number' 
                    placeholder='Eg. ₹ 259 '
                    min= '1'
                    value={enteredAmount}
                    onChange={handleOnChangeAmount}
                    onBlur={handleOnBlurAmount} />
                </InputCover>
                <InputCover error={showDescrError}>
                <InputLabel>Description</InputLabel>
                <TestInput 
                    type='text'
                    placeholder='Eg. Monthly phone recharge'
                    value={enteredDescr}
                    onChange={handleOnChangeDescr}
                    onBlur={handleOnBlurDescr}  />
                </InputCover>
                <InputCover error={showDateError}>
                <InputLabel>Date</InputLabel>
                <TestInput 
                    type='date'
                    value={enteredDate}
                    onChange={handleOnChangeDate}
                    onBlur={handleOnBlurDate} 
                    max={MaxDate}
                    style={{backgroundColor:'white'}} />
                </InputCover>
                <ButtonContainerUpdate>
                    <FormButtonUpdate onClick={props.onClick}>Cancel</FormButtonUpdate>
                    <FormButtonUpdate green='true' onClick={submitHandler} value = 'save' >Save</FormButtonUpdate>
                    <FormButtonUpdate red='true' onClick={submitHandler} value = 'delete' >Delete</FormButtonUpdate>
                </ButtonContainerUpdate>
                </ExpenseFormWrapper>
            </LoaderBackground>
        </LoadindContainer>
    )
}

export default UpdateExpenseForm