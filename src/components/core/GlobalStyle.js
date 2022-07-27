import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0px;
        background: ${({ theme }) => theme.color.black};
        color: ${({ theme }) => theme.color.white};
        font-family: 'Inter', sans-serif;
    }
    `;
