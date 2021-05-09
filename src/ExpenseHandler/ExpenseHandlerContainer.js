import React, {useState, useEffect, Fragment} from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import NewExpenseForm from "./NewExpenseForm";
import ExpenseBars from "./ExpenseBar";
import ExpenseDetails from "./ExpenseDetails";
import Loader from "../Components/Loader";
import PageNotFound from "../Components/404File";
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
    const history = useHistory();
    const ID = localStorage.getItem('ID')
    const isLogin = localStorage.getItem('isLogin')

    const [userDetails, setUserDetails] = useState(null)
    const [expenselist, setExpenseList] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [formState, setFormState] = useState(false)
    const [expenseDetailList, setExpenseDetailList] = useState([])

    useEffect(() => {
        axios.get(`https://my-project-database-c4a55-default-rtdb.firebaseio.com/${ID}/.json`)
            .then(res => {
                if (!userDetails) {
                    const dataBase = res?.data
                    setUserDetails(dataBase)
                    setExpenseList(dataBase?.expenses)
                    setIsLoading(false)
                }
            })
            .catch(err => console.log(err))
    },[userDetails,ID])
    useEffect(() => {
        if (expenselist) {
            const DataDate = Object.entries(expenselist).map(e => {
                const data = e[1]
                return data
            }).slice().sort((a,b) => {
                const aDate = new Date(a.date)
                const bDate = new Date(b.date)
                return bDate - aDate
            })
            setExpenseDetailList(DataDate)
        }
    },[expenselist])

    const onClickIcon = () => {
        setFormState(current => !current)
    }
    const onSignOut = () => {
        localStorage.removeItem('ID')
        localStorage.setItem('isLogin', false)
        history.push('/')
    }
    const updateExpenseList = () => {
        const expenseRef = firebase.database().ref(`${ID}/expenses`);
        expenseRef.on('value', (snapshot) => {
            const newExpenseList = snapshot.val()
            setExpenseList(newExpenseList)
        })
    }
    const submitExpenseResponse = (newValue) => {
        const expenseRef = firebase.database().ref(`${ID}/expenses`);
        expenseRef.push(newValue);
        updateExpenseList() 
    }
    const HandleExpenseUpdates = (DATA, initialState, action) => {
        let changeID
        Object.entries(expenselist).map(e => {
            const d = e[1]
            if ((d.value === initialState.value) && (d.date === initialState.date) && (d.description === initialState.description)) {
                changeID = e[0]
            }
            return changeID
        })
        const expenseRef = firebase.database().ref(`${ID}/expenses/${changeID}`);
        if (action === 'save') {
            expenseRef.update(DATA)
        }
        else if (action === 'delete') {
            expenseRef.remove()
        }
        updateExpenseList()
    }

    const renderExpenseDetails = () => {
        return(
            expenseDetailList.map(e => {
                const date = new Date(e.date)
                return <ExpenseDetails 
                    key = {date.description} 
                    label={e.description}
                    passDate={e.date} 
                    amount={e.value} 
                    date={date.getDate()}
                    month={MONTHS[date.getMonth()]}
                    year={date.getFullYear()}
                    HandleExpenseUpdates={HandleExpenseUpdates} />
            })
        )
    }

    return(
        <MainContainer> {/* over all flex column*/}
        {(isLogin && ID) && 
            <Fragment>
                <HeadderContainer>
                    <div>
                        <HeadderText>Hello,</HeadderText>
                        <HeadderText name='true'>{userDetails ? userDetails.fullName : ''}</HeadderText>
                    </div>
                    <HeadderImgDiv>
                        <HeadderImg onClick={onClickIcon} />
                        <Signout onClick={onSignOut}>Signout</Signout>
                    </HeadderImgDiv>
                </HeadderContainer>
                <NewExpenseForm height={formState} margin={formState} submit={submitExpenseResponse} />
                <ExpenseBars data={expenselist} />
                <HeadderText detail='true'>Your Expenses</HeadderText>
                <ExpenseDetailsWrapper>
                    {!expenselist && <ExpenseDetailsError>No details found!</ExpenseDetailsError>}
                    {expenselist && renderExpenseDetails()}
                </ExpenseDetailsWrapper>
                {isLoading && <Loader />}
            </Fragment>}
            {(!isLogin || !ID ) && <PageNotFound />}  
        </MainContainer>
    )
}

export default ExpenseHandler