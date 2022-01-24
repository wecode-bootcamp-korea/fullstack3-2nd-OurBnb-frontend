import { Link } from 'react-router-dom';
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

	return (
		<StyledListCard key={roomId}>
			<Link to="#">
				<Carousel room={room} />
				<RoomInfo>
					<WishHeart>
						{isWish ? (
							<TiHeartFullOutline className="heart" />
						) : (
							<IoHeartOutline className="heart" />
						)}
					</WishHeart>
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
		</StyledListCard>
	);
};

export default ListCard;

const StyledListCard = styled.li`
	position: relative;
	width: 100%;
	padding: 24px 0;

	& > a {
		display: flex;
		flex-direction: column;
	}

	~ & {
		border-top: 1px solid ${({ theme }) => theme.foreground};
	}

	.arrows {
		display: none;
	}

	@media (min-width: 744px) {
		> a {
			display: flex;
			flex-direction: row;
		}
		&:hover .arrows {
			display: block;
		}
	}
`;

const WishHeart = styled.div`
	position: relative;
	position: absolute;
	top: 20px;
	right: 0;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background: transparent;

	.heart {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 25px;
		z-index: 999;
		cursor: pointer;
		transform: translate(-50%, -50%);
	}

	@media (min-width: 744px) {
		top: -10px;
		right: 0;
		transform: translate(30%, 0);

		&:hover {
			background: #f7f7f7;
		}
	}
`;

const RoomInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
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
