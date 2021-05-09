import React from "react";
import useInput from "./hooks/use-input";
import { 
    ExpenseFormWrapper,
    TestInput,
    InputCover,
    InputLabel,
    ButtonContainer,
    FormButton,
    ExpenseFormTitle
 } from "./style";

const NewExpenseForm = (props) => {
    
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
      } = useInput(validateAmount, '')
    const {
        value : enteredDescr,
        showError: showDescrError,
        handleOnChange :handleOnChangeDescr,
        handleOnBlur: handleOnBlurDescr,
        resetValue: resetDescr
      } = useInput(validateDescription, '')
    const {
        value : enteredDate,
        showError: showDateError,
        handleOnChange :handleOnChangeDate,
        handleOnBlur: handleOnBlurDate,
        resetValue: resetDate
      } = useInput(validateDescription, '')
    const resetInputs = () => {
        resetExpenseAmount()
        resetDescr()
        resetDate()
    }
    const submitHandler = () => {
        if (!showAmountError && !showDescrError && !showDateError) {
            const DATA = {
                value: enteredAmount,
                description: enteredDescr,
                date: enteredDate
            }
            props.submit(DATA)
            resetInputs()
        }
    }

    return(
        <ExpenseFormWrapper height={props.height} margin={props.margin}>
            <ExpenseFormTitle>Enter your Expense</ExpenseFormTitle>
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
            <ButtonContainer>
                <FormButton onClick={submitHandler}>Save</FormButton>
            </ButtonContainer>
        </ExpenseFormWrapper>
    )
}

export default NewExpenseForm