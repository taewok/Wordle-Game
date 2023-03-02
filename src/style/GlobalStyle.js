import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'BMJUA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    * {
        margin:0;
        padding:0;
    }
    body {
        display: flex;
        justify-content: center;
        height:100vh;
        background-color: #E8F3D6;
        font-family: "BMJUA";
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
