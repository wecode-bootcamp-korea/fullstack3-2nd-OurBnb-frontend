import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainBanner = () => {
	return (
		<BannerWrapper>
			<MainImage>
				<BannerImage src="../../images/banner.png" alt="banner" />
				<MainMent>
					<Recommend>아워비앤비가</Recommend>
					<Recommend>여행지를 찾아드릴게요!</Recommend>
					<MainButton>
						<FlexOption>
							<Link to="/제주/room">
								<FlexSearch>유연한 검색</FlexSearch>
							</Link>
						</FlexOption>
					</MainButton>
				</MainMent>
			</MainImage>
		</BannerWrapper>
	);
};

export default MainBanner;

const BannerWrapper = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: 0 auto;
`;

// styled-components
const MainImage = styled.div`
	margin: -770px 0 0 7%;
	z-index: 99;
`;

const BannerImage = styled.img`
	width: 93%;
	height: 650px;
	border-radius: 20px;
	z-index: 99;
`;

const MainMent = styled.div`
	display: flex;
	flex-direction: column;
`;

const Recommend = styled.h1`
	margin: -400px 0 400px 500px;
	text-align: center;
	color: #ffffff;
	font-size: 45px;
	z-index: 100;
`;

const MainButton = styled.span`
	margin: -380px 0 300px 64%;
`;

const FlexOption = styled.button`
	padding: 14px 32px;
	border: none;
	border-radius: 30px;
	font-size: 17px;
	font-weight: 700;
	cursor: pointer;
`;

const FlexSearch = styled.span`
	background: linear-gradient(90deg, #6f019c 0%, #c6017e 135.12%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
