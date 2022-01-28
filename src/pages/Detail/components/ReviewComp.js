import React from 'react';
import styled from 'styled-components';

export default function ReviewComp({ roomReview }) {
	const { username, imgUrl, review, rate, reviewCreatedAt } = roomReview;
	const modifiedYear = reviewCreatedAt.slice(0, 4);
	const modifiedMonth = reviewCreatedAt.slice(3, 4);

	return (
		<UserContainer>
			<ContentBox>
				<UserPic src={imgUrl} alt="img" />
				<NameDate>
					<Name>
						{username} ∙ {rate}점
					</Name>
					<Date>
						{modifiedYear}년 {modifiedMonth}월
					</Date>
				</NameDate>
			</ContentBox>
			<ReviewText>{review}</ReviewText>
		</UserContainer>
	);
}
const UserPic = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin: 0 15px 0 5px;
	background-color: gray;
`;

const NameDate = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Name = styled.div`
	font-size: 1rem;
	margin-bottom: 8px;
`;

const Date = styled.div`
	font-size: 0.8rem;
`;

const UserContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

const ContentBox = styled.div`
	display: flex;
	/* flex-direction: column; */
`;

const ReviewText = styled.div`
	/* width: 200px; */
	font-size: 1rem;
	margin-top: 20px;
	word-break: keep-all;
`;
