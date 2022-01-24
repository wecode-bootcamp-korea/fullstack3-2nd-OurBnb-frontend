import styled from 'styled-components';

export const MockHeader = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	font-size: 30px;
	width: 100%;
	height: 200px;
	border-bottom: 1px solid #f0f0f0;
	background-color: white;
	text-align: center;
	z-index: 9999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

export const MockFooter = styled.div`
	font-size: 30px;
	width: 100%;
	height: 350px;
	background-color: #f7f7f7;
	text-align: center;
`;
