import React from 'react';
import styled from 'styled-components';
import { TiStar } from 'react-icons/ti';
import ReviewComp from './ReviewComp';

export default function Review({ reviewData }) {
	const { roomAvgRate, roomReviewCount } = reviewData;
	const roomReviews = reviewData.roomReview;
	const rate = Number(roomAvgRate).toFixed(1);

	return (
		<Wrapper id="review">
			<ReviewWrapper>
				<ReviewCount>
					<Count>
						<TiStar />
					</Count>
					<Count>{rate}</Count>
					<Count> ∙ </Count>
					<Count>후기{roomReviewCount}개</Count>
				</ReviewCount>
				<ReviewBox>
					{roomReviews &&
						roomReviews.map((roomReview, i) => {
							return <ReviewComp key={Math.random()} roomReview={roomReview} />;
						})}
				</ReviewBox>
			</ReviewWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	border-top: 1px solid rgb(221, 221, 221);
	border-bottom: 1px solid rgb(221, 221, 221);
`;

const ReviewWrapper = styled.div`
	display: flex;
	margin-bottom: 30px;
	margin-top: 30px;
	flex-direction: column;
`;

const ReviewCount = styled.ul`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
`;

const Count = styled.li`
	margin-right: 5px;
	:nth-child(1) {
		font-size: 2rem;
		line-height: 1px;
		color: red;
	}
	:nth-child(2),
	:nth-child(3),
	:nth-child(4) {
		font-size: 1.5rem;
	}
`;

const ReviewBox = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 50px;
`;
