import React, {useState} from 'react'
import { 
    ExpenseBarContainer,
    ExpenseBar,
    ExpenseBarLabelContainer,
    ExpenseBarIndicator,
    ExpenseBarLabel,
    ExpenseBarWrapper,
    ExpenseBarContainerTitle,
    DropdownIcon,
    ExpenseBarContainerHeadder
 } from "./style";

const ExpenseBars = () => {

    const [expenseBarStatus, updateExpenseBarStatus] = useState(false)

    const HandleExpenseBarDrop = () => updateExpenseBarStatus(current => !current)

    return(
        <ExpenseBarContainer height={expenseBarStatus}>
            <ExpenseBarContainerTitle>
                <ExpenseBarContainerHeadder>View Monthly Expense Chart</ExpenseBarContainerHeadder>
                <DropdownIcon isopen={expenseBarStatus} onClick={HandleExpenseBarDrop} />
            </ExpenseBarContainerTitle>
            <ExpenseBarWrapper>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>Jan</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>Feb</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>Mar</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>Apr</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>May</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>Jun</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>Jul</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>Aug</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>Sep</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>Oct</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>Nov</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator />
                    </ExpenseBar>
                    <ExpenseBarLabel>Dec</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
            </ExpenseBarWrapper>
        </ExpenseBarContainer>
    )
}

export default ExpenseBars