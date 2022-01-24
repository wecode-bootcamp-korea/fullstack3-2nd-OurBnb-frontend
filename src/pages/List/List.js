import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RoomsList from './components/ListAllCards';
import FilterNav from './ListFilterNav';
import ListMap from './ListMap';

import { MockHeader, MockFooter } from '../../components/Delete';

const List = () => {
	const [rooms, setRooms] = useState({});
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const center = { lat: lat, lng: lng };

	useEffect(() => {
		const getRoomData = async () => {
			// const response = await fetch(`${process.env.REACT_APP_BASE_URL}`)
			// const response = await fetch('./data/seoulListData.json');
			const response = await fetch('./data/jejuListData.json');
			const data = await response.json();
			setRooms(data);
			setLat(data.lat);
			setLng(data.lng);
		};

		getRoomData();
	}, []);

	return (
		<>
			<MockHeader>
				<h1>Mock Header</h1>
				<FilterNav />
			</MockHeader>

			<ListContainer>
				<RoomsList rooms={rooms} />
				<ListMap center={center} />
			</ListContainer>

			<MockFooter>
				<h1>Mock Footer</h1>
			</MockFooter>
		</>
	);
};

export default List;

const ListContainer = styled.main`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-areas:
		'result map'
		'list map';
	position: relative;
	width: 100%;

	/* > ul,
	> div {
		padding: 0 24px;
	} */

	@media (min-width: 1128px) and (max-width: 1439px) {
		grid-template-columns: minmax(1fr, 840px) 2fr;
	}

	@media (max-width: 1127px) {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
`;
