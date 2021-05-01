import styled from 'styled-components'

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Img = styled.img`
  height:300px;
  width:400px;
  margin: auto ;
  @media (min-width: 558px) {
    height:600px;
    width:800px;  
  }
`
export const Text = styled.p`
color: #0099cc;
text-shadow: 0 0 9px #99ebff;
margin: 24px auto;
font-size: larger;
@media (min-width: 558px) {
    font-size: xx-large; 
  }
`