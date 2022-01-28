import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import RoomsList from './components/ListRooms';
import FilterNav from './components/ListFilterNav';
import ListMap from './components/ListMap';
import { GET_LIST_API } from '../../config';

const List = () => {
	const { location } = useParams();
	const [rooms, setRooms] = useState({});
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const [totalRows, setTotalRows] = useState();
	const [offset, setOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const center = { lat, lng };
	const limit = 5;

	const [isActive, setIsActive] = useState(false);
	const [options, setOptions] = useState([]);
	const optionsURL = options.map(optionID => `&option=${optionID}`).join('');

	const requestAPI =
		isActive && optionsURL
			? `${GET_LIST_API}?location=${location}${optionsURL}&limit=${limit}&offset=${offset}`
			: `${GET_LIST_API}?location=${location}&limit=${limit}&offset=${offset}`;
	console.log(requestAPI);

	useEffect(() => {
		fetch(requestAPI, {
			method: 'GET',
			headers: {
				Authorization: sessionStorage.getItem('access_token'),
				mode: 'cors',
			},
		})
			.then(res => res.json())
			.then(data => {
				setIsLoading(true);
				window.scrollTo(0, 0);
				setRooms(data);
				setIsLoading(false);
				setLat(data.lat);
				setLng(data.lng);
				setTotalRows(data.totalRows);
				console.log(data);
			});
	}, [offset, location, requestAPI]);

	const handleFilter = e => {
		setIsActive(true);
		if (options.includes(e.target.value)) {
			setOptions(options.filter(option => option !== e.target.value));
		} else {
			setOptions([...options, e.target.value]);
		}
	};

	const giveOffset = pageNumber => {
		setOffset(pageNumber);
	};

	return (
		<>
			<HeaderWrapper>
				<Header />
				<FilterNav handleFilter={handleFilter} />
			</HeaderWrapper>

			<ListContainer>
				<RoomsList
					rooms={rooms}
					totalRows={totalRows}
					limit={limit}
					giveOffset={giveOffset}
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
	margin: -25px 0 0 0;
	top: -10px;
	z-index: 9999;
	border-bottom: 1px solid ${props => props.theme.border};
	padding-bottom: 10px;
	background-color: white;
`;

const ListContainer = styled.main`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: auto;
	grid-template-areas: 'list map';
	position: relative;
	width: 100%;
	height: 100%;

	@media (min-width: 1128px) and (max-width: 1439px) {
		grid-template-columns: minmax(1fr, 840px) 2fr;
	}

	@media (max-width: 1127px) {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
`;
