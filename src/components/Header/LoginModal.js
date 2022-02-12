import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function LoginModal({ className, onClose, maskClosable, visible, children }) {
	const onMaskClick = e => {
		if (e.target === e.currentTarget) {
			onClose(e);
		}
	};

	useEffect(() => {
		document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = `position: ""; top: "";`;
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
		};
	}, []);

	return (
		<>
			<LoginModalOverlay visible={visible} />
			<LoginModalWrapper
				className={className}
				onClick={maskClosable ? onMaskClick : null}
				tabIndex="-1"
				visible={visible}
			>
				<LoginModalInner tabIndex="0" className="modal-inner">
					{children}
				</LoginModalInner>
			</LoginModalWrapper>
		</>
	);
}

LoginModal.defaultProps = {
	visible: false,
	closable: true,
	maskClosable: true,
};

LoginModal.propTypes = {
	visible: PropTypes.bool,
};

const LoginModalWrapper = styled.div`
	box-sizing: border-box;
	display: ${props => (props.visible ? 'block' : 'none')};
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 5000;
	overflow: auto;
	outline: 0;
`;

const LoginModalOverlay = styled.div`
	box-sizing: border-box;
	display: ${props => (props.visible ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 3999;
`;

const LoginModalInner = styled.div`
	box-sizing: border-box;
	position: fixed;
	margin: 250px 0 0 -550px;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	background-color: #fff;
	border-radius: 10px;
	width: 360px;
	max-width: 480px;
	transform: translateY(-50%);
	padding: 40px 20px;
`;

export default LoginModal;
