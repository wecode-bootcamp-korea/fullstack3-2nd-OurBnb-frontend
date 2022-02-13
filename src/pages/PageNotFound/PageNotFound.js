import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoBalloon } from 'react-icons/io5';

const PageNotFound = () => {
	return (
		<HelpContainer>
			<HelpWrapper>
				<Link to="/">
					<Logo>
						<LogoImage src="../../images/logo1.png" />
						<LogoName>ourbnb</LogoName>
					</Logo>
				</Link>
				<ErrorMsg>Oops!</ErrorMsg>
				<ErrorMsg>없는 페이지에 접근 하셨네요!</ErrorMsg>
				<ErrorMsg>계획에 없던 곳을 찾는것도 여행의 매력</ErrorMsg>
				<ErrorMsg>
					풍선을 누르고 여행을 떠나보세요
					<Link to="/">
						<IoBalloon
							style={{
								color: 'ff385c',
								fontSize: '7rem',
								position: 'absolute',
								right: '0',
								bottom: '0',
							}}
						/>
					</Link>
				</ErrorMsg>
			</HelpWrapper>
		</HelpContainer>
	);
};

export default PageNotFound;

const HelpContainer = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	background-color: #000000;
`;
const HelpWrapper = styled.div`
	width: 60%;
	margin: 0 auto;
	padding-top: 10%;
`;
const Logo = styled.div`
	display: flex;
	align-items: center;
`;

const LogoImage = styled.img`
	width: 40px;
	height: 40px;
	cursor: pointer;
`;

const LogoName = styled.h1`
	margin-left: 5px;
	color: #ffffff;
	cursor: pointer;
`;

const ErrorMsg = styled.h2`
	position: relative;
	padding-top: 15px;
	font-size: 3rem;
	color: #ffffff;
`;
