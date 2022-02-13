import { createPortal } from 'react-dom';
import styled from 'styled-components';
import TypeForm from './TypeForm';

const TypeModal = ({ typeModalIsOpen, handleClose, ref }) => {
	if (!typeModalIsOpen) return null;

	return createPortal(
		<>
			<Background onClick={handleClose} />
			<TypeForm ref={ref} />
		</>,
		document.getElementById('root'),
	);
};

export default TypeModal;

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
`;
