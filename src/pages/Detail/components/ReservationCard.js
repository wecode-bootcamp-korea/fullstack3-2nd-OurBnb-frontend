import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillFlag } from 'react-icons/ai';
// import 'react-day-picker';

export default function ReservationCard() {
	const renderDay = day => {
		const date = day.getDate();

		return (
			<div className="customCell">
				<div className="customDate">{date}</div>
			</div>
		);
	};
	return (
		<Wrapper>
			<Frame>
				<CardContainer></CardContainer>
			</Frame>
			<Declare>
				<DeclareIcon>
					<AiFillFlag />
				</DeclareIcon>
				<DeclareName>숙소 신고하기</DeclareName>
			</Declare>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 80%;
	height: 55%;
	top: 10px;
	position: sticky;
	float: right;
`;

const Frame = styled.div`
	display: flex;
	flex-direction: column;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
	border: 1px solid rgb(221, 221, 221);
	border-radius: 15px 15px 15px 15px;
`;

const CardContainer = styled.div`
	width: auto;
	height: 500px;
	display: flex;
	flex-direction: column;
`;

// const DayPickerInput = styled.div``;

const Declare = styled.div`
	width: 40%;
	display: flex;
	margin-top: 50px;
	margin: 0 auto;
	border: 1px solid black;
`;

const DeclareIcon = styled.div`
	width: 20px;
	height: 20px;
	font-size: 20px;
	margin-right: 20px;
`;

const DeclareName = styled.span`
	font-size: 15px;
	color: gray;
	text-decoration: underline;
`;
