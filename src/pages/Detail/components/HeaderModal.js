import React from 'react';
import styled from 'styled-components';

export default function HeaderModal() {
	return (
		<Wrapper>
			<Container>
				<LeftContent>
					<Button>사진</Button>
					<Button>편의시설</Button>
					<Button>후기</Button>
					<Button>위치</Button>
				</LeftContent>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	height: 5rem;
	border: 1px solid black;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

const LeftContent = styled.ul`
	display: flex;
`;

const Button = styled.li`
	height: 100%;
	font-size: 1.2rem;
	text-align: center;
	margin-right: 20px;
	margin: 20px 15px 10px 0;
	cursor: pointer;

	&:hover {
		border-bottom: 5px solid black;
	}
`;
