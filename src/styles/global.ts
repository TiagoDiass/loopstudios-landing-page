import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  :root {
   --white: #fff;
   --black: #000;
   --gray: hsl(0, 0%, 55%);
   --dark-gray: hsl(0, 0%, 41%); 
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    font-family: 'Josefin Sans', sans-serif;
  }

  body {
    font-family: 'Alata', sans-serif;
  }
`;

export default GlobalStyles;
