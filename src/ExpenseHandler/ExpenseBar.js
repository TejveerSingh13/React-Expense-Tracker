import React, {useState} from 'react'
import { Container, Row, Col } from "react-grid-system";
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

const ExpenseBars = (props) => {

    const MONTHS = [
        {
            month: 'Jan',
            total: 0
        },{
            month: 'Feb',
            total: 0
        },{
            month: 'Mar',
            total: 0
        },{
            month: 'Apr',
            total: 0
        },{
            month: 'May',
            total: 0
        },{
            month: 'Jun',
            total: 0
        },{
            month: 'Jul',
            total: 0
        },{
            month: 'Aug',
            total: 0
        },{
            month: 'Sep',
            total: 0
        },{
            month: 'Oct',
            total: 0
        },{
            month: 'Nov',
            total: 0
        },{
            month: 'Dec',
            total: 0
        }
    ]
    const DATE = new Date().getFullYear()
    const [expenseBarStatus, updateExpenseBarStatus] = useState(false)
    let max = 0
    
    const UpdateMonthData = (month, value) => {
        MONTHS[month].total += +value
    }
    const FindMax = () => {
        max = Math.max(...MONTHS.map(d =>  d.total),0) 
    }

    if(props.data){
        Object.entries(props.data).map(d=> {
        const expenseData = d[1]
        const date = new Date(expenseData.date)
        if( date.getFullYear() === DATE) {
            UpdateMonthData(date.getMonth(),d[1].value)
        }

        return true
        })
        FindMax()  
    }

    const HandleExpenseBarDrop = () => updateExpenseBarStatus(current => !current)

    return(
        <ExpenseBarContainer height={expenseBarStatus}>
            <ExpenseBarContainerTitle>
                <ExpenseBarContainerHeadder>View Monthly Expense Chart</ExpenseBarContainerHeadder>
                <DropdownIcon isopen={expenseBarStatus} onClick={HandleExpenseBarDrop} />
            </ExpenseBarContainerTitle>
            <ExpenseBarWrapper isopen={expenseBarStatus}>
                <Container>
                    <Row>
                        {MONTHS.map(data => {
                            return(
                                <Col xs={3} sm={3} md={1} key={data.month}>
                                    <ExpenseBarLabelContainer>
                                        <ExpenseBar>
                                            <ExpenseBarIndicator height = {(data.total/max)*100} />
                                        </ExpenseBar>
                                        <ExpenseBarLabel>{data.month}</ExpenseBarLabel>
                                    </ExpenseBarLabelContainer>
                                </Col>
                            )})}
                    </Row>
                </Container>
            </ExpenseBarWrapper>
        </ExpenseBarContainer>
    )
}

export default ExpenseBars