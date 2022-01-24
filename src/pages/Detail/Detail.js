import React, { useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import queryString from 'query-string';
import styled from 'styled-components';
import DetailPic from './components/DetailPic';
import DetailTitle from './components/DetailTitle';
import HostTitle from './components/HostTitle';
import ReservationCard from './components/ReservationCard';
import RoomDesc from './components/RoomDesc';
import RoomOption from './components/RoomOption';
import RoomPoint from './components/RoomPoint';

export default function Detail() {
	return (
		<Wrapper>
			<InnerWrapper>
				<DetailTitle />
				<DetailPic />
				<DetailInfo>
					<RoomInfo>
						<HostTitle />
						<RoomPoint />
						<RoomDesc />
						<RoomOption />
					</RoomInfo>
					<Reservation>
						<ReservationCard />
					</Reservation>
				</DetailInfo>
			</InnerWrapper>
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
