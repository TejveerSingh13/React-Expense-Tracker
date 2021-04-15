import React from 'react';
import { FormContainer,ModalContainer} from '../style';

const Modal = (props) => {
    return (
        <ModalContainer>
            <FormContainer>
            {props.children}
          </FormContainer>
        </ModalContainer>
    )
}

export default Modal