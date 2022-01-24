import React from 'react';
import styled from 'styled-components';

export default function MapSection() {
	return (
		<Wrapper>
			<Container>
				<Label>호스팅 지역</Label>
				<Location></Location>
				<MapDiv></MapDiv>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Label = styled.h2`
  margin-bottom: 15px;
`;

const Location = styled.p`
	font-size: 0.9rem;
	color: #a9a9a9;
  margin-bottom: 30px;
`;

const Map
