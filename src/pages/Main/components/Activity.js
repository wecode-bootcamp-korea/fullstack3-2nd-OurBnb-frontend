import React from 'react';
import styled from 'styled-components';

const Activity = () => {
	return (
		<Container>
			<ActivityWrapper>
				<ActivityTitle>에어비앤비 체험 둘러보기</ActivityTitle>
				<ActivityContents>
					<Contents>
						<ActivityImage src="../../images/activity1.png" alt="체험" />
						<ActivityMent>
							<ActivityExplain>여행 중 만나는</ActivityExplain>
							<ActivityExplain>이색적인 즐길 거리</ActivityExplain>
							<ActivityButton>
								<ActButton>체험</ActButton>
							</ActivityButton>
						</ActivityMent>
					</Contents>
					<Contents>
						<ActivityImage src="../../images/activity2.png" alt="온라인 체험" />
						<ActivityMent>
							<ActivityExplain color="#ffffff">집에서 만나는</ActivityExplain>
							<ActivityExplain color="#ffffff">다양한 즐길 거리</ActivityExplain>
							<ActivityButton>
								<ActButton background="#ffffff" color="#222222">
									온라인 체험
								</ActButton>
							</ActivityButton>
						</ActivityMent>
					</Contents>
				</ActivityContents>
				<Hosting>
					<HostingImage src="../../images/hosting.png" alt="호스팅" />
					<Host>
						<HostingMent>호스팅에 관해</HostingMent>
						<HostingMent>궁금하신 점이</HostingMent>
						<HostingMent>있나요?</HostingMent>
						<HostingButton>
							<HostButton>슈퍼호스트에게 물어보세요</HostButton>
						</HostingButton>
					</Host>
				</Hosting>
			</ActivityWrapper>
		</Container>
	);
};

export default Activity;

// styled-components
const Container = styled.div`
	width: 100%;
	max-width: 1800px;
	margin: 0 auto;
`;

const ActivityWrapper = styled.div`
	width: 100%;
	margin-left: 6%;
`;

const ActivityTitle = styled.p`
	margin: 100px 0 50px 0;
	font-size: 42px;
	font-weight: 500;
`;

const ActivityContents = styled.div`
	width: 90%;
	display: flex;
`;

const Contents = styled.div`
	margin-right: -40px;
`;

const ActivityImage = styled.img`
	width: 90%;
	border-radius: 10px;
`;

const ActivityMent = styled.div`
	margin: -800px 0 700px 80px;
`;

const ActivityExplain = styled.div`
	font-size: 50px;
	font-weight: 600;
	color: ${props => props.color || '#222222'};
`;

const ActivityButton = styled.div`
	margin-top: 15px;
`;

const ActButton = styled.button`
	padding: 14px 24px;
	border: none;
	border-radius: 10px;
	background-color: ${props => props.background || '#222222'};
	font-size: 16px;
	font-weight: 600;
	color: ${props => props.color || '#ffffff'}; ;
`;

const Hosting = styled.div``;

const HostingImage = styled.img`
	width: 88%;
	height: 700px;
	border-radius: 10px;
`;

const Host = styled.div`
	margin: -600px 0 170px 80px;
`;

const HostingMent = styled.div`
	font-size: 95px;
	font-weight: 500;
`;

const HostingButton = styled.div`
	margin-top: 85px;
`;

const HostButton = styled.button`
	padding: 14px 24px;
	border: none;
	border-radius: 10px;
	background-color: #222222;
	color: #ffffff;
	font-size: 16px;
`;
