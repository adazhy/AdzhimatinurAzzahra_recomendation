import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;0,600;0,700;1,400&display=swap');

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    font-family: 'Roboto', sans-serif;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export default GlobalStyle;