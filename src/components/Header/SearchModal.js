import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function SearchModal({ className, onClose, maskClosable, visible, children }) {
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

SearchModal.defaultProps = {
	visible: false,
	closable: true,
	maskClosable: true,
};

SearchModal.propTypes = {
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
	z-index: 1000;
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
	z-index: 999;
`;

const ModalInner = styled.div`
	box-sizing: border-box;
	position: fixed;
	margin-top: 150px;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	background-color: #fff;
	border-radius: 30px;
	width: 360px;
	max-width: 480px;
	transform: translateY(-50%);
	padding: 40px 20px;
`;

export default SearchModal;
