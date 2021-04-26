import React from "react";
import { 
    ExpenseFormWrapper,
    TestInput,
    InputCover,
    InputLabel,
    ButtonContainer,
    FormButton
 } from "./style";

const NewExpenseForm = (props) => {
    return(
        <ExpenseFormWrapper height={props.height} margin={props.margin}>
            <InputCover>
            <InputLabel>Value</InputLabel>
            <TestInput type='text'  />
            </InputCover>
            <InputCover>
            <InputLabel>Description</InputLabel>
            <TestInput type='text'  />
            </InputCover>
            <InputCover>
            <InputLabel>Date</InputLabel>
            <TestInput type='date' style={{backgroundColor:'white'}} />
            </InputCover>
            <ButtonContainer>
                <FormButton>Save</FormButton>
            </ButtonContainer>
        </ExpenseFormWrapper>
    )
}

export default NewExpenseForm