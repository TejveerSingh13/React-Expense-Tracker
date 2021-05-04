import React from "react";
import { 
    ExpenseDetailContainer,
    DateDetails,
    DateDetailsText,
    DivFlexColumn,
    DateDetailsAmount,
    ExpenseDetailsDescription
 } from "./style";

const ExpenseDetails = (props) => {
    return(
        <ExpenseDetailContainer>
            <DateDetails>
                <DateDetailsText>{props.month}</DateDetailsText>
                <DateDetailsText date='true'>{props.date}</DateDetailsText>
                <DateDetailsText>{props.year}</DateDetailsText>
            </DateDetails>
            <DivFlexColumn>
                <ExpenseDetailsDescription>{props.label}</ExpenseDetailsDescription>
            </DivFlexColumn>
            <DivFlexColumn>
                <DateDetailsAmount>{`₹ ${props.amount}/-`}</DateDetailsAmount>
            </DivFlexColumn>    
        </ExpenseDetailContainer>
    )
}

export default ExpenseDetails