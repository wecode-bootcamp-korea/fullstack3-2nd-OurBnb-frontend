import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body{
    background: ${({ theme }) => theme.colors.body};
    color: 
    font-family: ;
    font-size: ;
    margin: 0;

  }
`;

export default GlobalStyle;
