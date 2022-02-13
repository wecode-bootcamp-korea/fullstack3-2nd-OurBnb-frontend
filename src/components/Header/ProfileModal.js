import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ProfileModal({ isMain, className, onClose, maskClosable, visible, children }) {
	const onMaskClick = e => {
		if (e.target === e.currentTarget) {
			onClose(e);
		}
	};

	return createPortal(
		<>
			<ModalOverlay visible={visible} onClick={onClose} />
			<ModalWrapper
				className={className}
				onClick={maskClosable ? onMaskClick : null}
				tabIndex="-1"
				visible={visible}
			>
				<ModalInner isMain={isMain} tabIndex="0" className="modal-inner">
					{children}
				</ModalInner>
			</ModalWrapper>
		</>,
		document.body,
	);
}

ProfileModal.propTypes = {
	visible: PropTypes.bool,
};

const ModalOverlay = styled.div`
	box-sizing: border-box;
	display: ${props => (props.visible ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 9999;
`;

const ModalWrapper = styled.div`
	box-sizing: border-box;
	display: ${props => (props.visible ? 'block' : 'none')};
	position: absolute;
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	padding: 0 12px 0 0;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 10000;
	overflow: visible;
	outline: 0;
`;

const ModalInner = styled.div`
	box-sizing: border-box;
	position: absolute;
	position: sticky;
	top: ${props => (props.isMain ? '115px' : '80px')};
	left: 100%;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	background-color: #fff;
	border-radius: 10px;
	width: 255px;
	max-width: 480px;
`;

export default ProfileModal;
