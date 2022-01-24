import React, { useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import queryString from 'query-string';
import styled from 'styled-components';
import DetailPic from './components/DetailPic';
import DetailTitle from './components/DetailTitle';
// import HostTitle from './components/HostTitle';
import ReservationCard from './components/ReservationCard';
import RoomDesc from './components/RoomDesc';
import RoomOption from './components/RoomOption';
import RoomPoint from './components/RoomPoint';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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

	//리스트페이지에서 id값을받아서 디테일로 넘어오는거
	// const parsedQuery = queryString.parse(window.location.search);
	// const getId = parsedQuery.roomId;
	// const [idValue, idSet] = useState(getId);

	const roomId = 5;

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
	}, []);

	useEffect(() => {
		const getReviewData = async () => {
			const response = await fetch(`${GET_REVIEW_API}?roomId=${roomId}`);
			const data = await response.json();
			setReviewData(data.reviewInfo);
			console.log('data.detail.reviews', data.reviewInfo);
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
