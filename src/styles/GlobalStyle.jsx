import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #e3cfcf;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
