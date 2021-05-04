// import { Fragment } from "react";
import {
    LoadindContainer,
    LoaderBackground, 
    LoaderImg
 } from "./style"

const Loader = () => {
    return(
    <LoadindContainer>
        <LoaderBackground>
            <LoaderImg />
        </LoaderBackground>
    </LoadindContainer>
    )
}
export default Loader