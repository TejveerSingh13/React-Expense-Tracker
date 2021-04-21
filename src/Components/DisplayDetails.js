import React, {Fragment, useEffect, useState} from "react";
import { useHistory, useLocation } from 'react-router-dom';
import {
    DisplayWrapper,
    DisplayNameWrapper,
    DisplayNameHeadder,
    DisplayDataContainer,
    BackIcon
 } from "../style";
import backIcon from "../icons/back.png";
import axios from 'axios';

const DisplayDetails = () => {
    
    const location = useLocation()
    const [userDetails, setUserDetails] = useState(null)
    const search = location?.search
    const ID = search.substring(1)
    
    const history = useHistory();

    useEffect(() => {
        axios.get(`https://my-project-database-c4a55-default-rtdb.firebaseio.com/${ID}/.json`)
            .then(res => {
                if (!userDetails) {
                    const dataBase = res?.data
                    setUserDetails(dataBase)
                }
            })
            .catch(err => console.log(err))
    },[userDetails,ID])

    const BackClickManager = () => {
        history.push('/')
    }

    return(
            <Fragment>
            <DisplayWrapper>
                <BackIcon src={backIcon} alt = 'BackIcon' onClick={BackClickManager}/>
                <DisplayNameWrapper>
                    <DisplayNameHeadder style={{fontSize:'x-large'}}>{userDetails?.fullName}</DisplayNameHeadder>
                    <DisplayNameHeadder>{`@${userDetails?.userName}`}</DisplayNameHeadder>
                </DisplayNameWrapper>
            </DisplayWrapper>
            <DisplayDataContainer>
                <DisplayNameHeadder style={{fontSize:'large'}} title = 'true' >E-Mail Address</DisplayNameHeadder>
                <DisplayNameHeadder data ='true'>{userDetails?.emailId}</DisplayNameHeadder>
                <DisplayNameHeadder style={{fontSize:'large'}} title = 'true' >Mobile Number</DisplayNameHeadder>
                <DisplayNameHeadder data ='true'>{`+91 ${userDetails?.mobile}`}</DisplayNameHeadder>
                <DisplayNameHeadder style={{fontSize:'large'}} title = 'true' >Password</DisplayNameHeadder>
                <DisplayNameHeadder data ='true'>{userDetails?.confirmPass}</DisplayNameHeadder>
            </DisplayDataContainer>
        </Fragment>
    )
}

export default DisplayDetails