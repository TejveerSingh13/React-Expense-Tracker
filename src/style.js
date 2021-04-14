import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #282c34;
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
  border-bottom: 2px solid #282c34;
  margin:8px 8px 24px;
  outline:none;
  width: -webkit-fill-available;
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

export const Button = styled.button`
  margin: 24px auto 0;
  height:32px;
  width:144px;
  border-radius:20px;
`

export const HeaddingDiv = styled.p`
  align-self:flex-start;
  text-size:21px;
  font-weight: 500;
  @media (min-width: 558px) {
    margin-left:18px;
  }
`

export const Img = styled.img`
  height:24px;
  width:24px;
  margin: auto 4px 18px auto;
`
export const ModalHeadder = styled.div`
  display:flex;
  align-items:flex-end;  
  margin-bottom: 24px;
`