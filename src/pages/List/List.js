import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import RoomsList from './components/ListAllCards';
import FilterNav from './components/ListFilterNav';
import ListMap from './components/ListMap';
import { GET_LIST_API } from '../../config';

const List = () => {
	const [rooms, setRooms] = useState({});
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const [totalRows, setTotalRows] = useState();
	const [offset, setOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const center = { lat, lng };
	const limit = 5;

	useEffect(() => {
		const getRoomData = async () => {
			const response = await fetch(`${GET_LIST_API}?location=제주&limit=${limit}&offset=${offset}`);
			const data = await response.json();
			setIsLoading(true);
			window.scrollTo(0, 0);
			setRooms(data);
			setIsLoading(false);
			setLat(data.lat);
			setLng(data.lng);
			setTotalRows(data.totalRows);
		};

		getRoomData();
	}, [offset]);

	return (
		<>
			<HeaderWrapper>
				<Header />
				<FilterNav />
			</HeaderWrapper>

			<ListContainer>
				<RoomsList
					rooms={rooms}
					totalRows={totalRows}
					limit={limit}
					setOffset={setOffset}
					isLoading={isLoading}
				/>
				<ListMap center={center} rooms={rooms} />
			</ListContainer>

			<Footer />
		</>
	);
};

export default List;

const HeaderWrapper = styled.div`
	position: sticky;
	margin: -15px 0 0 0;
	top: -10px;
	z-index: 9999;
	box-shadow: 1px 1px 10px gray;
	padding-bottom: 15px;
	background-color: white;
`;

const ListContainer = styled.main`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-areas:
		'result map'
		'list map';
	position: relative;
	width: 100%;

	@media (min-width: 1128px) and (max-width: 1439px) {
		grid-template-columns: minmax(1fr, 840px) 2fr;
	}

	@media (max-width: 1127px) {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
`;
