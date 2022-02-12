import styled from 'styled-components';
import { useState } from 'react';
import { FiShare } from 'react-icons/fi';
import { TiStar } from 'react-icons/ti';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function DetailTitle({ mainInfoData, reviewAvgData, reviewCountData }) {
	const { roomName, address } = mainInfoData;
	const rate = Number(reviewAvgData).toFixed(1);
	const [likeClick, setLikeClick] = useState(false);

	const heartButton = () => {
		setLikeClick(!likeClick);
	};
	return (
		<TitleWrapper>
			<TitleTop>
				<Title>{roomName}</Title>
			</TitleTop>
			<TitleBottom>
				<ContentsUl>
					<TiStar />
					<ContentsLi>{rate}</ContentsLi>
					<ContentsLi> ∙ </ContentsLi>
					<ContentsLi>후기{reviewCountData}개</ContentsLi>
					<ContentsLi> ∙ </ContentsLi>
					<ContentsLi>{address}</ContentsLi>
				</ContentsUl>
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
								<SaveIcon>{heartButton ? <AiOutlineHeart /> : <AiFillHeart />}</SaveIcon>
								<SaveSpan>저장</SaveSpan>
							</SaveButtonInner>
						</SaveButton>
					</Save>
				</ShareSave>
			</TitleBottom>
		</TitleWrapper>
	);
}

const TitleWrapper = styled.div`
	width: 100%;
	height: 20;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

const TitleTop = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Title = styled.span`
	font-size: 2rem;
	font-weight: 500;
	padding-top: 10px;
	padding-bottom: 10px;
`;

const TitleBottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ContentsUl = styled.ul`
	display: flex;
	:nth-child(1) {
		color: red;
		font-size: 1rem;
	}
`;

const ContentsLi = styled.li`
	font-size: 0.9rem;
	margin-right: 10px;
	color: #a9a9a9;
	:nth-child(2) {
		color: black;
	}
	:nth-child(4),
	:nth-child(6) {
		color: black;
		cursor: pointer;
		text-decoration: underline;
	}
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
	font-size: 16px;
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
