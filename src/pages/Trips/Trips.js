import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ReservationInfo from './ReservationInfo';
import styled from 'styled-components';
import { FaPlaneDeparture } from 'react-icons/fa';
import { GET_RESERVATION_API } from '../../config';

const Trips = () => {
	const isTrips = true;
	const [reservation, setReservation] = useState({});
	const [loading, setLoading] = useState(true);
	const [hide, setHide] = useState(true);

	useEffect(() => {
		fetch(`${GET_RESERVATION_API}`, {
			method: 'GET',
			headers: {
				Authorization: sessionStorage.getItem('access_token'),
				mode: 'cors',
			},
		})
			.then(res => res.json())
			.then(data => {
				setLoading(false);
				setReservation(data);
				if (data.current.length === 0 && data.booked.length === 0) {
					setHide(false);
				}
			});
	}, []);
	if (loading) return <></>;
	return (
		<>
			<Header isTrips={isTrips} />
			<TripContents>
				<TripWrapper>
					<Title>여행</Title>
					<RecommendWrapper hide={hide}>
						<Recommend>
							<Icon>
								<FaPlaneDeparture size="40px" color="#ff385c" />
							</Icon>
							<SubInfo>아직 예약된 여행이 없습니다!</SubInfo>
							<SubInfo2>여행 가방에 쌓인 먼지를 털어내고 다음 여행 계획을 세워보세요.</SubInfo2>
							<Link to="/제주/room">
								<SearchBtn>숙소 검색하기</SearchBtn>
							</Link>
						</Recommend>
						<ImgWrapper>
							<img src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg" />
						</ImgWrapper>
					</RecommendWrapper>
					<CurrentWrapper>
						<CurrentSubTitle current={reservation.current ? reservation.current.length : true}>
							진행중인 여행
						</CurrentSubTitle>
						<Current>
							{reservation.current
								? reservation.current.map((el, index) => {
										return <ReservationInfo el={el} key={index} />;
								  })
								: null}
						</Current>
					</CurrentWrapper>
					<BookedWrapper>
						<BookedSubTitle booked={reservation.booked ? reservation.booked.length : true}>
							예약된 여행
						</BookedSubTitle>
						<Booked>
							{reservation.booked
								? reservation.booked.map((el, index) => {
										return <ReservationInfo el={el} key={index} />;
								  })
								: null}
						</Booked>
					</BookedWrapper>
					<PastWrapper>
						<PastSubTitle>이전 여행지</PastSubTitle>
						<Past>
							{reservation.past
								? reservation.past.map((el, index) => {
										return <ReservationInfo el={el} key={index} />;
								  })
								: null}
						</Past>
					</PastWrapper>
				</TripWrapper>
			</TripContents>
		</>
	);
};

export default Trips;

const TripContents = styled.section`
	box-shadow: 0 2px 5px lightgray inset;
`;

const TripWrapper = styled.section`
	max-width: 1600px;
	margin: 15px auto;
	padding: 0 80px;
`;

const Title = styled.section`
	margin: 20px 0;
	padding: 30px 0 30px;
	font-size: 35px;
`;

const CurrentSubTitle = styled.div`
	display: ${props => (props.current ? 'block' : 'none')};
	font-size: 25px;
`;

const BookedSubTitle = styled.div`
	display: ${props => (props.booked ? 'block' : 'none')};
	font-size: 25px;
`;

const PastSubTitle = styled.div`
	font-size: 25px;
`;

const RecommendWrapper = styled.section`
	display: ${props => (props.hide ? 'none' : 'grid')};
	grid-template-columns: 1fr 2fr;
	border: 1px solid lightgray;
	border-radius: 10px;
`;

const Recommend = styled.div`
	padding: 40px 0 40px 30px;
`;

const Icon = styled.div`
	margin-bottom: 10px;
`;

const SubInfo = styled.div`
	margin: 10px 0;
	font-size: 20px;
`;

const SubInfo2 = styled.div`
	margin: 10px 0;
	font-size: 15px;
`;

const SearchBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	margin-top: 20px;
	width: 120px;
	height: 50px;
	font-size: 16px;
	font-weight: 400;
	background: linear-gradient(to right, #e61d4f, #d80865);
	color: white;
`;

const ImgWrapper = styled.section`
	overflow: hidden;
	height: 260px;
`;

const CurrentWrapper = styled.section`
	margin: 20px 0;
`;

const Current = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;

const BookedWrapper = styled.section`
	margin: 20px 0;
`;

const Booked = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;

const PastWrapper = styled.section`
	margin: 20px 0;
`;

const Past = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;
