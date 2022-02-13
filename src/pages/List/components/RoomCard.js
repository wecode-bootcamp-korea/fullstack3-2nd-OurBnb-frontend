import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

import { IoHeartOutline } from 'react-icons/io5';
import { TiHeartFullOutline, TiStar } from 'react-icons/ti';

const ListCard = ({ room }) => {
	const {
		roomId,
		roomName,
		address,
		guestCapacity,
		bedCount,
		bedroomCount,
		bathroomCount,
		price,
		roomType,
		reviewCount,
		rate,
		isWish,
	} = room;

	const [isWishClick, setIsWishClick] = useState(isWish);
	const handleWishBtn = () => {
		if (isWishClick) {
			fetch('http://localhost:8000/wishlist/', {
				method: 'DELETE',
				headers: new Headers({
					Authorization: sessionStorage.getItem('access_token'),
					'Content-Type': 'application/json',
					mode: 'cors',
				}),
				body: JSON.stringify({
					roomId: roomId,
				}),
			}).then(res => {
				if (res.status === 204) {
					setIsWishClick(false);
				} else if (res.status === 401) {
					alert('로그인 후 이용바랍니다.');
				}
			});
		} else {
			fetch('http://localhost:8000/wishlist/', {
				method: 'PUT',
				headers: new Headers({
					Authorization: sessionStorage.getItem('access_token'),
					'Content-Type': 'application/json',
					mode: 'cors',
				}),
				body: JSON.stringify({
					roomId: roomId,
				}),
			}).then(res => {
				if (res.status === 201) {
					setIsWishClick(true);
				} else if (res.status === 401) {
					alert('로그인 후 이용바랍니다.');
				} else if (res.status === 400) {
					alert('이미 추가한 숙소 입니다.');
				}
			});
		}
	};

	return (
		<StyledListCard key={roomId}>
			<CardWrapper>
				<Carousel imageString={room.imgUrl} isSuperHost={room.isSuperHost} />
				<WishHeart onClick={handleWishBtn}>
					{isWishClick ? (
						<TiHeartFullOutline className="heartOn heart" />
					) : (
						<IoHeartOutline className="heartOff heart" />
					)}
				</WishHeart>
				<Link to={`/room/${roomId}`}>
					<RoomInfo>
						<RoomDesc>
							{address}의 {roomType}
						</RoomDesc>
						<RoomTitle>{roomName}</RoomTitle>
						<RoomDesc className="details">
							{guestCapacity && <span> 최대 인원 {guestCapacity}명 </span>}
							{bedroomCount && <span> 침실 {bedroomCount}개 </span>}
							{bedCount && <span> 침대 {bedCount}개 </span>}
							{bathroomCount && <span> 욕실 {bathroomCount}개 </span>}
						</RoomDesc>
						{reviewCount && (
							<ReviewWrapper>
								<TiStar className="star" />
								<RatingReview bold="bolder" color="#222222">
									{rate.toFixed(2)}
								</RatingReview>
								<RatingReview color="#a0a0a0"> (후기 {reviewCount}개)</RatingReview>
							</ReviewWrapper>
						)}
						<PriceWrapper>
							<DailyPrice>
								<span>₩{Intl.NumberFormat().format(price)}</span> / 박
							</DailyPrice>
							<TotalPrice>총액 ₩{Intl.NumberFormat().format(price)}</TotalPrice>
						</PriceWrapper>
					</RoomInfo>
				</Link>
			</CardWrapper>
		</StyledListCard>
	);
};

export default ListCard;

const StyledListCard = styled.li`
	position: relative;
	width: 100%;
	padding: 24px 0;

	~ & {
		border-top: 1px solid ${({ theme }) => theme.foreground};
	}

	.arrows {
		display: none;
	}

	@media (min-width: 744px) {
		&:hover .arrows {
			display: block;
		}
	}
`;
const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	& > a {
		flex-grow: 2;
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 744px) {
		display: flex;
		flex-direction: row;
		> a {
			display: flex;
			flex-direction: row;
		}
	}
`;
const WishHeart = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 20px;
	right: 0;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background: transparent;
	z-index: 9;

	.heart {
		font-size: 25px;
		z-index: 99;
		cursor: pointer;

		&:active {
			transform: scale(90%);
			transform-origin: center;
			transition: 0.1s;
		}
	}

	.heartOn {
		color: ${({ theme }) => theme.brandRed};
	}

	@media (min-width: 744px) {
		top: 0;
		right: 0;
		transform: translate(0, 50%);

		&:hover {
			background: #f7f7f7;
		}
	}
`;

const RoomInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 380px;
	margin: 10px 0 0 0;
	padding: 0;
	background-color: ${({ theme }) => theme.background};
	text-overflow: ellipsis;
	font-size: 0.8rem;
	.star {
		color: ${({ theme }) => theme.brandRed};
		font-size: 18px;
		transform: translateY(20%);
	}

	@media (min-width: 744px) {
		position: relative;
		margin: 0 0 0 10px;
		padding: 2px 10px 10px 10px;
		height: auto;
	}
`;

const RoomTitle = styled.h3`
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 1.2rem;
	font-weight: 300;

	@media (min-width: 744px) {
		width: 95%;
		padding: 10px 0 15px 0;

		&:after {
			display: block;
			padding: 10px 0px 0px 0px;
			width: 30px;
			height: 1px;
			border-bottom: 1px solid #d0d0d0;
			content: '   ';
		}
	}
`;

const RoomDesc = styled.div`
	font-size: 1.1rem;

	&.details {
		display: none;
	}

	@media (min-width: 744px) {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.darkGray};

		&.details {
			display: block;
		}

		> span + span {
			&:before {
				content: '‧';
			}
		}
	}
`;

const ReviewWrapper = styled.div`
	order: -1;

	@media (min-width: 744px) {
		position: absolute;
		bottom: 0;
		left: 0;
	}
`;

const RatingReview = styled.span`
	font-size: 0.8rem;
	line-height: 12px;
	font-weight: ${props => props.bold};
	color: ${props => props.color};
`;

const PriceWrapper = styled.div`
	flex: 1;

	@media (min-width: 744px) {
		position: absolute;
		bottom: 0;
		right: 0;

		> div {
			text-align: right;
		}
	}
`;

const DailyPrice = styled.div`
	font-size: 1.1rem;

	margin-bottom: 5px;
	> span {
		font-weight: bolder;
	}
`;

const TotalPrice = styled.div`
	text-decoration: underline;
	color: ${({ theme }) => theme.darkGray};
`;
