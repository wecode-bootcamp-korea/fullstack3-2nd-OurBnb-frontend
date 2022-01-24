import React from 'react';
import styled from 'styled-components';
import CheckPointC from './CheckPointC';

export default function CheckPoint({ ruleData, safetyData }) {
	return (
		<Wrapper>
			<Container>
				<CheckPointTitle>알아두어야 할 사항</CheckPointTitle>
				<ContentWrapper>
					<StyleDiv>
						<ContentName>숙소 이용규칙</ContentName>
						{ruleData &&
							ruleData.map((e, i) => {
								return <CheckPointC key={i} LogoUrl={e.rulesLogoUrl} Desc={e.rulesDesc} />;
							})}
					</StyleDiv>

					<StyleDiv>
						<ContentName>건강과 안전</ContentName>
						<ContentContainer>
							{safetyData &&
								safetyData.map((e, i) => {
									return <CheckPointC key={i} LogoUrl={e.safetyLogoUrl} Desc={e.safetyDesc} />;
								})}
						</ContentContainer>
					</StyleDiv>

					<StyleDiv>
						<ContentName>숙소 이용규칙</ContentName>
						<ContentContainer>
							<Content>
								<RefundText>
									{} 전까지 예약을 취소하면 숙박 요금의 50%를 환불받으실 수 있으며, 서비스 수수료는
									환불되지 않습니다.
								</RefundText>
							</Content>
						</ContentContainer>
					</StyleDiv>
				</ContentWrapper>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-top: 30px;
`;

const CheckPointTitle = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 30px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContentWrapper = styled.div`
	display: flex;
`;

const ContentName = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 20px;
`;

const StyleDiv = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	margin-right: 50px;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Content = styled.div`
	display: flex;
`;

const ContentIcon = styled.div`
	width: 20px;
	height: 20px;
	margin-right: 15px;
`;

const ContentText = styled.div`
	font-size: 1rem;
`;

const RefundText = styled.span`
	font-size: 1rem;
`;
