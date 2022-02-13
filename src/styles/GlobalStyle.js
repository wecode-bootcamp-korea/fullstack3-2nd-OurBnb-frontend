import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    font-family: 'Outfit', Roboto, sans-serif;
    font-size: 10px;
    overflow-x: hidden;
  }
  a,
  a:visited{
    text-decoration: none;
    color:  ${({ theme }) => theme.foreground};
  }
  ol, ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;
