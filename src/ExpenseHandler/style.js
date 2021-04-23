import styled  from 'styled-components'

export const Dummy = styled.div`
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    background-color: #e6faff;
`

export const ExpenseBar = styled.div`
    width: 24px;
    display:flex;
    flex-direction:column-reverse;
    height: 120px;
    margin: 300px auto;
    background-color: white;
    border: 2px solid white;
    border-radius: 24px;
    padding:4px;
`
export const ExpenseBarIndicator = styled.div`
    height: 50%;
    background-image: linear-gradient(#e60000, #ffcc66, #99ff33);
    border-radius: 24px;
    
`