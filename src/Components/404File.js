import { Fragment } from "react";
import NotFound from "../icons/pixeltrue-error.png";
import { 
    ImageContainer,
    Img,
    Text
 } from "./style";

const PageNotFound = () => {
    return(
        <Fragment>
            <ImageContainer>
                <Img src={NotFound} alt='Page NOt Found' />
                <Text>Can't find what you are looking for 🙇‍♀️🙇‍♂️</Text>
            </ImageContainer>
        </Fragment>
    )
}
export default PageNotFound