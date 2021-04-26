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
                            <ExpenseBarIndicator height = '0' />
                    </ExpenseBar>
                    <ExpenseBarLabel>Jan</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator height = '20'/>
                    </ExpenseBar>
                    <ExpenseBarLabel>Feb</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator height = '40'/>
                    </ExpenseBar>
                    <ExpenseBarLabel>Mar</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator height = '60'/>
                    </ExpenseBar>
                    <ExpenseBarLabel>Apr</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator height = '80' />
                    </ExpenseBar>
                    <ExpenseBarLabel>May</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator height = '100'/>
                    </ExpenseBar>
                    <ExpenseBarLabel>Jun</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator height = '80' />
                    </ExpenseBar>
                    <ExpenseBarLabel>Jul</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator height = '60'/>
                    </ExpenseBar>
                    <ExpenseBarLabel>Aug</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator height = '40'/>
                    </ExpenseBar>
                    <ExpenseBarLabel>Sep</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator height = '20' />
                    </ExpenseBar>
                    <ExpenseBarLabel>Oct</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator height = '42'/>
                    </ExpenseBar>
                    <ExpenseBarLabel>Nov</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
                <ExpenseBarLabelContainer>
                    <ExpenseBar>
                            <ExpenseBarIndicator height = '69'/>
                    </ExpenseBar>
                    <ExpenseBarLabel>Dec</ExpenseBarLabel>
                </ExpenseBarLabelContainer>
            </ExpenseBarWrapper>
        </ExpenseBarContainer>
    )
}

export default ExpenseBars