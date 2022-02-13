import React from 'react';
import styled from 'styled-components';
import RoomPointC from './RoomPointC';

export default function RoomPoint({ benefitData }) {
	// console.log('benefitData', benefitData);

	return (
		<Wrapper>
			<PonintContainer>
				{benefitData &&
					benefitData.map(e => {
						return (
							<RoomPointC
								key={Math.random()}
								benefitLogoUrl={e.benefitLogoUrl}
								benefitTitle={e.benefitTitle}
								benefitDesc={e.benefitDesc}
							/>
						);
					})}
			</PonintContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border-bottom: 1px solid rgb(221, 221, 221);
`;

const PonintContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 25px;
`;

const BottomButton = styled.button`
	border: 0;
	outline: 0;
	background: 0;
	cursor: pointer;
	text-decoration: underline;
`;
