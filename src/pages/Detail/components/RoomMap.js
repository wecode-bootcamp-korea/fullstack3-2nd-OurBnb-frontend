import React from 'react';
import styled from 'styled-components';
import Google from '../../../components/Map';
import { Marker } from '../../../components/Map';

export default function RoomMap({ mainInfoData }) {
	const { roomId, address, latitude, longitude } = mainInfoData;
	const center = { lat: latitude, lng: longitude };

	return (
		<Wrapper>
			<Label>
				<Name>호스팅 지역</Name>
				<Location>{address}</Location>
			</Label>
			<MapWrapper>
				<Google center={center} zoom={12}>
					<Marker key={roomId} position={center} />
				</Google>
			</MapWrapper>
		</Wrapper>
	);
}
const Wrapper = styled.section`
	width: 100%;
	margin-top: 20px;
	border-bottom: 1px solid rgb(221, 221, 221);
`;

const Label = styled.div`
	display: flex;
	flex-direction: column;
`;

const Name = styled.span`
	font-size: 1.5rem;
	font-weight: 600;
`;

const Location = styled.span`
	font-size: 0.8rem;
	margin-top: 15px;
	margin-bottom: 15px;
`;

const MapWrapper = styled.div`
	width: 100%;
	height: 400px;
	padding: 0;
	margin-bottom: 30px;
`;
