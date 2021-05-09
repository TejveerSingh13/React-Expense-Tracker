import { useState } from "react";

const useInput = (validation,initVal) => {

    const [value, setValue] = useState(initVal)
    const [showError, setShowError] = useState(false)

    const handleOnChange = (event) => {
        setValue(event.target.value)
    }
    const handleOnBlur = (event) => {
        const state = validation(value)
        setShowError(state)
    }
    const resetValue = () => {
        setValue('')
    }
    return{
        value,
        showError,
        handleOnChange,
        handleOnBlur,
        resetValue
    }
}
export default useInput