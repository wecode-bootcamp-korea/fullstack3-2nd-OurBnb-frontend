import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TripIdea = () => {
	return (
		<IdeaWrapper>
			<TripIdeaWrapper>
				<TripTitle>
					<IdeaTitle>설레는 다음 여행을 위한 아이디어</IdeaTitle>
				</TripTitle>
				<Place>
					<Link to="/서울/room">
						<IdeaPlace>
							<PlaceImage src="../../images/seoul.png" alt="seoul" />
							<PlaceName>
								<City>서울</City>
								<Distance>365km 거리</Distance>
							</PlaceName>
						</IdeaPlace>
					</Link>
					<Link to="/제주/room">
						<IdeaPlace>
							<PlaceImage src="../../images/jeju.png" alt="jeju" />
							<PlaceName background="#bd196d">
								<City>제주</City>
								<Distance>2km 거리</Distance>
							</PlaceName>
						</IdeaPlace>
					</Link>
					<Link to="/대구/room">
						<IdeaPlace>
							<PlaceImage src="../../images/daegu.png" alt="daegu" />
							<PlaceName background="#cd2c4a">
								<City>대구</City>
								<Distance>237km 거리</Distance>
							</PlaceName>
						</IdeaPlace>
					</Link>
					<Link to="/부산/room">
						<IdeaPlace>
							<PlaceImage src="../../images/busan.png" alt="busan" />
							<PlaceName background="#d93b30">
								<City>부산</City>
								<Distance>125km 거리</Distance>
							</PlaceName>
						</IdeaPlace>
					</Link>
				</Place>
			</TripIdeaWrapper>
		</IdeaWrapper>
	);
};

export default TripIdea;

// styled-components
const IdeaWrapper = styled.div`
	width: 100%;
	max-width: 1800px;
	margin: 0 auto;
`;

const TripIdeaWrapper = styled.div`
	/* margin: 120px 0 0 6%; */
	margin: 120px 0 0 6%;
	display: flex;
	flex-direction: column;
`;

const TripTitle = styled.div`
	margin-bottom: 50px;
`;

const IdeaTitle = styled.p`
	font-size: 42px;
	font-weight: 500;
`;

const Place = styled.div`
	width: 96%;
	display: flex;
`;

const IdeaPlace = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: -45px;
`;

const PlaceImage = styled.img`
	width: 80%;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`;

const PlaceName = styled.div`
	width: 80%;
	height: 200px;
	background-color: ${props => props.background || '#de3151'};
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
`;

const City = styled.div`
	margin: 30px 0 0 20px;
	color: #ffffff;
	font-size: 35px;
`;

const Distance = styled.div`
	margin: 10px 0 0 20px;
	color: #ffffff;
	font-size: 20px;
`;
