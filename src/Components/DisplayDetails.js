import React, {Fragment} from "react";
import { useHistory } from 'react-router-dom';
import {
    DisplayWrapper,
    DisplayNameWrapper,
    DisplayNameHeadder,
    DisplayDataContainer,
    BackIcon
 } from "../style";
import backIcon from "../icons/back.png";

const DisplayDetails = () => {
    
    const history = useHistory();

    const BackClickManager = () => {
        history.push('/')
    }

    return(
        <Fragment>
            <DisplayWrapper>
                <BackIcon src={backIcon} alt = 'BackIcon' onClick={BackClickManager}/>
                <DisplayNameWrapper>
                    <DisplayNameHeadder style={{fontSize:'x-large'}}>Tejveer Singh</DisplayNameHeadder>
                    <DisplayNameHeadder>@tsingh8513</DisplayNameHeadder>
                </DisplayNameWrapper>
            </DisplayWrapper>
            <DisplayDataContainer>
                <DisplayNameHeadder style={{fontSize:'large'}} title = 'true' >E-Mail Address</DisplayNameHeadder>
                <DisplayNameHeadder data ='true'>tejveerjatt9@gmail.com</DisplayNameHeadder>
                <DisplayNameHeadder style={{fontSize:'large'}} title = 'true' >Mobile Number</DisplayNameHeadder>
                <DisplayNameHeadder data ='true'>+91 9820720085</DisplayNameHeadder>
                <DisplayNameHeadder style={{fontSize:'large'}} title = 'true' >Password</DisplayNameHeadder>
                <DisplayNameHeadder data ='true'>***********</DisplayNameHeadder>
            </DisplayDataContainer>
        </Fragment>
    )
}

export default DisplayDetails