import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import MainBanner from './components/MainBanner';
import TripIdea from './components/TripIdea';
import Activity from './components/Activity';
import { mainTheme } from '../../styles/theme';

const Main = () => {
	const isMain = true;

	return (
		<MainWrapper>
			<MainTop>
				<CovidInfo>에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</CovidInfo>
				<ThemeProvider theme={mainTheme}>
					<Header isMain={isMain} />
				</ThemeProvider>
			</MainTop>
			<MainBanner />
			<TripIdea />
			<Activity />
			<Footer />
		</MainWrapper>
	);
};

export default Main;

// styled-components
const MainWrapper = styled.div`
	width: 100%;
`;

const MainTop = styled.div`
	background-color: black;
	height: 1000px;
`;

const CovidInfo = styled.div`
	padding-top: 15px;
	color: #ffffff;
	font-size: 14px;
	font-weight: 600;
	text-align: center;
	text-decoration: underline;
	cursor: pointer;
`;
