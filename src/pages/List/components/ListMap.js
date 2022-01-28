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
	height: 100vh;
	padding: 0;

	@media (max-width: 1127px) {
		display: none;
	}
	background-color: darkblue;
`;

// import styled from 'styled-components';
// import Google from '../../../components/Map';
// import { Marker } from '../../../components/Map';

// const ListMap = ({ center, rooms }) => {
// 	const data = rooms?.roomList
// 	const cityMarkers =

// data.map(room => { lat: room.latitude, lng: room.longitude });

// 	return (
// 		<MapWrapper>
// 			<Google center={center} zoom={10} onload={createMarkers} />
// 			<Marker key={room.latitude} position={position} />
// 		</MapWrapper>
// 	);
// };

// export default ListMap;

// const MapWrapper = styled.div`
// 	grid-area: map;
// 	position: sticky;
// 	top: 150px;
// 	right: 0;
// 	width: 100%;
// 	height: 1500px;
// 	padding: 0;

// 	@media (max-width: 1127px) {
// 		display: none;
// 	}
// `;
