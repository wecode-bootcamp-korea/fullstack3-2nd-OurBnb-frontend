import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function HostTitle({ userId }) {
	return (
		<Wrapper>
			<HostTitleContainer>
				<TitleWrapper>
					<TitleTop>{userId}님이 호스팅하는 개쩌는 펜션전체</TitleTop>
					<TitleBottom>최대 인원 4명 · 침실 2개 · 침대 2개 · 단독 사용 욕실 1개</TitleBottom>
				</TitleWrapper>
				<HostImg>
					<UserImg>
						<img src="../images/host.jpg" />
					</UserImg>
				</HostImg>
			</HostTitleContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	border-bottom: 1px solid rgb(221, 221, 221);
`;

const HostTitleContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
`;

const TitleWrapper = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
`;

const TitleTop = styled.span`
	padding-top: 15px;
	font-size: 30px;
	margin-bottom: 5px;
`;

const TitleBottom = styled.span`
	font-size: 1rem;
`;

const HostImg = styled.div`
	/* width: 10%; */
`;

const UserImg = styled.div`
	width: 60px;
	height: 60px;
	margin: 0 auto;
	margin-top: 10px;
	object-fit: cover;
	img {
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
`;
