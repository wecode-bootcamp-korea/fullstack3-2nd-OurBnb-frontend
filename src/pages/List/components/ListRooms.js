import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListCard from './RoomCard';
import Pagination from './ListPagination';

const RoomsList = ({ giveOffset, rooms, limit, totalRows }) => {
	const area = rooms.location;
	const isDivisibleByTen = totalRows % 10 === 0;
	const lessThanTen = totalRows < 10;
	const needPage = totalRows > limit;

	return (
		<RoomsListWrapper>
			<StyledListSummary>
				{totalRows ? (
					<>
						{(isDivisibleByTen || lessThanTen) && (
							<div>
								{area}에 위치한 {totalRows}개의 숙소
							</div>
						)}
						{!isDivisibleByTen && !lessThanTen && (
							<div>
								{area}에 위치한 {Math.floor(totalRows / 10) * 10}개 이상의 숙소
							</div>
						)}
						<div>
							예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.
							<Link to="#">
								<span>자세히 알아보기</span>
							</Link>
						</div>
					</>
				) : (
					<>
						<div>{area}에 위치한 숙소가 없습니다.</div>
						<div>더 많은 지역을 제공해드리도록 노력하는 ourbnb가 되겠습니다!</div>
					</>
				)}
			</StyledListSummary>
			<StyledList>
				{rooms?.roomList?.map(room => (
					<ListCard key={room.roomId} room={room} />
				))}
			</StyledList>
			{needPage && (
				<Pagination
					totalRows={totalRows}
					limit={limit}
					giveOffset={giveOffset}
					isDivisibleByTen={isDivisibleByTen}
				/>
			)}
		</RoomsListWrapper>
	);
};
export default RoomsList;

const RoomsListWrapper = styled.section`
	grid-area: list;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 0 24px;

	@media (min-width: 744px) {
		li:first-child {
			border-top: 1px solid #f0f0f0;
		}
		li {
			border-bottom: 1px solid #f0f0f0;
		}
	}
`;

const StyledListSummary = styled.div`
	grid-area: result;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	height: min-content;
	margin: 24px 0;
	padding: 0 24px;
	font-size: 0.8rem;

	> div + div {
		padding-top: 24px;
	}
	> div a {
		display: inline-block;
		text-indent: 5px;
	}
	> div span {
		text-decoration: underline;
	}
`;
