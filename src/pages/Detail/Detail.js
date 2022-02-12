import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { GET_DETAIL_API } from '../../config';
import { GET_REVIEW_API } from '../../config';

import DetailPic from './components/DetailPic';
import PicModal from './components/PicModal';
import DetailTitle from './components/DetailTitle';
import HostTitle from './components/HostTitle';
import ReservationCard from './components/ReservationCard';
import RoomDesc from './components/RoomDesc';
import RoomOption from './components/RoomOption';
import RoomPoint from './components/RoomPoint';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import CheckPoint from './components/CheckPoint';
import Review from './components/Review';
import RoomMap from './components/RoomMap';

export default function Detail() {
	const { roomid } = useParams();
	const [mainInfoData, setMainInfoData] = useState({});
	const [reviewData, setReviewData] = useState({});
	const [optionData, setOptionData] = useState([]);
	const [benefitData, setBenefitData] = useState([]);
	const [ruleData, setRuleData] = useState([]);
	const [safetyData, setSafetyData] = useState([]);

	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
		document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
	};

	// useEffect(() => {
	// 	document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
	// 	return () => {
	// 		const scrollY = document.body.style.top;
	// 		document.body.style.cssText = `position: ""; top: "";`;
	// 		window.scrollTo(0, parseInt(scrollY || '0') * -1);
	// 	};
	// }, []);

	const handleClose = () => {
		setShowModal(false);
		document.body.style.cssText = `position: ""; top: "";`;
	};

	useEffect(() => {
		const getRoomData = async () => {
			const response = await fetch(`${GET_DETAIL_API}?roomId=${roomid}`);
			const data = await response.json();
			setMainInfoData(data.detail.mainInfo);
			setOptionData(data.detail.option);
			setBenefitData(data.detail.benefit);
			setRuleData(data.detail.rule);
			setSafetyData(data.detail.safety);
		};
		getRoomData();
	}, [roomid]);

	useEffect(() => {
		const getReviewData = async () => {
			const response = await fetch(`${GET_REVIEW_API}?roomId=${roomid}`);
			const data = await response.json();
			setReviewData(data.reviewInfo);
		};
		getReviewData();
	}, [roomid]);
	return (
		<div>
			<PicModal showModal={showModal} picData={mainInfoData} handleClose={handleClose} />
			<Wrapper>
				<Header />
				<InnerWrapper>
					<DetailTitle
						mainInfoData={mainInfoData}
						reviewAvgData={reviewData.roomAvgRate}
						reviewCountData={reviewData.roomReviewCount}
					/>
					<DetailPic mainInfoData={mainInfoData} openModal={openModal} />
					<DetailInfo>
						<RoomInfo>
							<HostTitle mainInfoData={mainInfoData} />
							<RoomPoint benefitData={benefitData} />
							<RoomDesc mainInfoData={mainInfoData} />
							<RoomOption optionData={optionData} />
						</RoomInfo>
						<Reservation>
							<ReservationCard
								mainInfoData={mainInfoData}
								priceData={mainInfoData.price}
								reviewAvgData={reviewData.roomAvgRate}
								reviewCountData={reviewData.roomReviewCount}
								capacityData={mainInfoData.guestCapacity}
							/>
						</Reservation>
					</DetailInfo>
					<Review reviewData={reviewData} />
					<RoomMap mainInfoData={mainInfoData} />
					<CheckPoint ruleData={ruleData} safetyData={safetyData} />
				</InnerWrapper>
				<FooterWrapper>
					<Footer />
				</FooterWrapper>
			</Wrapper>
		</div>
	);
}

const Wrapper = styled.div`
	width: 100%;
	background-color: #fff;
`;

const InnerWrapper = styled.div`
	width: 85%;
	max-width: 1440px;
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

const FooterWrapper = styled.div`
	margin-top: 50px;
	border-top: 1px solid ${props => props.theme.border};
`;
