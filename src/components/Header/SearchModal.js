import PropTypes from 'prop-types';
import styled from 'styled-components';

function SearchModal({ className, onClose, maskClosable, visible, children }) {
	const onMaskClick = e => {
		if (e.target === e.currentTarget) {
			onClose(e);
		}
	};

	return (
		<>
			<SearchModalOverlay visible={visible} onClick={onClose} />
			<SearchModalWrapper
				className={className}
				onClick={maskClosable ? onMaskClick : null}
				tabIndex="-1"
				visible={visible}
			>
				<SearchModalInner tabIndex="0" className="modal-inner">
					{children}
				</SearchModalInner>
			</SearchModalWrapper>
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

const SearchModalOverlay = styled.div`
	box-sizing: border-box;
	display: ${props => (props.visible ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 999;
`;

const SearchModalWrapper = styled.div`
	box-sizing: border-box;
	display: ${props => (props.visible ? 'block' : 'none')};
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
	margin-top: 20px;
	outline: 0;
	overflow: visible;
`;

const SearchModalInner = styled.div`
	box-sizing: border-box;
	position: absolute;
	padding: 40px 20px;
	margin-top: 150px;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	background-color: #fff;
	border-radius: 30px;
	width: 360px;
	max-width: 480px;
	transform: translateY(-50%);
	z-index: 999;
`;

export default SearchModal;
