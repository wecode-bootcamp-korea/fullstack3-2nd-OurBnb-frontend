import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FilterNav = ({ handleFilter }) => {
	const [conveniences, setConveniences] = useState([]);

	useEffect(() => {
		const getButtonData = async () => {
			const response = await fetch('/data/listFilterdata.json');
			const data = await response.json();
			setConveniences(data);
		};
		getButtonData();
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
							<StyledFilterButton onClick={handleFilter} value={isMain.id}>
								{isMain.name}
							</StyledFilterButton>
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
	margin: -10px 24px 0;
	display: flex;
	flex-wrap: wrap;
	overflow-x: hidden;

	> ul {
		display: flex;
		justify-content: flex-start;
	}

	ul + ul {
		padding-left: 12px;
	}
`;

const StyledFilterButton = styled.button`
	width: max-content;
	padding: 10px 16px;
	border: ${props => (props.selected ? '1px solid black' : '1px solid #e0e0e0')};
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
