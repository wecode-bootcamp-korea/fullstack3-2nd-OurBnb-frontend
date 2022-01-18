import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {};

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Router />
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
