import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { FiShare } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

export default function PicModal({ showModal, setShowModal, picData }) {
	// console.log(picData);
	return (
		<div>
			{showModal ? (
				<Wrapper>
					<Header>
						<Back>
							<IoIosArrowBack className="arrow" />
						</Back>
						<ShareSave>
							<Share>
								<ShareButton>
									<ShareButtonInner>
										<ShareIcon>
											<FiShare />
										</ShareIcon>
										<ShareSpan>공유하기</ShareSpan>
									</ShareButtonInner>
								</ShareButton>
							</Share>
							<Save>
								<SaveButton>
									<SaveButtonInner>
										<SaveIcon>
											<AiOutlineHeart />
										</SaveIcon>
										<SaveSpan>저장</SaveSpan>
									</SaveButtonInner>
								</SaveButton>
							</Save>
						</ShareSave>
					</Header>

					<PicContainer>
						<PicBox>
							<FirstSection>
								<img src={picData[0]} alt="img" />
							</FirstSection>

							<SecondSection>
								<SecondLeft>
									<img src={picData[1]} alt="img" />
								</SecondLeft>
								<SecondRight>
									<img src={picData[2]} alt="img" />
								</SecondRight>
							</SecondSection>

							<ThirdSection>
								<ThirdLeft>
									<img src={picData[3]} alt="img" />
								</ThirdLeft>
								<ThirdRight>
									<ThirdRightTop>
										<img src={picData[4]} alt="img" />
									</ThirdRightTop>
									<ThirdRightBottom>
										<img src={picData[5]} alt="img" />
									</ThirdRightBottom>
								</ThirdRight>
							</ThirdSection>

							<FourthSection>
								<FourthLeft>
									<FourthLefttop>
										<img src={picData[6]} alt="img" />
									</FourthLefttop>
									<FourthLeftBottom>
										<img src={picData[7]} alt="img" />
									</FourthLeftBottom>
								</FourthLeft>
								<FourthRight>
									<img src={picData[8]} alt="img" />
								</FourthRight>
							</FourthSection>

							<FifthSection>
								<img src={picData[9]} alt="img" />
							</FifthSection>
						</PicBox>
					</PicContainer>
				</Wrapper>
			) : null}
		</div>
	);
}

const Wrapper = styled.section`
	display: flex;
	width: 100%;
	height: 100vh;
	flex-direction: column;
	z-index: 9999;
`;

const Header = styled.div`
	width: 100%;
	display: flex;
	position: fixed;
	background-color: white;
	justify-content: space-between;
`;

const Back = styled.div`
	font-size: 1.5rem;
	padding: 10px 10px;
`;

const ShareSave = styled.div`
	width: 200px;
	display: flex;
	justify-content: space-between;
`;

//공유하기 버튼 시작
const Share = styled.div`
	display: flex;
`;

const ShareIcon = styled.div`
	width: 30px;
	font-size: 17px;
`;

const ShareSpan = styled.span`
	font-size: 15px;
	text-decoration: underline;
`;

const ShareButton = styled.button`
	width: 100px;
	border: 0;
	outline: 0;
	background: 0;
	cursor: pointer;
`;

const ShareButtonInner = styled.div`
	display: flex;
`;
//공유하기버튼 끝

//저장버튼 시작
const Save = styled.div`
	display: flex;
`;

const SaveIcon = styled.div`
	width: 30px;
	font-size: 17px;
`;

const SaveSpan = styled.span`
	font-size: 15px;
	text-decoration: underline;
`;

const SaveButton = styled.button`
	width: 70px;
	border: 0;
	outline: 0;
	background: 0;
	cursor: pointer;
`;

const SaveButtonInner = styled.div`
	display: flex;
`;

//사진섹션
const PicContainer = styled.section`
	width: 100%;
	// z-index: 99999;
`;

//사진전체
const PicBox = styled.section`
	width: 80%;
	max-width: 800px;
	display: flex;
	margin: 0 auto;
	margin-top: 50px;
	flex-direction: column;
`;

const FirstSection = styled.section`
	height: 400px;
	margin-bottom: 30px;
	cursor: pointer;
	:hover {
		background-color: black;
		opacity: 0.3;
	}
	img {
		object-fit: cover;
	}
`;

const SecondSection = styled.section`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
`;

const SecondLeft = styled.div`
	width: 49%;
	height: 300px;
	cursor: pointer;
	:hover {
		background-color: black;
		opacity: 0.3;
	}
	img {
		object-fit: cover;
	}
`;

const SecondRight = styled.div`
	width: 49%;
	cursor: pointer;
	:hover {
		background-color: black;
		opacity: 0.3;
	}
	img {
		object-fit: cover;
	}
`;

const ThirdSection = styled.section`
	display: flex;
	margin-bottom: 30px;
`;

const ThirdLeft = styled.div`
	width: 50%;
	height: 510px;
	margin-right: 20px;
	cursor: pointer;
	:hover {
		background-color: black;
		opacity: 0.3;
	}
`;

const ThirdRight = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
`;

const ThirdRightTop = styled.div`
	width: 100%;
	height: 250px;
	margin-bottom: 10px;
	cursor: pointer;
	:hover {
		background-color: black;
		opacity: 0.3;
	}
`;

const ThirdRightBottom = styled.div`
	width: 100%;
	height: 250px;
	cursor: pointer;
	:hover {
		background-color: black;
		opacity: 0.3;
	}
`;

const FourthSection = styled.section`
	display: flex;
	margin-bottom: 30px;
`;

const FourthLeft = styled.div`
	width: 50%;
	height: 510px;
	margin-right: 20px;
`;

const FourthLefttop = styled.div`
	width: 100%;
	height: 250px;
	margin-bottom: 10px;
	cursor: pointer;
	:hover {
		background-color: black;
		opacity: 0.3;
	}
`;

const FourthLeftBottom = styled.div`
	width: 100%;
	height: 250px;
	cursor: pointer;
	:hover {
		background-color: black;
		opacity: 0.3;
	}
`;

const FourthRight = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	:hover {
		background-color: black;
		opacity: 0.3;
	}
`;

const FifthSection = styled.section`
	height: 400px;
	margin-bottom: 30px;
	cursor: pointer;
	:hover {
		background-color: black;
		opacity: 0.3;
	}
	background-color: red;
`;
