import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
    position: fixed; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
`;

const PageLoader = () => <ClipLoader size={ 35 } css={ override } />;

export default PageLoader;
