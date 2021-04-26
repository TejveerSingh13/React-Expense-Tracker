import React, {useState} from "react";
import ExpenseBars from "./ExpenseBar";
import NewExpenseForm from "./NewExpenseForm";
import {
    MainContainer,
    HeadderContainer,
    HeadderText,
    HeadderImgDiv,
    HeadderImg
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
        </MainContainer>
    )
}

export default ExpenseHandler