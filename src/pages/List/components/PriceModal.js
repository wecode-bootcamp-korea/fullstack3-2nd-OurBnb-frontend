import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
const PriceModal = ({ priceModalIsOpen, handleClose }) => {
	if (!priceModalIsOpen) return null;

	return ReactDOM.createPortal(
		<>
			<Background onClick={handleClose} />
			<ModalBox>
				<TopFlex>
					<h2>평균 일박 요금은 ₩210,048입니다 </h2>
					<MultiRangeSlider>
						<div>
							<label htmlFor="min-price-range" />
							<HiddenInput
								type="range"
								id="min-price-range"
								name="min-price-range"
								min="12000"
								max="1000000"
								defaultValue="12000"
							/>
							<label htmlFor="max-price-range" />
							<HiddenInput
								type="range"
								id="max-price-range"
								name="max-price-range"
								min="12000"
								max="1000000"
								defaultValue="1000000"
							/>
							<Slider>
								<Track />
								<Range />
								<Left>
									<StyledGiHamburgerMenu />
								</Left>
								<Right>
									<StyledGiHamburgerMenu />
								</Right>
							</Slider>
						</div>
					</MultiRangeSlider>
					<RangeInputs>
						<InputWrapper>
							<label htmlFor="min-price">최저 요금</label>
							<input id="min-price" name="min-price" min="12000" max="1000000" />
						</InputWrapper>
						<InputWrapper>
							<label htmlFor="max-price">최고 요금</label>
							<input id="max-price" name="max-price" min="12000" max="1000000" />
						</InputWrapper>
					</RangeInputs>
				</TopFlex>
				<BottomFlex>
					<ResetButton>지우기</ResetButton>
					<SaveButton>저장</SaveButton>
				</BottomFlex>
			</ModalBox>
		</>,
		document.getElementById('root'),
	);
};

export default PriceModal;

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	z-index: 999;
`;

const Flex = styled.div`
	display: flex;
`;

const ModalBox = styled(Flex)`
	flex-direction: column;
	align-items: space-between;
	justify-content: space-between;
	position: fixed;
	top: 211px;
	left: 24px;
	width: 440px;
	height: min-content;
	z-index: 1000;
	background-color: white;
	border-radius: 15px;
	border: 2px solid ${props => props.theme.border};
`;

const TopFlex = styled(Flex)`
	height: 100%;
	flex-direction: column;
	align-items: space-between;
	justify-content: space-between;
	padding: 24px;
	overflow: scrollY;
`;

const MultiRangeSlider = styled.div`
	position: relative;
	width: 100%;
	margin: 48px 0 24px;
`;

const HiddenInput = styled.input`
	position: absolute;
	pointer-events: none;
	-webkit-appearance: none;
	z-index: 2;
	height: 10px;
	width: 100%;
	opacity: 0;
`;

const Slider = styled.div`
	position: relative;
	z-index: 1;
	height: 2px;
	margin: 0 15px;
`;

const Track = styled.div`
	position: absolute;
	z-index: 1;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	border-radius: 5px;
	background-color: #dddddd;
`;

const Range = styled.div`
	position: absolute;
	z-index: 2;
	left: 25%;
	right: 25%;
	top: 0;
	bottom: 0;
	border-radius: 5px;
	background-color: #b0b0b0;
`;

const Thumb = styled.div`
	position: relative;
	position: absolute;
	z-index: 3;
	width: 30px;
	height: 30px;
	border: 1px solid #b0b0b0;
	border-radius: 50%;
	box-shadow: 0 0 0 0 rgba(98, 0, 238, 0.1);
	transition: box-shadow 0.3s ease-in-out;

	> &:hover {
		box-shadow: 0 0 0 20px rgba(98, 0, 238, 0.1);
	}
`;

const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
	position: absolute;
	left: 0;
	top: 20%;
	width: 100%;
	height: 70%;
	font-size: 1.5rem;
	color: #b0b0b0;
	transform: rotate(90deg);
`;

const Left = styled(Thumb)`
	left: 25%;
	transform: translate(-15px, -50%);
`;

const Right = styled(Thumb)`
	right: 25%;
	transform: translate(15px, -50%);
`;

const RangeInputs = styled(Flex)`
	justify-content: space-around;
	margin: 24px 0 12px;

	> InputWrapper + InputWrapper::before {
		content: '-';
		background-color: pink;
		width: 10px;
		height: 10px;
	}
`;

const InputWrapper = styled(Flex)`
	flex-direction: column;
	align-items: flex-start;
	padding: 12px;
	border: 1px solid gray;
	border-radius: 8px;
	cursor: pointer;

	> label {
		color: #b0b0b0;
	}

	> input {
		outline: none;
		border: none;
	}
`;

const BottomFlex = styled(Flex)`
	justify-content: space-between;
	border-top: 1px solid ${props => props.theme.border};
	padding: 12px 14px;
`;

const SaveButton = styled.button`
	--webkit-appearance: none;
	padding: 8px 15px;
	border-radius: 10px;
	border: 1px solid #222222;
	background-color: #222222;
	color: #ffffff;
	cursor: pointer;
`;

const ResetButton = styled.button`
	--webit-appearance: none;
	background-color: transparent;
	border: none;
	text-decoration: underline;
	font-size: 1rem;

	cursor: pointer;
`;
