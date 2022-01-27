import React from 'react';
import styled from 'styled-components';

export default function RoomDesc({ mainInfoData }) {
	const descString = mainInfoData.roomDesc;
	// const modifiedDesc = descString.replaceAll('/n', '');
	// const descArray = descString.replace(',');
	console.log(typeof descString);
	// console.log(modifiedDesc);
	// console.log(descArray);

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

// const DescSpan = styled.span`
// 	font-size: 2rem;
// 	font-weight: bold;
// `;

// const DescButton = styled.div`
// 	display: flex;
// 	width: 80px;
// 	cursor: pointer;
// `;

// const More = styled.span`
// 	font-size: 15px;
// 	font-weight: 600;
// 	text-decoration: underline;
// `;

// const MoreIcon = styled.div`
// 	font-size: 16px;
// 	font-weight: bold;
// 	padding-top: 1px;
// `;
