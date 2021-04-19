import React from 'react'
import {Input,LabelInput, LabelInputError} from '../style'

const InputField = (props) => {
    return(
        <label>
            <LabelInput>{props.label}</LabelInput>
            <Input  type='text' 
            onChange={props.onChange} 
            name={props.name} 
            onBlur={props.onBlur} 
            value={props.value} 
            autoComplete={'off'}/>
            <LabelInputError>{props.error}</LabelInputError>
        </label>
    )
}

export default InputField;