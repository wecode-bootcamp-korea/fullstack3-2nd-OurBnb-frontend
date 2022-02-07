import { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export const useModal = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleOnClick = () => {
		setModalOpen(prev => !prev);
	};

	const handleClose = () => {
		setModalOpen(false);
	};

	return { isModalOpen, handleOnClick, handleClose, setModalOpen };
};

export const Modal = ({ modalName, width, position, top, left, children, parent }) => {
	//handleOnClick + setModalOpen은 Container에 지정해주면 children으로 전달될까? 또는 선언해두는것만으로 children이 상태에 접근 가능할까?
	const { isModalOpen, handleOnClick, handleClose, setModalOpen } = useModal();

	if (!isModalOpen) return null;

	return ReactDOM.createPortal(
		<>
			<Background onClick={handleClose} />
			<Container width={width} position={position} top={top} left={left}>
				{children}
			</Container>
		</>,
		{ parent },
	);
};

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
`;

//모달 컨테이너의 스타일 컴포넌트를 전달해줄수있는 다른 방법은 없을까?
const Container = styled.div`
	width: ${({ width }) => width}px;
	position: ${({ position }) => position};
	top: ${({ top }) => top};
	left: ${({ left }) => left};
`;
