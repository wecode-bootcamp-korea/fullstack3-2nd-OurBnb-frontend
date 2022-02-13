import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { GET_OPTION_API } from '../../../config';
import PriceModal from '../components/PriceModal';
import TypeModal from '../components/TypeModal';

const FilterNav = ({ handleRoomTypes, handleFilter }) => {
	const [conveniences, setConveniences] = useState([]);

	useEffect(() => {
		const fetchButtonData = async () => {
			const response = await fetch(`${GET_OPTION_API}`);
			const data = await response.json();
			setConveniences(data);
		};

		fetchButtonData();
	}, []);

	const filterButtons = conveniences
		.filter(convenience => convenience.isMain === 1)
		.map(isMain => (
			<li key={isMain.id}>
				<StyledFilterButton onClick={handleFilter} readOnly value={isMain.id}>
					{isMain.name}
				</StyledFilterButton>
			</li>
		));

	const [priceModalIsOpen, setPriceModalIsOpen] = useState(false);
	const handlePriceFilter = () => {
		setPriceModalIsOpen(prev => !prev);
	};

	const [typeModalIsOpen, setTypeModalIsOpen] = useState(false);
	const checkedCount = useRef(null);
	const handleTypeFilter = () => {
		setTypeModalIsOpen(prev => !prev);
	};

	return (
		<StyledNav>
			<ul>
				<li>
					<StyledFilterButton onClick={handlePriceFilter} selected={priceModalIsOpen}>
						요금
						{priceModalIsOpen ? <GoChevronUp /> : <GoChevronDown />}
					</StyledFilterButton>
					<PriceModal
						priceModalIsOpen={priceModalIsOpen}
						handleClose={() => setPriceModalIsOpen(false)}
					/>
				</li>
				<li>
					<StyledFilterButton onClick={handleTypeFilter} selected={typeModalIsOpen}>
						숙소 유형
						{checkedCount.current && `+${checkedCount.current}`}
						{typeModalIsOpen ? <GoChevronUp /> : <GoChevronDown />}
					</StyledFilterButton>
					<TypeModal
						typeModalIsOpen={typeModalIsOpen}
						handleClose={() => setTypeModalIsOpen(false)}
						ref={checkedCount.current}
						handleRoomTypes={handleRoomTypes}
					/>
				</li>
			</ul>
			<ul>{filterButtons}</ul>
		</StyledNav>
	);
};

export default FilterNav;

const StyledNav = styled.nav`
	display: flex;
	flex-wrap: wrap;
	position: sticky;
	top: 150px;
	padding: 10px 0px 10px 24px;
	width: 100%;
	height: auto;
	background-color: #ffffff;
	border-bottom: 1px solid ${props => props.theme.border};
	z-index: 10;

	> ul {
		display: flex;
		justify-content: flex-start;
		gap: 12px;
	}

	ul + ul {
		padding-left: 15px;

		:before {
			border-left: 2px solid #e0e0e0;
			content: ' ';
			height: 50%;
			transform: translateY(50%);
		}
	}
`;

const StyledFilterButton = styled.button`
	display: flex;
	align-items: center;
	gap: 5px;
	position: relative;
	width: max-content;
	padding: 10px 16px;
	background-color: ${props => (props.selected ? '#f0f0f0' : '#ffffff')};
	border: ${props => (props.selected ? '1px solid #222222' : '1px solid #e0e0e0')};
	box-shadow: ${props => (props.selected ? '0px 0px 0px 2px #222222' : 'none')};
	border-radius: 30px;
	opacity: 1;

	&:hover {
		/* border-color: #222222; */
		box-shadow: 0px 0px 0px 1px #222222;
	}

	&:focus {
		/* border: 2px solid #000000; */
		box-shadow: 0px 0px 0px 2px #222222;
	}

	> a {
		display: flex;
		flex-direction: row;
	}

	@media (max-width: 743px) {
		& > a {
			display: flex;
			flex-direction: column;
		}
	}
`;
