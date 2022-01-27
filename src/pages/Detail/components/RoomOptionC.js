import React from 'react';
import styled from 'styled-components';

export default function RoomOptionC({ key, optionName, optionLogoUrl }) {
	return (
		<OptionWrapper key={key}>
			<Content>
				<OptionIcon>
					<img src={optionLogoUrl} alt="logoUrl" />
				</OptionIcon>
				<OptionName>{optionName}</OptionName>
			</Content>
		</OptionWrapper>
	);
}

const OptionWrapper = styled.div`
	/* display: grid; */
	margin-top: 20px;
`;

const Content = styled.div`
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
