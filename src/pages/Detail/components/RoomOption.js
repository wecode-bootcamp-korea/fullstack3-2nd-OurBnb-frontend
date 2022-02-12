import React, { useState } from 'react';
import styled from 'styled-components';
import RoomOptionModal from './RoomOptionModal';
import RoomOptionC from './RoomOptionC';

export default function RoomOption({
	modalParent,
	optionData,
	className,
	onClose,
	maskClosable,
	visible,
	children,
}) {
	const filteredOptions = optionData.filter(e => e.isMainOption);

	const [OptionModalVisible, setOptionModalVisible] = useState(false);
	const openOptionModal = () => {
		setOptionModalVisible(true);
	};
	const closeOptionModal = () => {
		setOptionModalVisible(false);
	};

	return (
		<Wrapper>
			<OptionTitle>숙소 편의시설</OptionTitle>
			<OptionContainer>
				{optionData &&
					filteredOptions.map(e => {
						return (
							<RoomOptionC
								key={Math.random()}
								optionName={e.optionName}
								optionLogoUrl={e.optionLogoUrl}
							/>
						);
					})}
			</OptionContainer>
			<AllOption onClick={openOptionModal}>편의시설 모두 보기</AllOption>
			{OptionModalVisible && (
				<RoomOptionModal
					modalParent={modalParent}
					visible={OptionModalVisible}
					closeModal={closeOptionModal}
					closable={true}
					optionData={optionData}
				/>
			)}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin-top: 30px;
`;

const OptionContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 40px;
`;

const OptionTitle = styled.span`
	font-size: 1.1rem;
	font-weight: 600;
`;

const AllOption = styled.div`
	width: 200px;
	height: 50px;
	font-size: 20px;
	border: 1px solid black;
	text-align: center;
	cursor: pointer;
	padding-top: 15px;
	margin-top: 20px;
	margin-bottom: 30px;
	border-radius: 10px 10px 10px 10px;
`;
