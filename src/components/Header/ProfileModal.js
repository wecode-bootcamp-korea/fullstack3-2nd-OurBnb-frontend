import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ProfileModal({ className, onClose, maskClosable, visible, children }) {
	const onMaskClick = e => {
		if (e.target === e.currentTarget) {
			onClose(e);
		}
	};

	return (
		<>
			<ModalOverlay visible={visible} />
			<ModalWrapper
				className={className}
				onClick={maskClosable ? onMaskClick : null}
				tabIndex="-1"
				visible={visible}
			>
				<ModalInner tabIndex="0" className="modal-inner">
					{children}
				</ModalInner>
			</ModalWrapper>
		</>
	);
}

ProfileModal.propTypes = {
	visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
	box-sizing: border-box;
	display: ${props => (props.visible ? 'block' : 'none')};
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 9999;
	overflow: auto;
	outline: 0;
`;

const ModalOverlay = styled.div`
	box-sizing: border-box;
	display: ${props => (props.visible ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 2500;
`;

const ModalInner = styled.div`
	box-sizing: border-box;
	position: relative;
	margin: 230px 0 0 1100px;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	background-color: #fff;
	border-radius: 10px;
	width: 255px;
	max-width: 480px;
	transform: translateY(-50%);
`;

export default ProfileModal;
