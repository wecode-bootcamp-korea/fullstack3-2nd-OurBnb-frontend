import React, { useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';
import DetailPic from './components/DetailPic';
import DetailTitle from './components/DetailTitle';
// import HostTitle from './components/HostTitle';
import ReservationCard from './components/ReservationCard';
import RoomDesc from './components/RoomDesc';
import RoomOption from './components/RoomOption';
import RoomPoint from './components/RoomPoint';
import Header from '../../components/Header/Header';
import Footer from '../../components//Footer';
import { GET_DETAIL_API } from '../../config';
import { GET_REVIEW_API } from '../../config';
import CheckPoint from './components/CheckPoint';

export default function Detail() {
	const [mainInfoData, setMainInfoData] = useState({});
	const [reviewData, setReviewData] = useState({});
	const [optionData, setOptionData] = useState([]);
	const [benefitData, setBenefitData] = useState([]);
	const [ruleData, setRuleData] = useState([]);
	const [safetyData, setSafetyData] = useState([]);

	const parsedQuery = queryString.parse(window.location.search);
	const roomId = parsedQuery.roomId;

	useEffect(() => {
		const getRoomData = async () => {
			const response = await fetch(`${GET_DETAIL_API}?roomId=${roomId}`);
			const data = await response.json();
			setMainInfoData(data.detail.mainInfo);
			setOptionData(data.detail.option);
			setBenefitData(data.detail.benefit);
			setRuleData(data.detail.rule);
			setSafetyData(data.detail.safety);
		};
		getRoomData();
	}, [roomId]);

	useEffect(() => {
		const getReviewData = async () => {
			const response = await fetch(`${GET_REVIEW_API}?roomId=${roomId}`);
			const data = await response.json();
			setReviewData(data.reviewInfo);
		};
		getReviewData();
	}, []);

	return (
		<Wrapper>
			<Header />
			<InnerWrapper>
				<DetailTitle
					mainInfoData={mainInfoData}
					reviewAvgData={reviewData.roomAvgRate}
					reviewCountData={reviewData.roomReviewCount}
				/>
				<DetailPic mainInfoData={mainInfoData} />
				<DetailInfo>
					<RoomInfo>
						{/* <HostTitle hostData={mainInfoData}/> */}
						<RoomPoint benefitData={benefitData} />
						<RoomDesc mainInfoData={mainInfoData} />
						<RoomOption optionData={optionData} />
					</RoomInfo>
					<Reservation>
						<ReservationCard
							reviewAvgData={reviewData.roomAvgRate}
							reviewCountData={reviewData.roomReviewCount}
						/>
					</Reservation>
				</DetailInfo>
				<CheckPoint ruleData={ruleData} safetyData={safetyData} />
			</InnerWrapper>
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
`;

const InnerWrapper = styled.div`
	width: 85%;
	max-width: 1600px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

const DetailInfo = styled.div`
	display: flex;
	margin-top: 50px;
`;

const RoomInfo = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
`;

const Reservation = styled.div`
	position: relative;
	width: 40%;
`;
