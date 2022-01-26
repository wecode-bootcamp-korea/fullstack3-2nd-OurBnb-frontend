import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillFlag } from 'react-icons/ai';
// import 'react-day-picker';
import { AiFillFlag, AiOutlineDown } from 'react-icons/ai';
import { TiStar } from 'react-icons/ti';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

export default function ReservationCard() {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<Wrapper>
			<Frame>
				<CardContainer>
					<Price>
						<PriceTitle>₩ {} / 박</PriceTitle>
						<SubPrice>
							<TiStar className="star" />
							<Sub>별점</Sub>
							<Sub> ∙ </Sub>
							<Sub>후기{}개</Sub>
						</SubPrice>
					</Price>
					<ChoiceDate>
						<DateTop>
							<CheckIn>
								<CheckInLabel>체크인</CheckInLabel>
								<TextField>텍스트</TextField>
							</CheckIn>
							<CheckOut>
								<CheckInLabel>체크아웃</CheckInLabel>
								<TextField>텍스트</TextField>
							</CheckOut>
						</DateTop>
						<People>
							<PeopleLeft>
								<PeopleLabel>인원</PeopleLabel>
								<TextField>텍스트</TextField>
							</PeopleLeft>
							<PeopleRigth>
								<PeopleIcon>
									<AiOutlineDown className="downArrow" />
								</PeopleIcon>
							</PeopleRigth>
						</People>
					</ChoiceDate>
					<ReservationButton>
						<ButtonText>예약하기</ButtonText>
					</ReservationButton>
					<NoticeText>예약 확정 전에는 요금이 청구되지 않습니다.</NoticeText>
					<Fee>
						<FeeWrapper>
							<FeeLeft>숙소</FeeLeft>
							<FeeRight>₩</FeeRight>
						</FeeWrapper>
						<FeeWrapper>
							<FeeLeft>서비스 수수료</FeeLeft>
							<FeeRight>₩</FeeRight>
						</FeeWrapper>
						<FeeWrapper>
							<FeeLeft>숙박세와 수수요</FeeLeft>
							<FeeRight>₩</FeeRight>
						</FeeWrapper>
					</Fee>
					<TotalFee>
						<TotalLeft>총 합계</TotalLeft>
						<TotalRight>₩</TotalRight>
					</TotalFee>
				</CardContainer>
			</Frame>
			<Declare>
				<DeclareIcon>
					<AiFillFlag className="flag" />
				</DeclareIcon>
				<DeclareName>숙소 신고하기</DeclareName>
			</Declare>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 80%;
	top: 130px;
	display: flex;
	flex-direction: column;
	position: sticky;
	margin-bottom: 35px;
	float: right;
`;

const Frame = styled.div`
	/* width: 80; */
	display: flex;
	flex-direction: column;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
	border: 1px solid rgb(221, 221, 221);
	border-radius: 15px 15px 15px 15px;
`;

const CardContainer = styled.div`
	width: 80%;
	display: flex;
	margin: 0 auto;
	flex-direction: column;
`;

// const DayPickerInput = styled.div``;

const Declare = styled.div`
	width: 40%;
	display: flex;
	margin: 0 auto;
	background-color: blue;
	border: 1px solid black;
`;

const DeclareIcon = styled.div`
	width: 20px;
	height: 20px;
	font-size: 20px;
	margin-right: 20px;
	.falg {
		color: gray;
	}
`;

const DeclareName = styled.span`
	font-size: 15px;
	color: gray;
	text-decoration: underline;
`;

const Price = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	border: 1px solid green;
`;

const PriceTitle = styled.h3`
	font-size: 1.3rem;
`;

const SubPrice = styled.ul`
	display: flex;
	.star {
		color: red;
		font-size: 1rem;
	}
`;

const Sub = styled.li`
	:nth-child(2) {
		font-size: 0.8rem;
	}
	:nth-child(3) {
		font-size: 1rem;
		line-height: 1em;
	}
	:nth-child(4) {
		font-size: 0.8rem;
	}
`;

const ChoiceDate = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

const DateTop = styled.div`
	display: flex;
`;

const CheckIn = styled.div`
	width: 100%;
	border: 1px solid black;
	border-top-left-radius: 10px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
`;

const CheckOut = styled.div`
	width: 100%;
	border: 1px solid black;
	border-left: none;
	border-top-right-radius: 10px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
`;

const CheckInLabel = styled.div`
	font-size: 10px;
	font-weight: 600;
	color: #000000;
	padding: 5px 0 5px 5px;
	margin-bottom: 3px;
`;

const TextField = styled.div`
	padding: 5px 0 5px 5px;
`;

const People = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	border: 1px solid black;
	cursor: pointer;
	border-top: none;
	border-radius: 0 0 10px 10px;
`;

const PeopleLeft = styled.div`
	display: flex;
	flex-direction: column;
`;

const PeopleRigth = styled.div`
	width: 10%;
`;

const PeopleLabel = styled.div`
	font-size: 10px;
	font-weight: 600;
	color: #000000;
	padding: 5px 0 5px 5px;
	margin-bottom: 3px;
`;

const PeopleIcon = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 10px;
	.downArrow {
		font-size: 25px;
	}
`;

const ReservationButton = styled.button`
	width: 100%;
	height: 50px;
	margin-top: 20px;
	border: 0;
	border-radius: 10px 10px 10px 10px;
	outline: 0;
	background-color: #ff385c;
`;

const ButtonText = styled.span`
	font-size: 1rem;
	color: white;
`;

const NoticeText = styled.div`
	font-size: 0.8rem;
	margin: 0 auto;
	margin-top: 20px;
`;

const Fee = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 15px;
	border-bottom: 1px solid rgb(221, 221, 221); ;
`;

const FeeWrapper = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 10px;
	justify-content: space-between;
`;

const FeeLeft = styled.div`
	font-size: 1rem;
	text-decoration: underline;
`;

const FeeRight = styled.div`
	font-size: 1rem;
	text-decoration: underline;
`;

const TotalFee = styled.div`
	width: 100%;
	display: flex;
	margin-top: 15px;
	justify-content: space-between;
`;

const TotalLeft = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`;

const TotalRight = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`;
