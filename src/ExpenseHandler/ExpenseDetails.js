import React, {useState, Fragment} from "react";
import UpdateExpenseForm from "./UpdateExpenseForm";
import { 
    ExpenseDetailContainer,
    DateDetails,
    DateDetailsText,
    DivFlexColumn,
    DateDetailsAmount,
    ExpenseDetailsDescription
 } from "./style";

const ExpenseDetails = (props) => {

    const [toggleUpdateExpense, setToggleExpense] = useState(false)

    const UpdateExpenseToggler =() => {
        setToggleExpense(current => !current)   
    }
    const HandleSubmitChanges = (DATA, initialState, Type) => {
        props.HandleExpenseUpdates(DATA, initialState, Type)
    }

    return(
        <Fragment>
            <ExpenseDetailContainer onClick={UpdateExpenseToggler}>
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
            {toggleUpdateExpense && 
            <UpdateExpenseForm 
                onClick={UpdateExpenseToggler}
                value={props.amount}
                description={props.label}
                date={props.passDate}
                SubmitChanges={HandleSubmitChanges} />}
        </Fragment>
    )
}

export default ExpenseDetails