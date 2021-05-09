import { Fragment } from "react";
import { useHistory } from "react-router";
import NotFound from "../icons/pixeltrue-error.png";
import { 
    ImageContainer,
    Img,
    Text,
    FormButtonUpdate
 } from "./style";

const PageNotFound = () => {

    const history = useHistory()
    const HomePushHandler = () => {
        history.push('/')
    }

    return(
        <Fragment>
            <ImageContainer>
                <Img src={NotFound} alt='Page NOt Found' />
                <Text>Can't find what you are looking for 🙇‍♀️🙇‍♂️</Text>
                <FormButtonUpdate onClick={HomePushHandler}>Go to Homepage</FormButtonUpdate>
            </ImageContainer>
        </Fragment>
    )
}
export default PageNotFound