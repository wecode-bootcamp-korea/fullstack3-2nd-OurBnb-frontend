import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Router />
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
