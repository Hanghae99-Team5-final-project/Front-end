import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        display: inline-block;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        font-family: "Nanum Gothic", sans-serif;
    }

    html, body {
        font-size: 10px;
        font-weight: 400;
        overflow-x : hidden;
        font-family: "Nanum Gothic", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    body {
        font-size: 1.4rem;
        background-color: #fff;
        color: #000;
        line-height: 2rem;
    }

    button {
        border: 1px solid #000;
    }

    span, label {
        display: block;
    }
`;

export default GlobalStyles;
