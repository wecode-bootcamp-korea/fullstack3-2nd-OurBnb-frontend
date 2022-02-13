import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { GET_LIST_API } from '../../config';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import RoomsList from './components/ListRooms';
import FilterNav from './components/ListFilterNav';
import ListMap from './components/ListMap';

const List = () => {
	const { location } = useParams();
	const [rooms, setRooms] = useState({});

	const [isLoading, setIsLoading] = useState(true);
	const [totalRows, setTotalRows] = useState(0);
	const [offset, setOffset] = useState(0);
	const limit = 5;

	const [roomTypes, setRoomTypes] = useState([]);
	const roomType = roomTypes.map(checked => `&roomTypeId=${checked}`).join('');

	const handleRoomTypes = (e, isChecked) => {
		e.preventDefault();
		setRoomTypes([...isChecked]);
	};

	const [options, setOptions] = useState([]);
	const optionsURL = options.map(optionID => `&option=${optionID}`).join('');

	const handleFilter = e => {
		if (options.includes(e.target.value)) {
			setOptions(options.filter(option => option !== e.target.value));
		} else {
			setOptions([...options, e.target.value].sort((a, b) => a - b));
		}
	};

	const requestAPI =
		optionsURL || roomType
			? `${GET_LIST_API}?location=${location}${optionsURL}&limit=${limit}&offset=${offset}`
			: `${GET_LIST_API}?location=${location}&limit=${limit}&offset=${offset}`;

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
				setTotalRows(data.totalRows);
				setIsLoading(false);
			});
	}, [location, requestAPI]);

	const giveOffset = pageNumber => {
		setOffset(pageNumber);
	};

	return (
		<>
			<Header isSticky={true} />
			<FilterNav handleRoomTypes={handleRoomTypes} handleFilter={handleFilter} />

			<ListContainer>
				<RoomsList
					rooms={rooms}
					totalRows={totalRows}
					limit={limit}
					giveOffset={giveOffset}
					isLoading={isLoading}
				/>
				<ListMap rooms={rooms} />
			</ListContainer>

			<Footer />
		</>
	);
};

export default List;

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
