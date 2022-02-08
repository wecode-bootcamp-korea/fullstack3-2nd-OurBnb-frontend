import styled from 'styled-components';

const ReservationInfo = ({ el }) => {
	const { imgUrl, address, hostName, checkIn, checkOut } = el;
	return (
		<>
			<ReservationWrapper>
				<ReservationImg src={imgUrl} width={'80px'} height={'80px'} />
				<ReservationDesc>
					<Address>{address}</Address>
					<Host>호스트 : {hostName}님</Host>
					<Date>
						{checkIn.slice(0, 4)}년 {checkIn.slice(5, 7)}월 {checkIn.slice(8, 10)}일 -{' '}
						{checkOut.slice(0, 4)}년 {checkOut.slice(5, 7)}월 {checkOut.slice(8, 10)}일
					</Date>
				</ReservationDesc>
			</ReservationWrapper>
		</>
	);
};

export default ReservationInfo;

const ReservationWrapper = styled.section`
	display: flex;
	margin: 15px 0;
`;

const ReservationDesc = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-left: 10px;
`;

const ReservationImg = styled.img`
	border-radius: 10px;
`;

const Address = styled.div`
	font-size: 17px;
	font-weight: 600;
`;

const Host = styled.div`
	font-size: 14px;
	color: #717171;
`;

const Date = styled.div`
	font-size: 14px;
	color: #717171;
`;
