import styled  from 'styled-components'
import { ReactComponent as ChangeDateIcon } from '../icons/change-day.svg';
import { ReactComponent as BackIcon } from '../icons/back.svg';

export const MainContainer = styled.div`
    position: relative;
    padding:32px 16px 16px;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    background-color: #e6faff;
    @media (min-width: 971px) {
        width: 970px;
        margin: 100px auto 32px;
        border-radius: 12px;
        box-shadow:0 0 17px -5px #006699;
    }
`

export const ExpenseBar = styled.div`
    width: 18px;
    height: 120px;
    display:flex;
    flex-direction:column-reverse;
    margin: 12px 18px;
    background-color: white;
    border: 2px solid white;
    border-radius: 24px;
    padding:4px;
    flex-shrink:0;
    overflow-x: auto;
    @media (min-width: 558px) {
        width: 24px;
        height: 120px;
        margin: 16px 18px;
    }
`
export const ExpenseBarIndicator = styled.div`
    height: ${props => props.height + '%'};
    background-image: linear-gradient(#e60000, #ffcc66, #99ff33);
    border-radius: 24px;
    
`
export const HeadderContainer = styled.div`
    display:flex;
    justify-content: space-between;
`
export const HeadderText = styled.p`
    margin: ${props => props.detail ? '0 auto 24px 4px' : '0 auto 0 4px'};
    color: #006699;
    font-size: ${props => props.name ? '40px' : '32px'};
    font-size: ${props => props.detail ? '22px' : '32px'};
    text-shadow: 0 0 9px #99ebff;
    @media (min-width: 558px) {
        margin: 0 auto 0 28px;
    }
`
export const HeadderImgDiv = styled.div`
    display:flex;
    flex-direction:column-reverse;
`
export const HeadderImg = styled(ChangeDateIcon)`
    width: 28px;
    height: 28px;
    fill: #006699;
    margin: auto 32px 18px auto;
    @media (min-width: 558px) {
        margin: auto 28px 0 auto;
    }
`
export const Signout = styled.div`
  color: #006699;
  text-shadow: 0 0 9px white;
  font-size: larger;
  margin: -20px 8px 0 0;
  &:hover {
    color: #004466;
    cursor: pointer;
  }
  @media (min-width: 558px) {
    margin: -14px 26px 0 0;
}
`
export const ExpenseBarContainer = styled.div`
    background-color:  #006699;
    border-radius: 12px;
    margin-top: 32px;
    margin-bottom: 36px;
    display: flex;
    overflow: auto;
    height: ${props => props.height ? '78vh' : '8vh'};
    transition: height 1s;
    flex-direction: column;
    padding-bottom: 18px;
    @media (min-width: 558px) {
        padding-bottom: 8px;
        height: 36vh;
    }
`
export const ExpenseBarLabel = styled.span`
    margin: -11px 21px -8px;
    color: white;
    @media (min-width: 558px) {
        margin: -11px 21px 8px;
    }
`
export const ExpenseBarLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ExpenseBarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (min-width: 558px) {
        display: flex;
        overflow: hidden;
    }
`
export const ExpenseBarContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ExpenseBarContainerHeadder = styled.span`
    margin: 28px auto 18px 22px;
    color: white;
    text-shadow: 0 0 3px #99ebff;
    font-size: 17px;
    @media (min-width: 558px) {
        font-size: 24px;
    }
`
export const DropdownIcon = styled(BackIcon)`
    width: 18px;
    height: 18px;
    fill: white;
    transform: ${props => props.isopen ? 'rotate(90deg)' : 'rotate(-90deg)'};
    transition: transform 0.8s;
    margin: 32px 24px 0 auto;
    @media (min-width: 558px) {
        width: 0;
        height: 0;
    }
`
export const ExpenseFormWrapper = styled.div`
    background-color: white;
    border-radius: 12px;
    box-shadow:0 0 17px -5px #006699;
    overflow: hidden;
    margin:${props => props.margin ? '24px auto 0 ' : '0 auto'};
    height: ${props => props.height ? '43vh' : '0vh'};
    transition-property: height, margin; 
    transition-duration: 1s; 
    @media (min-width: 558px) {
        margin:${props => props.margin ? '48px auto 24px' : '0 auto'};
    }
`
export const TestInput = styled.input`
  border: none;
  outline: none;
  margin: auto;
  width:100%;
`
export const InputCover = styled.div`
  border-bottom: 1px solid #bfbfbf;
  display:flex;
  flex-direction: column;
  width: 224px;
  margin: 16px 24px 16px;
  border-bottom: ${props => props.error ? '3px solid red' : null};
  @media (min-width: 558px) {
    width: 448px;
  }
  &:focus-within {
    border-bottom: 2px solid #99ebff;
  }
`
export const InputLabel = styled.span`
  color: #006699; 
  margin-bottom: 4px;
`
export const ButtonContainer = styled.div`
  display:flex;
  align-items:center;
`
export const FormButton = styled.button`
  margin: 27px auto 0;
  height:32px;
  border: none;
  width:144px;
  border-radius:20px;
  color: white;
  outline: none;
  box-shadow:0 0 9px #99ebff;
  background-color:#0099cc;
  &:hover {
    cursor: pointer;
    box-shadow:0 0 15px #99ebff;
  }
`
export const ExpenseDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  border-radius: 6px;
  box-shadow:0 0 12px -3px #006699;
  @media (min-width: 558px) {
    margin: 12px 28px;
  }
`
export const DateDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px;
  align-items: center;
  padding: 3px 6px;
  border-radius: 6px;
  background-color:#0099cc;
  @media (min-width: 558px) {
    margin: 6px 15px;
    padding: 3px 18px;
  }
`
export const DateDetailsText = styled.div`
  color: white;
  font-size: ${props => props.date ? '22px' : '16px'};
  line-height: 18px;
  margin: 1px;
`
export const DivFlexColumn = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
`
export const DateDetailsAmount = styled.div`
  color: white;
  background-color:#0099cc;
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  margin: 6px;
  @media (min-width: 558px) {
    margin: 6px 15px;
  }
`
export const ExpenseDetailsDescription = styled.div`
    color: #006699;
    font-size: 16px;
    margin: 0 12px;
    @media (min-width: 558px) {
        font-size:22px;
    }
`
export const ExpenseDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 400px;
    @media (min-width: 558px) {
        height: 300px;
    }
`
export const ExpenseFormTitle = styled.div`
    color: #002b80;
    margin: 12px auto 0px 16px;
    font-size: 18px;
`
export const ExpenseDetailsError = styled.div`
    margin: auto;
    font-size: x-large;
    color: red;
`