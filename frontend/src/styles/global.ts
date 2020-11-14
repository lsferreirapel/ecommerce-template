import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* Default colors */
  :root {
    --color-primary: #C35074;
    --color-primary-medium: #CC757A;
    --color-primary-light: #DA9B9E;
    --color-primary-lighter: #E5E1D4;

    --color-gray-dark: #444242;
    --color-gray-medium: #5B5B5F;
    --color-gray-light: #BDBDBD;
    --color-gray-lighter: #F7F7F7;
  }

  /* CSS RESET */
  *, ul, li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--color-gray-light);
    opacity: 1; /* Firefox */
  }
  button, input {
    background: none;
    border: none;
  }
  li, ul {
    list-style: none;
  }

  /* Default font style */
  body, input, button, a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400; /* Regular */
    color: var(--color-gray-dark);
    text-decoration: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
