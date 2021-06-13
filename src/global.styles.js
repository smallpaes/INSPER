import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }
`;