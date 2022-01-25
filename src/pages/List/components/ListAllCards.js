import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListCard from './ListCard';
import PagenationBtn from './PagenationBtn';

const RoomsList = ({ rooms, totalRows, limit, setOffset }) => {
	return (
		<>
			<StyledListSummary>
				{rooms?.roomList ? (
					<>
						<div>
							{rooms.location}에 위치한 {rooms?.roomList?.length}개 이상의 숙소
						</div>
						<div>
							예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.
							<Link to="#">
								<span>자세히 알아보기</span>
							</Link>
						</div>
					</>
				) : (
					<div>{rooms.location}에 위치한 숙소가 없습니다.</div>
				)}
			</StyledListSummary>
			<StyledList>
				{rooms?.roomList?.map(room => (
					<ListCard key={room.roomId} room={room} />
				))}
			</StyledList>
			<PagenationBtn totalRows={totalRows} limit={limit} setOffset={setOffset} />
		</>
	);
};
export default RoomsList;

const StyledList = styled.ul`
	grid-area: list;
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
	margin: 24px 0;
	padding: 24px 24px;
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
