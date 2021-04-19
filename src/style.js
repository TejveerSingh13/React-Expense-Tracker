import styled, { keyframes } from 'styled-components'
import DetailBgImg from "../src/icons/BlueBg.jpeg";

export const MainContainer = styled.div`
  background-color: #e6faff;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width:100%;
height:100%;
z-index:1;
backdrop-filter: blur(5px);
`
export const FormContainer = styled.div`
  margin: 20px auto;
  border: solid;
  z-index:2;
  padding:8px 16px 24px;
  border-radius:20px;
  background-color: white;
  max-width:300px;
  @media (min-width: 558px) {
    max-width:400px;
    margin-top:80px;
  }
`
export const Input = styled.input`
  border:none;
  border-bottom: 2px solid #bfbfbf;
  margin:8px 8px 24px;
  outline:none;
  width: -webkit-fill-available;
  &:focus {
    border-bottom: 2px solid #99ebff; 
  }
`
export const LabelInput = styled.p`
  margin:0 0 0 8px;
  font-weight:500;
`
export const LabelInputError = styled.p`
  margin:-24px 0 16px 8px;
  font-weight:500;
  font-size: 12px;
  color:red;
`
export const ButtonContainer = styled.div`
  display:flex;
  align-items:center;
`
export const HeaddingDiv = styled.p`
  align-self:flex-start;
  font-size: x-large;
  font-weight: 500;
  color: #0099cc;
  text-shadow: 0 0 9px #99ebff;
  @media (min-width: 558px) {
    margin-left:18px;
  }
`
export const Img = styled.img`
  height:16px;
  width:16px;
  margin: auto 18px 61px auto;
`
export const ModalHeadder = styled.div`
  display:flex;
  align-items:flex-end;  
  margin-bottom: 0;
`
export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SuccessImg = styled.img`
  height: 48px;
  width: 48px;
  margin: 24px auto 18px;
`
export const DialogHeadder = styled.div`
  align-self: center;
  text-size:30px;
  font-weight: 500;
  color: green;
`
export const ButtonText = styled.span`
  font-size: large;
`
export const TestInput = styled.input`
  border: none;
  outline: none;
  margin-left:8px;
  width:85%;
`
export const InputImg = styled.img`
  height: 18px;
  width: 18px;
  margin: 4px;
`
export const InputCover = styled.div`
  border-bottom: 1px solid #bfbfbf;
  display:flex;
  width: 280px;
  margin: 8px auto 21px;
  &:focus-within {
    border-bottom: 2px solid #99ebff;
  }
`
export const LoginModalHeadder = styled.div`
  display:flex;
  flex-direction: column;
`
export const MainHeadL = styled.h1`
  margin: 96px auto 16px 10px;
  color: #0099cc;
  text-shadow: 0 0 9px #99ebff;
  @media (min-width: 558px) {
    margin: 96px auto 16px 60px;
  }
`
export const SubHeadL = styled.h4`
  margin: 8px auto 26px 10px;
  color: #404040;
  @media (min-width: 558px) {
    margin: 8px auto 26px 60px;
  }
`
export const LoginButton = styled.button`
  margin: 27px auto 0;
  height:32px;
  border: none;
  width:144px;
  border-radius:20px;
  color: white;
  box-shadow:0 0 9px #99ebff;
  background-color:#0099cc;
  &:hover {
    cursor: pointer;
  }
`
export const LinkText = styled.span`
  color:#0099cc;
  text-shadow: 0 0 9px #99ebff;
  &:hover {
    cursor: pointer;
  }
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`
export const LoginErrorContainer = styled.div`
  position: fixed;
  margin: 24px 0 0 60px;
  padding: 4px 8px;
  border: 1px solid #0099cc;
  background-color: #e6faff;
  border-radius: 12px;
  visibility: ${props => props.out ? 'visible' : 'hidden'};
  animation: ${props => props.out ? fadeIn : fadeOut} 0.3s linear;
  transition: visibility 0.3s linear;
  @media (min-width: 558px) {
    margin: 24px 0 0 109px;
  }
`
export const LoginErrorLabel = styled.label`
  color:red;
`
export const LoginErrorImg = styled.img`
  height: 9px;
  width: 9px;
  margin: 0 4px 2px 16px;
`
export const DisplayWrapper = styled.div`
  width: 100%;
  font-weight:500;
  background: url(${DetailBgImg});
  padding-top:200px;
  padding-bottom:40px;
  background-attachment: fixed;
  background-position: 100% 91%;
  background-repeat: no-repeat;
  @media (min-width: 558px) {
    box-shadow:0 0 24px #00ccff;
  }
`
export const DisplayNameWrapper = styled.div`
  margin 20px 24px 0;
  color:white;  
  text-shadow: 0 0 3px #99ebff;
  @media (min-width: 558px) {
    margin: 20px 0 0 69px;
  }
`
export const DisplayNameHeadder = styled.p`
  margin-bottom:0;
  margin-top:8px;
  color: ${props => props.title ? '#0099cc' : null};
  font-size: ${props => props.data? 'large' : null};
  font-weight: ${props => props.data? '500' : null};
  margin-top: ${props => props.data? '4px' : null}
` 
export const DisplayDataContainer = styled.div`
  margin: 24px 16px 8px;
  @media (min-width: 558px) {
    margin:24px auto;
    width:45%;
    padding: 24px 64px;
    border-radius: 12px;
    box-shadow:0 0 10px #99ebff;
  }
`
export const BackIcon = styled.img`
  height:24px;
  width:24px;
  position: fixed;
  margin: -181px 1px 0px 18px;
`