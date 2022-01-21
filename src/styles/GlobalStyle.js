import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
