import React, {Fragment} from "react";
// import { useHistory } from 'react-router-dom';
import {
    DisplayWrapper,
    DisplayNameWrapper,
    DisplayNameHeadder,
    DisplayDataContainer,
    BackIcon
 } from "../style";
import backIcon from "../icons/back.png";

const DisplayDetails = () => {
    
    // const history = useHistory();
    return(
        <Fragment>
            <DisplayWrapper>
                <BackIcon src={backIcon} alt = 'BackIcon'/>
                <DisplayNameWrapper>
                    <DisplayNameHeadder style={{fontSize:'x-large'}}>Tejveer Singh</DisplayNameHeadder>
                    <DisplayNameHeadder>@tsingh8513</DisplayNameHeadder>
                </DisplayNameWrapper>
            </DisplayWrapper>
            <DisplayDataContainer>
                <DisplayNameHeadder style={{fontSize:'large'}} title >E-Mail Address</DisplayNameHeadder>
                <DisplayNameHeadder data>tejveerjatt9@gmail.com</DisplayNameHeadder>
                <DisplayNameHeadder style={{fontSize:'large'}} title >Mobile Number</DisplayNameHeadder>
                <DisplayNameHeadder data>+91 9820720085</DisplayNameHeadder>
                <DisplayNameHeadder style={{fontSize:'large'}} title >Password</DisplayNameHeadder>
                <DisplayNameHeadder data>***********</DisplayNameHeadder>
            </DisplayDataContainer>
        </Fragment>
    )
}

export default DisplayDetails