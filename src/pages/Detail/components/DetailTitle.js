import React from 'react';
import styled from 'styled-components';
import { FiShare } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

export default function DetailTitle({ roomName, roomAdress }) {
	return (
		<TitleWrapper>
			<TitleTop>
				<Title>{roomName}짱쫑님이 호스팅하는 중세 성 전체</Title>
			</TitleTop>
			<TitleBottom>
				<Location>
					<Location>{roomAdress}부산시,부산진구,당감동</Location>
				</Location>
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
	font-size: 30px;
	font-weight: 500;
	padding-top: 10px;
	padding-bottom: 10px;
`;

const TitleBottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Location = styled.span`
	color: #a9a9a9;
	text-decoration: underline;
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
	/* height: 30px; */
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
