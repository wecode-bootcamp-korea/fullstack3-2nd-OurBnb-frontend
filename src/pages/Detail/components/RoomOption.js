import React from 'react';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdMonitor, MdOutlineMicrowave } from 'react-icons/md';
import { CgSmartHomeWashMachine, CgSmartHomeRefrigerator } from 'react-icons/cg';
import { IoIosSnow } from 'react-icons/io';
import { RiLuggageDepositLine } from 'react-icons/ri';
import { SiGooglephotos } from 'react-icons/si';
import { BsPencil } from 'react-icons/bs';

export default function RoomOption() {
	return (
		<Wrapper>
			<OptionContainer>
				<OptionTitle>숙소 편의시설</OptionTitle>
				<OptionWrapper>
					<Content>
						<OptionIcon>
							<GiKnifeFork />
						</OptionIcon>
						<OptionName>주방</OptionName>
					</Content>

					<Content>
						<OptionIcon>
							<AiOutlineWifi />
						</OptionIcon>
						<OptionName>무선 인터넷</OptionName>
					</Content>

					<Content>
						<OptionIcon>
							<MdMonitor />
						</OptionIcon>
						<OptionName>TV + 일반 케이블 TV</OptionName>
					</Content>

					<Content>
						<OptionIcon>
							<CgSmartHomeWashMachine />
						</OptionIcon>
						<OptionName>세탁기</OptionName>
					</Content>

					<Content>
						<OptionIcon>
							<IoIosSnow />
						</OptionIcon>
						<OptionName>에어컨</OptionName>
					</Content>

					<Content>
						<OptionIcon>
							<RiLuggageDepositLine />
						</OptionIcon>
						<OptionName>여행 가방 보관기능</OptionName>
					</Content>

					<Content>
						<OptionIcon>
							<SiGooglephotos />
						</OptionIcon>
						<OptionName>헤어 드라이어</OptionName>
					</Content>

					<Content>
						<OptionIcon>
							<CgSmartHomeRefrigerator />
						</OptionIcon>
						<OptionName>냉장고</OptionName>
					</Content>

					<Content>
						<OptionIcon>
							<MdOutlineMicrowave />
						</OptionIcon>
						<OptionName>전자레인지</OptionName>
					</Content>

					<Content>
						<OptionIcon>
							<BsPencil />
						</OptionIcon>
						<OptionName>업무 전용 공간</OptionName>
					</Content>
				</OptionWrapper>
				<AllOption>편의시설 모두 보기</AllOption>
			</OptionContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border-bottom: 1px solid rgb(221, 221, 221);
`;

const OptionContainer = styled.div`
	display: flex;
	margin-top: 30px;
	margin-bottom: 30px;
	flex-direction: column;
`;

const OptionTitle = styled.span`
	font-size: 20px;
	font-weight: 600;
`;

const OptionWrapper = styled.div`
	display: grid;
	margin-top: 20px;
	grid-template-columns: repeat(2, 1fr);
`;

const Content = styled.div`
	display: flex;
`;

const OptionIcon = styled.div`
	width: 30px;
	height: 30px;
	font-size: 20px;
`;

const OptionName = styled.span`
	font-size: 20px;
`;

const AllOption = styled.div`
	width: 200px;
	height: 50px;
	font-size: 20px;
	border: 1px solid black;
	text-align: center;
	padding-top: 15px;
	margin-top: 20px;
	border-radius: 10px 10px 10px 10px;
`;
