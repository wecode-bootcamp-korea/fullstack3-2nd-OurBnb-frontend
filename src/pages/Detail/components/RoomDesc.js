import React from 'react';
import styled from 'styled-components';

export default function RoomDesc({ mainInfoData }) {
	const descString = mainInfoData.roomDesc;

	return (
		<Wrapper>
			<Container>
				<Description>{descString}</Description>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border-bottom: 1px solid rgb(221, 221, 221);
`;

const Container = styled.div`
	margin-top: 30px;
	margin-bottom: 30px;
`;

const Description = styled.div`
	width: 100%;
	font-size: 1.2rem;
	word-break: keep-all;
`;
