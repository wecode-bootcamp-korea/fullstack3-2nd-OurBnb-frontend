import styled from 'styled-components';
import Google from '../../../components/Map';
import { Marker } from '../../../components/Map';

const ListMap = ({ center, rooms }) => {
	return (
		<MapWrapper>
			<Google center={center} zoom={10}>
				{rooms?.roomList &&
					rooms.roomList.map(room => {
						let position = { lat: room.latitude, lng: room.longitude };
						return <Marker key={room.latitude} position={position} />;
					})}
			</Google>
		</MapWrapper>
	);
};

export default ListMap;

const MapWrapper = styled.div`
	grid-area: map;
	position: sticky;
	top: 150px;
	right: 0;
	width: 100%;
	height: calc(100vh - 211.92px);
	padding: 0;

	@media (max-width: 1127px) {
		display: none;
	}
`;
