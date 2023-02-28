import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
    }
    body {
        height:100vh;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
