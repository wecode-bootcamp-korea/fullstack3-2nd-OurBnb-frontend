import { useState } from 'react';
import styled from 'styled-components';

const Pagination = props => {
	const { giveOffset, limit, totalRows, isDivisibleByTen } = props;
	const [selected, SetSelected] = useState(0);
	const lastpage = Math.ceil(totalRows / limit);

	const pages = () => {
		const pagesArray = [];
		for (let i = 1; i <= lastpage; i++) {
			pagesArray.push(i);
		}
		return pagesArray;
	};

	const changeOffset = e => {
		giveOffset(e.target.value * limit);
		setTimeout(() => {
			SetSelected(e.target.value);
		}, 500);
	};

	const prevPage = () => {
		giveOffset((selected - 1) * limit);
		setTimeout(() => {
			SetSelected(selected - 1);
		}, 500);
	};

	const nextPage = () => {
		giveOffset((selected + 1) * limit);
		setTimeout(() => {
			SetSelected(selected + 1);
		}, 500);
	};

	return (
		<PaginationWrapper>
			<PageButtons>
				<Prev selected={selected}>
					<div className="prev" onClick={prevPage} selected={selected} />
				</Prev>
				{pages().map((el, index) => (
					<BtnList key={index} onClick={changeOffset} value={index} selected={selected}>
						{el}
					</BtnList>
				))}
				<Next selected={selected} lastpage={lastpage}>
					<div className="next" onClick={nextPage} selected={selected} lastpage={lastpage} />
				</Next>
			</PageButtons>
			{isDivisibleByTen && (
				<PageInfo>
					총 {totalRows}개의 숙소 중 {limit}개
				</PageInfo>
			)}
			{!isDivisibleByTen && totalRows < 10 && (
				<PageInfo>
					총 {totalRows}개의 숙소 중 {limit}개
				</PageInfo>
			)}
			{!isDivisibleByTen && totalRows > 10 && (
				<PageInfo>
					총 {Math.floor(totalRows / 10) * 10}개 이상의 숙소 중 {limit}개
				</PageInfo>
			)}
		</PaginationWrapper>
	);
};

export default Pagination;

const PaginationWrapper = styled.section`
	grid-area: pagination;
	padding: 20px 0 30px;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const PageButtons = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;

	section {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 30px;
		border-radius: 15px;

		&:hover {
			width: 30px;
			height: 30px;
			border-radius: 15px;
			background-color: #f0f0f0;
		}
	}

	div {
		width: 10px;
		height: 10px;
		border-top: 2px solid;
		border-left: 2px solid;
		transform: translateX(1px) translateY(1px);
	}
`;

const Prev = styled.section`
	cursor: pointer;
	transform: rotate(-45deg);
	pointer-events: ${props => (props.selected === 0 ? 'none' : 'all')};
	opacity: ${props => (props.selected === 0 ? '0.3' : '1')};
`;

const Next = styled.section`
	cursor: pointer;
	transform: rotate(135deg);
	pointer-events: ${props => (props.selected === props.lastpage - 1 ? 'none' : 'all')};
	opacity: ${props => (props.selected === props.lastpage - 1 ? '0.3' : '1')};
`;

const BtnList = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 20px;
	width: 30px;
	height: 30px;
	border-radius: 15px;
	font-size: 15px;
	background-color: ${props => (props.selected === props.value ? 'black' : 'none')};
	color: ${props => (props.selected === props.value ? 'white' : 'black')};
	pointer-events: ${props => (props.selected === props.value ? 'none' : 'all')};
	cursor: pointer;

	&:hover {
		width: 30px;
		height: 30px;
		border-radius: 15px;
		background-color: #f0f0f0;
	}
`;

const PageInfo = styled.div`
	font-size: 1.1rem;
`;
