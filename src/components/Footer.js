import React from 'react';
import styled from 'styled-components';
import { FiGlobe } from 'react-icons/fi';
import { BiWon } from 'react-icons/bi';
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im';

const Footer = () => {
	return (
		<Container>
			<FooterWrapper>
				<FooterTop>
					<TopSection>
						<FooterTitle>아워비앤비 지원</FooterTitle>
						<TopUl>
							<TopList>도움말 센터</TopList>
							<TopList>안전 정보</TopList>
							<TopList>예약 취소 옵션</TopList>
							<TopList>아워비앤비의 코로나19 대응 방안</TopList>
							<TopList>장애인 지원</TopList>
							<TopList>이웃 민원 신고</TopList>
						</TopUl>
					</TopSection>
					<TopSection>
						<FooterTitle>커뮤니티</FooterTitle>
						<TopUl>
							<TopList>Ourbnb.org: 재난 구호 숙소</TopList>
							<TopList>아프간 난민 지원</TopList>
							<TopList>다양성과 소속감 증진</TopList>
							<TopList>차별 철폐를 위한 노력</TopList>
						</TopUl>
					</TopSection>
					<TopSection>
						<FooterTitle>호스팅</FooterTitle>
						<TopUl>
							<TopList>호스팅 시작하기</TopList>
							<TopList>아워커버: 호스트를 위한 보호 프로그램</TopList>
							<TopList>호스팅 자료 둘러보기</TopList>
							<TopList>커뮤니티 포럼 방문하기</TopList>
							<TopList>책임감 있는 호스팅</TopList>
						</TopUl>
					</TopSection>
					<TopSection>
						<FooterTitle>소개</FooterTitle>
						<TopUl>
							<TopList>뉴스룸</TopList>
							<TopList>새로운 기능에 대해 알아보기</TopList>
							<TopList>아워비앤비 공동창업자의 메시지</TopList>
							<TopList>채용정보</TopList>
							<TopList>투자자 정보</TopList>
							<TopList>아워비앤비 Luxe</TopList>
						</TopUl>
					</TopSection>
				</FooterTop>
				<Underline />
				<FooterBottom>
					<BottomSection>
						<LeftDiv>
							<Copyright>© 2022 Ourbnb, Inc.</Copyright>
							<Explanation>
								<Dot>·</Dot>
								<Explain href="#">개인정보 처리방침</Explain>
								<Dot>·</Dot>
								<Explain href="#">이용약관</Explain>
								<Dot>·</Dot>
								<Explain href="#">사이트맵</Explain>
								<Dot>·</Dot>
								<Explain href="#">한국의 변경된 환불 정책</Explain>
								<Dot>·</Dot>
								<Explain href="#">회사 세부정보</Explain>
							</Explanation>
						</LeftDiv>
						<RightDiv>
							<RightOption>
								<OptionButton>
									<OptionIcon>
										<FiGlobe />
									</OptionIcon>
									<OptionName>한국어(KR)</OptionName>
								</OptionButton>
								<OptionButton>
									<OptionIcon>
										<BiWon />
									</OptionIcon>
									<OptionName>KRW</OptionName>
								</OptionButton>
							</RightOption>
							<Social>
								<SNS>
									<SNSList>
										<ImFacebook />
									</SNSList>
									<SNSList>
										<ImTwitter />
									</SNSList>
									<SNSList>
										<ImInstagram />
									</SNSList>
									<SNSList>
										<SNSImage src="../../images/blog.png" />
									</SNSList>
									<SNSList>
										<SNSImage src="../../images/post.png" />
									</SNSList>
								</SNS>
							</Social>
						</RightDiv>
					</BottomSection>
				</FooterBottom>
			</FooterWrapper>
		</Container>
	);
};

export default Footer;

// styled-components
const Container = styled.div`
	width: 100%;
	background-color: #f7f7f7;
`;

const FooterWrapper = styled.div`
	width: 100%;
	max-width: 1800px;
	margin: 0 auto;
	font-size: 14px;
	padding-bottom: 3px;
`;

const FooterTop = styled.div`
	width: 92%;
	display: flex;
	justify-content: space-around;
	margin-left: 5%;
`;

const TopSection = styled.section`
	width: 23%;
	margin: 60px 0 15px 0;
`;

const FooterTitle = styled.div`
	font-weight: bold;
	margin-bottom: 6%;
`;

const TopUl = styled.ul``;

const TopList = styled.li`
	margin: 6% 0;
	color: #222222;
`;

const Underline = styled.hr`
	width: 88%;
	height: 1px;
	margin: 20px 0 0 6%;
	border: 0px;
	background-color: #dbdbdb;
`;

const FooterBottom = styled.div`
	margin: 23px 0 0 6%;
`;

const BottomSection = styled.section`
	width: 95.7%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
`;

const LeftDiv = styled.div`
	display: flex;
`;

const Copyright = styled.div`
	margin-right: 3px;
`;

const Explanation = styled.div``;

const Dot = styled.span`
	margin: 0 5px;
`;

const Explain = styled.a`
	color: #222222;
	text-decoration: none;
`;

const RightDiv = styled.div`
	display: flex;
`;

const RightOption = styled.div`
	display: flex;
	margin-right: 30px;
`;

const OptionButton = styled.button`
	display: flex;
	margin: 0 15px;
	border: none;
	background-color: inherit;
	text-decoration: underline;
`;

const OptionIcon = styled.span`
	margin-right: 5px;
	font-size: 15px;
`;

const OptionName = styled.span`
	margin: 0 3px;
	font-size: 14px;
`;

const Social = styled.div``;

const SNS = styled.ul`
	display: flex;
	font-size: 18px;
`;

const SNSList = styled.li`
	margin-right: 25px;
`;

const SNSImage = styled.img`
	width: 18px;
`;
