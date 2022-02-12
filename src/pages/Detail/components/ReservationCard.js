import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiFillFlag, AiOutlineDown } from 'react-icons/ai';
import { TiStar } from 'react-icons/ti';

import { POST_RESERVATION_API } from '../../../config';
import Calendar from '../../../components/Calendar';

export default function ReservationCard({
	mainInfoData,
	priceData,
	reviewAvgData,
	reviewCountData,
	capacityData,
}) {
	const { roomId, guestCapacity } = mainInfoData;
	const price = Number(priceData).toLocaleString();
	const rate = Number(reviewAvgData).toFixed(1);

	const idValue = sessionStorage.getItem('access_token');

	//예약에 필요한 항목 값 관리
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState(null);
	const [checkInDate, setCheckInDate] = useState();
	const [checkOutDate, setCheckOutDate] = useState();
	const [dateInterval, setDateInterval] = useState(0);
	const [serviceFee, setServiceFee] = useState(0);
	const [taxFee, setTaxFee] = useState(0);
	const [totalFee, setTotalFee] = useState(0);
	const [dayPrice, setDayPrice] = useState(0);

	const setTravelDates = dates => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
		setDateInterval(getDateInterval(start, end));
		if (startDate) {
			setCheckInDate(`${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`);
		}
		if (endDate) {
			setCheckOutDate(`${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`);
		}
	};

	const getDateInterval = (startDate, timeEnd) => {
		const newStartDate = new Date(startDate);
		const newEndDate = new Date(timeEnd);
		const one_day = 1000 * 60 * 60 * 24;
		let result = Math.ceil((newEndDate.getTime() - newStartDate.getTime()) / one_day);
		return result;
	};

	const [isCalOpen, setCalOpen] = useState(false);

	const handleClick = e => {
		e.preventDefault();
		setCalOpen(!isCalOpen);
	};

	const closeCalendar = () => {
		setCalOpen(false);
	};

	const reservationClick = e => {
		e.preventDefault();
		if (!idValue) {
			return alert('로그인 먼저 해주세요~');
		} else if (idValue && (!checkInDate || !checkOutDate)) {
			return alert('예약 하실 날짜를 입력해주세요!');
		} else if (idValue && checkInDate && checkOutDate) {
			alert('예약하시겠습니까?');
			postReservation();
		}
	};

	useEffect(() => {
		const calculatedFee = Number(priceData * dateInterval.toLocaleString());

		setDayPrice(calculatedFee);
		setServiceFee(calculatedFee * 0.15);
		setTaxFee(calculatedFee * 0.15);
		setTotalFee(
			Number(calculatedFee + calculatedFee * 0.15 + calculatedFee * 0.015).toLocaleString(),
		);
	}, [priceData, dateInterval]);

	const postReservation = async () => {
		const response = await fetch(
			`${POST_RESERVATION_API}?roomId=${roomId}&guestCount=${guestCapacity}&checkIn=${checkInDate}&checkOut=${checkOutDate}`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Authorization: idValue },
			},
		);
		if (response.status === 200) {
			alert('예약이 완료되었습니다.');
		} else if (response.status === 400) {
			alert('이방 하태하태~ 벌써 예약되써엉');
		} else {
			alert('예약에 완료되지 않았습니다. 다시 시도해주세요.');
		}
	};

	return (
		<Wrapper>
			<Frame>
				<CardContainer>
					<Price>
						<PriceWrapper>
							<PriceTitle>₩ {price} </PriceTitle>
							<OneDay>/ 박</OneDay>
						</PriceWrapper>
						<SubPrice>
							<TiStar className="star" />
							<Sub>{rate}</Sub>
							<Sub> ∙ </Sub>
							<Sub>후기{reviewCountData}개</Sub>
						</SubPrice>
					</Price>
					<ChoiceDate>
						<DateTop>
							<CheckIn onClick={handleClick}>
								<CheckInLabel>체크인</CheckInLabel>
								<TextField>
									{startDate
										? `${startDate.getMonth() + 1}월 ${startDate.getDate()}일 `
										: '날짜 입력'}
								</TextField>
							</CheckIn>
							<CheckOut onClick={handleClick}>
								<CheckInLabel>체크아웃</CheckInLabel>
								<TextField>
									{endDate ? `${endDate.getMonth() + 1}월 ${endDate.getDate()}일 ` : '날짜 입력'}
								</TextField>
							</CheckOut>
						</DateTop>
						<div>
							<Calendar
								startDate={startDate}
								endDate={endDate}
								onChange={setTravelDates}
								isOpen={isCalOpen}
								closeCalendar={closeCalendar}
							/>
						</div>
						<People>
							<PeopleLeft>
								<PeopleLabel>인원</PeopleLabel>
								<TextField>{capacityData} 명</TextField>
							</PeopleLeft>
							<PeopleRigth>
								<PeopleIcon>
									<AiOutlineDown className="downArrow" />
								</PeopleIcon>
							</PeopleRigth>
						</People>
					</ChoiceDate>
					<ReservationButton>
						<ButtonText onClick={reservationClick}>예약하기</ButtonText>
					</ReservationButton>
					<NoticeText>예약 확정 전에는 요금이 청구되지 않습니다.</NoticeText>
					<Fee>
						<FeeWrapper>
							<FeeLeft>숙소</FeeLeft>
							<FeeRight>₩ {dayPrice}</FeeRight>
						</FeeWrapper>
						<FeeWrapper>
							<FeeLeft>서비스 수수료</FeeLeft>
							<FeeRight>₩ {serviceFee}</FeeRight>
						</FeeWrapper>
						<FeeWrapper>
							<FeeLeft>숙박세와 수수료</FeeLeft>
							<FeeRight>₩ {taxFee}</FeeRight>
						</FeeWrapper>
					</Fee>
					<TotalFee>
						<TotalLeft>총 합계</TotalLeft>
						<TotalRight>₩ {totalFee}</TotalRight>
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

const FlexDiv = styled.div`
	display: flex;
`;

const Frame = styled(FlexDiv)`
	flex-direction: column;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
	border: 1px solid rgb(221, 221, 221);
	border-radius: 15px 15px 15px 15px;
`;

const CardContainer = styled(FlexDiv)`
	width: 80%;
	margin: 0 auto;
	flex-direction: column;
`;

const Declare = styled(FlexDiv)`
	width: 170px;
	margin: 0 auto;
	cursor: pointer;
	margin-top: 20px;
`;

const DeclareIcon = styled.div`
	width: 20px;
	height: 20px;
	font-size: 20px;
	margin-right: 20px;
	.flag {
		color: gray;
	}
`;

const DeclareName = styled.span`
	font-size: 15px;
	color: gray;
	text-decoration: underline;
`;

const Price = styled(FlexDiv)`
	justify-content: space-between;
	margin-top: 20px;
`;

const PriceWrapper = styled(FlexDiv)`
	align-items: center;
`;

const OneDay = styled.span`
	font-size: 0.7rem;
	margin-left: 5px;
	color: gray;
`;

const PriceTitle = styled.h3`
	font-size: 1rem;
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

const ChoiceDate = styled(FlexDiv)`
	flex-direction: column;
	margin-top: 20px;
`;

const DateTop = styled(FlexDiv)``;

const CheckIn = styled.div`
	width: 100%;
	border: 1px solid black;
	border-top-left-radius: 10px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
`;

const CheckOut = styled(FlexDiv)`
	width: 100%;
	border: 1px solid black;
	border-left: none;
	border-top-right-radius: 10px;
	cursor: pointer;
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
	position: relative;
	padding-top: 10px;
	.downArrow {
		font-size: 20px;
	}
`;

const ReservationButton = styled.button`
	width: 100%;
	height: 50px;
	margin-top: 20px;
	border: 0;
	border-radius: 10px 10px 10px 10px;
	outline: 0;
	cursor: pointer;
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
	font-size: 1.2rem;
	font-weight: bold;
`;

const TotalRight = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 20px;
`;
