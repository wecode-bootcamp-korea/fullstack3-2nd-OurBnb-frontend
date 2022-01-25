import { useState } from 'react';
import styled from 'styled-components';

const PagenationBtn = props => {
	const { totalRows, limit, setOffset } = props;
	const [selected, SetSelected] = useState(0);
	const lastPage = Math.ceil(totalRows / limit);
	const btn = () => {
		const btnArr = [];
		for (let i = 1; i <= lastPage; i++) {
			btnArr.push(i);
		}
		return btnArr;
	};

	const changeOffset = e => {
		setOffset(e.target.value * limit);
		setTimeout(() => {
			SetSelected(e.target.value);
		}, 500);
	};

	const prevPage = () => {
		setOffset((selected - 1) * limit);
		setTimeout(() => {
			SetSelected(selected - 1);
		}, 500);
	};

	const nextPage = () => {
		setOffset((selected + 1) * limit);
		setTimeout(() => {
			SetSelected(selected + 1);
		}, 500);
	};

	return (
		<BtnWrapper>
			<Prev selected={selected}>
				<div clasName="prev" onClick={prevPage} selected={selected}></div>
			</Prev>
			{btn().map((el, index) => (
				<BtnList onClick={changeOffset} value={index} selected={selected}>
					{el}
				</BtnList>
			))}
			<Next selected={selected} lastPage={lastPage}>
				<div clasName="next" onClick={nextPage} selected={selected} lastPage={lastPage}></div>
			</Next>
		</BtnWrapper>
	);
};

export default PagenationBtn;

const BtnWrapper = styled.ul`
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
	pointer-events: ${props => (props.selected === props.lastPage - 1 ? 'none' : 'all')};
	opacity: ${props => (props.selected === props.lastPage - 1 ? '0.3' : '1')};
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
