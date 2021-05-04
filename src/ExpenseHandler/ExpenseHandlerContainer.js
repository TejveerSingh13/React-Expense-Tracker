import React, {useState, useEffect} from "react";
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import NewExpenseForm from "./NewExpenseForm";
import ExpenseBars from "./ExpenseBar";
import ExpenseDetails from "./ExpenseDetails";
import Loader from "../Components/Loader";
import firebase from "../firebase";
import {
    MainContainer,
    HeadderContainer,
    HeadderText,
    HeadderImgDiv,
    Signout,
    HeadderImg,
    ExpenseDetailsWrapper,
    ExpenseDetailsError
  } from "./style";

const ExpenseHandler = () => {

    const MONTHS = [
        'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
    ]
    const location = useLocation()
    const search = location?.search
    const ID = search.substring(1)
    const history = useHistory();

    const [userDetails, setUserDetails] = useState(null)
    const [expenselist, setExpenseList] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const[formState, setFormState] = useState(false)

    useEffect(() => {
        axios.get(`https://my-project-database-c4a55-default-rtdb.firebaseio.com/${ID}/.json`)
            .then(res => {
                if (!userDetails) {
                    const dataBase = res?.data
                    setUserDetails(dataBase)
                    setExpenseList(dataBase.expenses)
                    setIsLoading(false)
                }
            })
            .catch(err => console.log(err))
    },[userDetails,ID])
    console.log('userDetails Api',userDetails);
    console.log('expenselist',expenselist);

    const onClickIcon = () => {
        setFormState(current => !current)
    }
    const onSignOut = () => {
        history.push('/')
    }
    const updateExpenseList = (expenseRef) => {
        expenseRef.on('value', (snapshot) => {
            const newExpenseList = snapshot.val()
            setExpenseList(newExpenseList)
        })
        console.log("updated!");
    }
    const submitExpenseResponse = (newValue) => {
        console.log('new response',newValue)
        const expenseRef = firebase.database().ref(`${ID}/expenses`);
        expenseRef.push(newValue);
        updateExpenseList(expenseRef)
      
    }
    const renderExpenseDetails = () => {
        return(
            Object.entries(expenselist).slice(0).reverse().map(e => {
                const key = e[0]
                const data = e[1]
                console.log('expensel key & data',key, data)
                const date = new Date(data.date)

                return <ExpenseDetails 
                    label={data.description} 
                    amount={data.value} 
                    date={date.getDate()}
                    month={MONTHS[date.getMonth()]}
                    year={date.getFullYear()} />
            })
        )
    }

    return(
        <MainContainer> {/* over all flex column*/}
                <HeadderContainer>
                    <div>
                        <HeadderText>Hello,</HeadderText>
                        <HeadderText name='true'>{userDetails?.fullName}</HeadderText>
                    </div>
                    <HeadderImgDiv>
                        <HeadderImg onClick={onClickIcon} />
                        <Signout onClick={onSignOut}>Signout</Signout>
                    </HeadderImgDiv>
                </HeadderContainer>
                <NewExpenseForm height={formState} margin={formState} submit={submitExpenseResponse} />
                <ExpenseBars />
                <HeadderText detail='true'>Your Expenses</HeadderText>
                <ExpenseDetailsWrapper>
                    {!expenselist && <ExpenseDetailsError>No details found!</ExpenseDetailsError>}
                    {expenselist && renderExpenseDetails()}
                </ExpenseDetailsWrapper>
            {isLoading && <Loader />}
        </MainContainer>
    )
}

export default ExpenseHandler