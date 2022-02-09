import React from 'react';
import styled from 'styled-components';

export default function RoomOptionC({ optionName, optionLogoUrl }) {
	return (
		<OptionWrapper key={Math.random()}>
			<OptionIcon>
				<img src={optionLogoUrl} alt="logoUrl" />
			</OptionIcon>
			<OptionName>{optionName}</OptionName>
		</OptionWrapper>
	);
}

const OptionWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
`;

const OptionIcon = styled.div`
	width: 30px;
	height: 30px;
	font-size: 15px;
	margin-right: 30px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const OptionName = styled.span`
	font-size: 15px;
`;
