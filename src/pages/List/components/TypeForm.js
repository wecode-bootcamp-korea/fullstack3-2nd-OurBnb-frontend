import { useState } from 'react';
import styled from 'styled-components';

const TypeForm = ({ ref, handleRoomTypes }) => {
	const [isChecked, setChecked] = useState([]);
	// const checkbox = useRef(false);

	const handleCheckbox = e => {
		isChecked.includes(e.target.value)
			? setChecked(isChecked.filter(checked => checked !== e.target.value))
			: setChecked([...isChecked, e.target.value]);
	};

	const removeAllChecks = e => {
		e.preventDefault();
		setChecked([]);
	};

	const handleSubmit = e => {
		e.preventDefault();
		ref = isChecked.length - 1;
	};

	return (
		<ModalBox>
			<CheckboxWrapper>
				<InputWrapper>
					<CheckBox
						type="checkbox"
						name="privateApt"
						id="privateApt"
						value="1"
						onChange={handleCheckbox}
						checked={isChecked.includes('1')}
						// onChange={handleRefCheck}
						// checked={checkbox.current}
					/>
					<InputLabels htmlFor="privateApt">
						<RoomType>집 전체</RoomType>
						<TypeDetail>집 전체를 단독으로 사용합니다.</TypeDetail>
					</InputLabels>
				</InputWrapper>
				<InputWrapper>
					<CheckBox
						type="checkbox"
						name="hotelSuite"
						id="hotelSuite"
						value="2"
						onChange={handleCheckbox}
						checked={isChecked.includes('2')}
					/>
					<InputLabels htmlFor="hotelSuite">
						<RoomType>호텔객실</RoomType>
						<TypeDetail>부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다.</TypeDetail>
					</InputLabels>
				</InputWrapper>
				<InputWrapper>
					<CheckBox
						type="checkbox"
						name="privateRoom"
						id="privateRoom"
						value="3"
						onChange={handleCheckbox}
						checked={isChecked.includes('3')}
					/>
					<InputLabels htmlFor="privateRoom">
						<RoomType>개인실</RoomType>
						<TypeDetail>
							침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다.
						</TypeDetail>
					</InputLabels>
				</InputWrapper>
				<InputWrapper>
					<CheckBox
						type="checkbox"
						name="sharedRoom"
						id="sharedRoom"
						value="4"
						onChange={handleCheckbox}
						checked={isChecked.includes('4')}
					/>
					<InputLabels htmlFor="sharedRoom">
						<RoomType>다인실</RoomType>
						<TypeDetail>
							사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다.
						</TypeDetail>
					</InputLabels>
				</InputWrapper>
			</CheckboxWrapper>
			<BottomFlex>
				<ResetButton onClick={removeAllChecks}>지우기</ResetButton>
				<SaveButton
					onClick={() => {
						handleSubmit();
						handleRoomTypes();
					}}
				>
					저장
				</SaveButton>
			</BottomFlex>
		</ModalBox>
	);
};

export default TypeForm;

const FlexDiv = styled.div`
	display: flex;
`;

const ModalBox = styled.form`
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: space-between;
	position: fixed;
	top: 211px;
	left: 110px;
	width: 360px;
	height: min-content;
	z-index: 1000;
	background-color: white;
	border-radius: 15px;
	border: 2px solid ${props => props.theme.border};
`;

const CheckboxWrapper = styled(FlexDiv)`
	flex-direction: column;
	padding: 20px;
`;

const InputWrapper = styled(FlexDiv)`
	flex-direction: row;
	align-items: flex-start;
	gap: 20px;
	padding: 12px 0;
	cursor: pointer;
`;

const CheckBox = styled.input`
	position: relative;
	-webkit-appearance: none;
	outline: none;
	width: 25px;
	min-width: 25px;
	height: 25px;
	border: 1px solid #b0b0b0;
	border-radius: 5px;
	overflow: hidden;

	&:checked {
		background-color: #222222;
		border-color: #222222;
	}
	&:hover {
		border-color: #000000;
	}
	&:focus {
		border-color: #000000;
	}
	&:after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background-image: url('/images/checkmark.png');
		background-size: 20px;
		background-repeat: no-repeat;
		background-position: center;
	}
`;

const InputLabels = styled.label`
	display: flex;
	flex-direction: column;
	user-select: none;
`;

const RoomType = styled.span`
	margin-bottom: 5px;
	font-size: 0.9rem;
	font-weight: normal;
`;

const TypeDetail = styled.span`
	color: #717171;
	font-size: 0.8rem;
`;

const BottomFlex = styled(FlexDiv)`
	justify-content: space-between;
	align-items: center;
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
