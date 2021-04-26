import React, {useState} from "react";
import NewExpenseForm from "./NewExpenseForm";
import ExpenseBars from "./ExpenseBar";
import ExpenseDetails from "./ExpenseDetails";
import {
    MainContainer,
    HeadderContainer,
    HeadderText,
    HeadderImgDiv,
    HeadderImg,
    ExpenseDetailsWrapper
  } from "./style";

const ExpenseHandler = () => {

    const[formState, setFormState] = useState(false)
    const onClickIcon = () => {
        setFormState(current => !current)
    }

    return(
        <MainContainer> {/* over all flex column*/}
                <HeadderContainer>
                    <div>
                        <HeadderText>Hello,</HeadderText>
                        <HeadderText name='true'>Tejveer</HeadderText>
                    </div>
                    <HeadderImgDiv>
                        <HeadderImg onClick={onClickIcon} />
                    </HeadderImgDiv>
                </HeadderContainer>
                <NewExpenseForm height={formState} margin={formState} />
                <ExpenseBars />
                <HeadderText detail='true'>Your Expenses</HeadderText>
                <ExpenseDetailsWrapper>
                    <ExpenseDetails />
                    <ExpenseDetails />
                    <ExpenseDetails />
                    <ExpenseDetails />
                    <ExpenseDetails />
                </ExpenseDetailsWrapper>
        </MainContainer>
    )
}

export default ExpenseHandler