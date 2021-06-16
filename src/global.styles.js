import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    // background
    --theme-bg-primary: #F6F6F6;
    --theme-bg-secondary: #FFFFFF;
    --theme-bg-tertiary: #000000;

    // color set
    --theme-color-dark-rgb: 0, 0, 0;
    --theme-color-dark-900: rgba(var(--theme-color-dark-rgb), .9);
    --theme-color-dark-700: rgba(var(--theme-color-dark-rgb), .7);
    --theme-color-dark-500: rgba(var(--theme-color-dark-rgb), .5);
    --theme-color-dark-300: rgba(var(--theme-color-dark-rgb), .3);
    --theme-color-dark-200: rgba(var(--theme-color-dark-rgb), .2);
    --theme-color-dark-100: rgba(var(--theme-color-dark-rgb), .1);
    
    --theme-color-white: #FFFFFF;

    // box-shadow
    --theme-box-shadow-s: 0 4px 8px rgba(0, 0, 0, .08);
    --theme-box-shadow-h: 0 8px 16px rgba(0, 0, 0, .08), 0 0 36px rgba(0, 0, 0, .04);
    --theme-box-shadow-m: 0 4px 8px rgba(0, 0, 0, .08), 0 0 24px rgba(0, 0, 0, .04);
    --theme-box-shadow-l: 0 8px 16px rgba(0, 0, 0, .12), 0 0 36px rgba(0, 0, 0, .08);

    // font size
    --theme-font-size-base: 16px;
    --theme-font-size-xx-huge: 3rem;
    --theme-font-size-x-huge: 2.25rem;
    --theme-font-size-huge: 1.75rem;
    --theme-font-size-xx-large: 1.375rem;
    --theme-font-size-x-large: 1.25rem;
    --theme-font-size-large: 1.125rem;
    --theme-font-size-small: .875rem;
    --theme-font-size-x-small: .75rem;
    --theme-font-size-xx-small: .625rem;

    // border-radius
    --theme-border-radius-base: 6px;
    --theme-border-radius-small: 2px;
    --theme-border-radius-large: 10px;
    --theme-border-radius-x-large: 14px;

    // header
    --header-height: 50px;

    // container
    --container-padding-mobile: 0 1rem;
    --container-padding-tablet: 0 2rem;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    box-sizing: border-box;
    font-size: calc(--theme-font-size-base);
    font-family: 'Roboto', sans-serif;
    background: var(--theme-bg-primary);
    color: var(--theme-color-dark-900);
  }

  h1, h2, h3 {
    margin: 0;
  }

  h1 { font-size: var(--theme-font-size-xx-huge); }
  h2 { font-size: var(--theme-font-size-x-huge); }
  h3 { font-size: var(--theme-font-size-huge); }

  a {
    text-decoration: none;
    color: unset;
  }

  p {
    margin: 0;
  }

  input {
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--theme-color-dark-200);
    }
  }

  button {
    padding: 0;
  }
`;