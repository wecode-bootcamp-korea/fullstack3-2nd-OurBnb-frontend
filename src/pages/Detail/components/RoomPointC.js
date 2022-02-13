import React from 'react';
import styled from 'styled-components';
export default function RoomPointC({ benefitTitle, benefitLogoUrl, benefitDesc }) {
	return (
		<ContentWrapper>
			<ContentIcon>
				<img src={benefitLogoUrl} alt="logourl" />
			</ContentIcon>
			<ContentContainer>
				<ContentTop>{benefitTitle}</ContentTop>
				<ContentBottom>{benefitDesc}</ContentBottom>
			</ContentContainer>
		</ContentWrapper>
	);
}
const ContentWrapper = styled.div`
	display: flex;
	margin-top: 15px;
	margin-bottom: 30px;
`;

const ContentIcon = styled.div`
	width: 30px;
	height: 30px;
	object-fit: cover;
	margin-right: 30px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContentTop = styled.span`
	font-size: 20px;
`;

const ContentBottom = styled.span`
	font-size: 12px;
	margin-top: 5px;
	color: #a9a9a9; ;
`;
