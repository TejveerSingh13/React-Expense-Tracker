import { Fragment } from "react";
import UnderImg from "../icons/underCon.jpg";
import { 
    ImageContainer,
    Img,
    Text
 } from "./style";

const UnderConstruction = () => {
    return(
        <Fragment>
            <ImageContainer>
                <Img src={UnderImg} alt='Under Construction' />
                <Text>Sorry! We are under Construction 🙇‍♂️🙇‍♀️</Text>
            </ImageContainer>
        </Fragment>
    )
}
export default UnderConstruction