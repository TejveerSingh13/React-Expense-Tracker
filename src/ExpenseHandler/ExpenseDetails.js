import React from "react";
import { 
    ExpenseDetailContainer,
    DateDetails,
    DateDetailsText,
    DivFlexColumn,
    DateDetailsAmount,
    ExpenseDetailsDescription
 } from "./style";

const ExpenseDetails = () => {
    return(
        <ExpenseDetailContainer>
            <DateDetails>
                <DateDetailsText>April</DateDetailsText>
                <DateDetailsText date='true'>26</DateDetailsText>
                <DateDetailsText>2021</DateDetailsText>
            </DateDetails>
            <DivFlexColumn>
                <ExpenseDetailsDescription>Show Expense Detail</ExpenseDetailsDescription>
            </DivFlexColumn>
            <DivFlexColumn>
                <DateDetailsAmount>₹ 2500/-</DateDetailsAmount>
            </DivFlexColumn>    
        </ExpenseDetailContainer>
    )
}

export default ExpenseDetails