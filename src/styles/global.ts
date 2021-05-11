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

  :root {
   --white: #fff;
   --black: #000;
   --gray: hsl(0, 0%, 55%);
   --dark-gray: hsl(0, 0%, 41%); 
  }
`;

export default GlobalStyles;
