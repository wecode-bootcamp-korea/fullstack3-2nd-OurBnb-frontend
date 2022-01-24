import React from 'react';
import styled from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';

export default function RoomDesc() {
	return (
		<Wrapper>
			<Container>
				<Description>
					*해외에서 바로 오시는분은 숙박이 불가합니다. 2주 자가격리 이후에 예약해 주세요. <br />
					*두달째 부터는 가격이 더 저렴합니다.
					<br />
					<br />
					<br />
					<DescSpan>숙소</DescSpan>
					<br />
					<br />
					걸어서 강남역 10분, 역삼역 5분 거리이고, 압구정역이나 Coex는 인근 버스정류장을 이용 10분
					거리에 위치하고 있습니다.
					<br />
					성형수술 이후 휴식, 회사출장으로 단기 숙박으로 이용하시거나 장기숙박으로 이용하기에
					불편함이 없습니다.
					<br />
					집과 같은 편안함을 약속드립니다.
					<br />
					<br />
					<DescButton>
						<More>더 보기</More>
						<MoreIcon>
							<BsChevronRight />
						</MoreIcon>
					</DescButton>
				</Description>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border-bottom: 1px solid rgb(221, 221, 221);
`;

const Container = styled.div`
	margin-top: 30px;
	margin-bottom: 30px;
`;

const Description = styled.span`
	width: 100%;
`;

const DescSpan = styled.span`
	font-size: 20px;
	font-weight: bold;
`;

const DescButton = styled.div`
	display: flex;
	width: 80px;
	cursor: pointer;
`;

const More = styled.span`
	font-size: 15px;
	font-weight: 600;
	text-decoration: underline;
`;

const MoreIcon = styled.div`
	font-size: 16px;
	font-weight: bold;
	padding-top: 1px;
`;
