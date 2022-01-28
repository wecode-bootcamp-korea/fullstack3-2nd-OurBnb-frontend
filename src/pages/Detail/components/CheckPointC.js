import React from 'react';
import styled from 'styled-components';

export default function CheckPointC({ LogoUrl, Desc }) {
	return (
		<ContentContainer>
			<ContentIcon>
				<img src={LogoUrl} alt="logoUrl" />
			</ContentIcon>
			<ContentText>{Desc}</ContentText>
		</ContentContainer>
	);
}

const ContentContainer = styled.div`
	display: flex;
	/* flex-direction: column; */
`;

// const Content = styled.div`
// 	display: flex;
// `;

const ContentIcon = styled.div`
	width: 20px;
	height: 20px;

	margin-right: 15px;
	margin-bottom: 40px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const ContentText = styled.div`
	font-size: 1rem;
`;
