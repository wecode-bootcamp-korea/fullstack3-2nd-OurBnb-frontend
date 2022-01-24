import React from 'react';
import styled from 'styled-components';
import { MdOutlineCleanHands } from 'react-icons/md';
import { AiOutlineWifi, AiOutlineStar } from 'react-icons/ai';

export default function RoomPoint() {
	return (
		<Wrapper>
			<PonintContainer>
				<ContentWrapper>
					<ContentIcon>
						<MdOutlineCleanHands />
					</ContentIcon>
					<ContentContainer>
						<ContentTop>청결강화</ContentTop>
						<ContentBottom>
							에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한 호스트입니다.
							<BottomButton>더 보기</BottomButton>
						</ContentBottom>
					</ContentContainer>
				</ContentWrapper>

				<ContentWrapper>
					<ContentIcon>
						<AiOutlineWifi />
					</ContentIcon>
					<ContentContainer>
						<ContentTop>일상 생활을 위한 편의시설</ContentTop>
						<ContentBottom>
							주방, 무선인터넷, 세탁기, 에어컨을(를) 갖춰 장기 숙박에 적합한 숙소입니다.
						</ContentBottom>
					</ContentContainer>
				</ContentWrapper>

				<ContentWrapper>
					<ContentIcon>
						<AiOutlineStar />
					</ContentIcon>
					<ContentContainer>
						<ContentTop>장기 숙박에 적합한 숙소입니다.</ContentTop>
						<ContentBottom>
							한 달 이상 숙박한 게스트의 100%가 이 숙소를 별점 5점으로 평가했습니다.
						</ContentBottom>
					</ContentContainer>
				</ContentWrapper>
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

const ContentWrapper = styled.div`
	display: flex;
	margin-top: 15px;
	margin-bottom: 30px;
`;

const ContentIcon = styled.div`
	width: 30px;
	height: 30px;
	font-size: 30px;
	margin-right: 15px;
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

const BottomButton = styled.button`
	border: 0;
	outline: 0;
	background: 0;
	cursor: pointer;
	text-decoration: underline;
`;
