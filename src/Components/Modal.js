import React from 'react';
import CancelButton from "../icons/circle.svg";
import { FormContainer, Img, ModalHeadder, HeaddingDiv,ModalContainer} from '../style';

const Modal = (props) => {
    return (
        <ModalContainer>
            <FormContainer>
            <ModalHeadder>
              <HeaddingDiv>Please Enter The Following Details</HeaddingDiv>
              <Img src={CancelButton} alt="Close Logo" onClick={props.onClick}/>
            </ModalHeadder>
            {props.children}
          </FormContainer>
        </ModalContainer>
    )
}

export default Modal