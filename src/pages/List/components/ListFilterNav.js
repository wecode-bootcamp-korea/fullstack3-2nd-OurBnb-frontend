import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FilterNav = () => {
	const [conveniences, setConveniences] = useState([]);

	useEffect(() => {
		const getFilterData = async () => {
			// const response = await fetch(`${GET_LIST_API}?location=제주&option=3&option=6&option`, {
			const response = await fetch('./data/listFilterdata.json');
			const data = await response.json();
			setConveniences(data);
		};

		getFilterData();
	}, []);

	return (
		<StyledNav>
			<ul>
				<li>
					<StyledFilterButton>요금</StyledFilterButton>
				</li>
				<li>
					<StyledFilterButton>숙소 유형</StyledFilterButton>
				</li>
			</ul>
			<ul>
				{conveniences
					.filter(convenience => convenience.isMain === 1)
					.map(isMain => (
						<li key={isMain.id}>
							<StyledFilterButton>{isMain.name}</StyledFilterButton>
						</li>
					))}
			</ul>
		</StyledNav>
	);
};

export default FilterNav;

const StyledNav = styled.nav`
	width: 100%;
	height: auto;
	margin: 0 24px;
	display: flex;
	flex-wrap: wrap;
	overflow-x: hidden;

	> ul {
		display: flex;
		justify-content: flex-start;
		/* margin: 0 12px; */

		li + li {
			/* margin-right: 0 12px; */
		}
	}
	ul + ul {
		/* border-left: 1px solid #717171; */
		padding-left: 12px;
	}
`;

const StyledFilterButton = styled.button`
	width: max-content;
	padding: 10px 16px;
	border: 1px solid #e0e0e0;
	border-radius: 30px;
	background-color: ${({ theme }) => theme.background};
	opacity: 1;

	&:hover {
		border-color: black;
	}
	> a {
		display: flex;
		flex-direction: row;
	}

	~ & {
		border-top: 2px solid black;
	}

	@media (max-width: 743px) {
		& > a {
			display: flex;
			flex-direction: column;
		}
	}
`;
