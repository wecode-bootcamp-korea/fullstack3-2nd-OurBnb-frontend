import React from 'react';
import styled from 'styled-components';
// import { GiKnifeFork } from 'react-icons/gi';
// import { AiOutlineWifi } from 'react-icons/ai';
// import { MdMonitor, MdOutlineMicrowave } from 'react-icons/md';
// import { CgSmartHomeWashMachine, CgSmartHomeRefrigerator } from 'react-icons/cg';
// import { IoIosSnow } from 'react-icons/io';
// import { RiLuggageDepositLine } from 'react-icons/ri';
// import { SiGooglephotos } from 'react-icons/si';
// import { BsPencil } from 'react-icons/bs';
import RoomOptionC from './RoomOptionC';

export default function RoomOption({ optionData }) {
	return (
		<Wrapper>
			<OptionTitle>숙소 편의시설</OptionTitle>
			<OptionContainer>
				{optionData &&
					optionData.map((e, i) => {
						return (
							<RoomOptionC key={i} optionName={e.optionName} optionLogoUrl={e.optionLogoUrl} />
						);
					})}
			</OptionContainer>
			<AllOption>편의시설 모두 보기</AllOption>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border-bottom: 1px solid rgb(221, 221, 221);
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
