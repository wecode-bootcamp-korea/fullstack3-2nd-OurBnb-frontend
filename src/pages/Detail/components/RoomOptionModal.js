import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RoomOptionC from './RoomOptionC';

export default function RoomOptionModal({
	className,
	visible,
	closeModal,
	modalParent,
	optionData,
}) {
	useEffect(() => {
		document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = `position: ""; top: "";`;
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
		};
	}, []);

	return ReactDOM.createPortal(
		<>
			<OptionModalOverlay visible={visible} onClick={closeModal} />
			<OptionModalContainer className={className} tabIndex="-1" visible={visible}>
				<OptionModalInner tabIndex="0" className="modal-inner">
					{optionData.map(option => {
						return (
							<RoomOptionC
								key={option.optionLogoUrl}
								optionName={option.optionName}
								optionLogoUrl={option.optionLogoUrl}
							/>
						);
					})}
				</OptionModalInner>
			</OptionModalContainer>
		</>,
		modalParent.current,
	);
}

RoomOptionModal.defaultProps = {
	visible: false,
	closable: true,
	maskClosable: true,
};

RoomOptionModal.propTypes = {
	visible: PropTypes.bool,
};

const OptionModalOverlay = styled.div`
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

const OptionModalContainer = styled.div`
	box-sizing: border-box;
	display: ${props => (props.visible ? 'block' : 'none')};
	position: absolute;
	left: 50%;
	top: 50%;
	margin: 0 auto;
	width: 480px;
	height: 500px;
	overflow: hidden;
	transform: translateX(-50%);
	z-index: 10000;
`;

const OptionModalInner = styled.div`
	box-sizing: border-box;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	max-width: 480px;
	border-radius: 10px;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	background-color: #fff;
	padding: 40px 20px;
	overflow-y: scroll;
`;
