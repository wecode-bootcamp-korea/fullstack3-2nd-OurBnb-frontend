import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiGlobe } from 'react-icons/fi';
import { IoPersonCircle } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import Calendar from '../Calendar';
import ProfileModal from './ProfileModal';
import LoginModal from './LoginModal';
import SearchModal from './SearchModal';
import LoginButton from '../Login/Button';

const Header = ({ isMain, isTrips, isSticky }) => {
	const [loginButton, setLoginButton] = useState('로그인');
	const navigate = useNavigate();
	const tokenValue = sessionStorage.getItem('access_token');

	useEffect(() => {
		if (tokenValue) {
			setLoginButton('로그아웃');
		}
	}, [tokenValue]);

	const [profileModalVisible, setProfileModalVisible] = useState(false);
	const openProfileModal = () => {
		setProfileModalVisible(true);
	};
	const closeProfileModal = () => {
		setProfileModalVisible(false);
		setLoginModalVisible(false);
	};

	const [loginModalVisible, setLoginModalVisible] = useState(false);
	const openLoginModal = () => {
		if (loginButton === '로그인') {
			setLoginModalVisible(true);
		} else {
			sessionStorage.removeItem('access_token');
			navigate('/');
			setLoginButton('로그인');
		}
	};
	const closeLoginModal = () => {
		setLoginModalVisible(false);
	};

	const [searchModalVisible, setSearchModalVisible] = useState(false);
	const openSearchModal = () => {
		setSearchModalVisible(true);
	};
	const closeSearchModal = () => {
		setSearchModalVisible(false);
	};

	const [searchLocation, setSearchLocation] = useState('');
	const handleInput = e => {
		setSearchLocation(e.target.value);
	};

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(null);
	const onChange = dates => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	const checkInDate = `${startDate.getFullYear()}-${
		startDate.getMonth() + 1
	}-${startDate.getDate()}`;
	const checkOutDate = endDate
		? `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`
		: null;

	const searchLinkAddress =
		checkInDate && checkOutDate
			? `/${searchLocation}/room?checkin=${checkInDate}&checkout=${checkOutDate}`
			: `/${searchLocation}/room`;

	const [isOpen, setIsOpen] = useState(false);
	const handleClick = e => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};
	const closeCalendar = () => {
		setIsOpen(false);
	};

	return (
		<HeaderContainer isSticky={isSticky}>
			<HeaderWrapper>
				<Link to="/">
					<Logo>
						{isMain ? (
							<LogoImage src="../../images/logo1.png" />
						) : (
							<LogoImage src="../../images/logo2.png" />
						)}

						<LogoName>ourbnb</LogoName>
					</Logo>
				</Link>
				<HeaderButtons isTrips={isTrips}>
					<SelectedHeaderButton>
						<HeaderLabel>
							<HeaderInput>숙소</HeaderInput>
						</HeaderLabel>
					</SelectedHeaderButton>
					<HeaderButton>
						<HeaderLabel>
							<HeaderInput>체험</HeaderInput>
						</HeaderLabel>
					</HeaderButton>
					<HeaderButton>
						<HeaderLabel>
							<HeaderInput>온라인 체험</HeaderInput>
						</HeaderLabel>
					</HeaderButton>
				</HeaderButtons>
				<HeaderOption>
					<HeaderChoice>호스트 되기</HeaderChoice>
					<HeaderChoice>
						<FiGlobe />
					</HeaderChoice>
				</HeaderOption>
				<Profile onClick={openProfileModal}>
					<Lines>
						<Line />
						<Line />
						<Line />
					</Lines>
					<User>
						<IoPersonCircle />
					</User>
				</Profile>
				{profileModalVisible && (
					<ProfileModal
						visible={profileModalVisible}
						closable={true}
						maskClosable={true}
						onClose={closeProfileModal}
					>
						<ModalListTop>
							<Signup>회원가입</Signup>
						</ModalListTop>
						<ModalList onClick={openLoginModal}>
							<Login>{loginButton}</Login>
						</ModalList>
						{loginModalVisible && (
							<LoginModal
								visible={loginModalVisible}
								closable={true}
								maskClosable={true}
								onClose={closeLoginModal}
							>
								<LoginLogoImage src="../../images/logo2.png" />
								<LoginLogo>아워비앤비 회원가입 및 로그인</LoginLogo>
								<ModalLine />
								<LoginComment>아워비앤비에 오신 것을 환영합니다.</LoginComment>
								<KakaoLoginButton>
									<LoginButton />
								</KakaoLoginButton>
							</LoginModal>
						)}
						<ModalLine />
						<ModalList>
							<Link to="/trips">
								<Login>여행</Login>
							</Link>
						</ModalList>
						<ModalList>
							<Login>숙소 호스트 되기</Login>
						</ModalList>
						<ModalList>
							<Login>체험 호스팅하기</Login>
						</ModalList>
						<ModalListBottom>
							<Login>도움말</Login>
						</ModalListBottom>
					</ProfileModal>
				)}
				<Search isTrips={isTrips}>
					<SearchingLocation onClick={openSearchModal}>
						<SearchButton>
							<Location>
								<SearchTitle>위치</SearchTitle>
								<SearchLocationOption placeholder="어디로 여행가세요?" onChange={handleInput} />
							</Location>
						</SearchButton>
					</SearchingLocation>
					{searchModalVisible && (
						<SearchModal
							visible={searchModalVisible}
							closable={true}
							maskClosable={true}
							onClose={closeSearchModal}
						>
							<LocationMent>언제 어디로든 떠나는 여행</LocationMent>
							<Link to="/제주/room">
								<LocationFlexible>
									<LocationSearch>유연한 검색</LocationSearch>
									<Right>&rang;</Right>
								</LocationFlexible>
							</Link>
						</SearchModal>
					)}
					<Contour />
					<SearchingDate>
						<SearchButton>
							<CheckIn onClick={handleClick}>
								<SearchTitle>체크인</SearchTitle>
								<SearchDateOption>
									{startDate
										? `${startDate.getMonth() + 1}월 ${startDate.getDate()}일 `
										: '날짜 입력'}
								</SearchDateOption>
							</CheckIn>
						</SearchButton>
					</SearchingDate>
					<CalendarWrapper>
						<Calendar
							startDate={startDate}
							endDate={endDate}
							onChange={onChange}
							isOpen={isOpen}
							closeCalendar={closeCalendar}
						/>
					</CalendarWrapper>
					<Contour />
					<SearchingDate>
						<SearchButton>
							<CheckOut onClick={handleClick}>
								<SearchTitle>체크아웃</SearchTitle>
								<SearchDateOption>
									{endDate ? `${endDate.getMonth() + 1}월 ${endDate.getDate()}일 ` : '날짜 입력'}
								</SearchDateOption>
							</CheckOut>
						</SearchButton>
					</SearchingDate>
					<Contour />
					<SearchingGuest>
						<SearchButton>
							<Guest>
								<SearchTitle>인원</SearchTitle>
								<SearchGuestOption>게스트 추가</SearchGuestOption>
							</Guest>
						</SearchButton>
					</SearchingGuest>
					<Finder>
						<Link to={searchLinkAddress}>
							<BiSearch style={{ color: '#ffffff' }} />
						</Link>
					</Finder>
				</Search>
			</HeaderWrapper>
		</HeaderContainer>
	);
};

export default Header;

// styled-components

const HeaderContainer = styled.div`
	position: ${props => (props.isSticky ? 'sticky' : '')};
	top: 0;
	width: 100%;
	height: min-content;
	background-color: ${props => props.theme.background};
	z-index: 99999;
`;

const HeaderWrapper = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: 0 auto;
	padding: 0 0 15px;
`;

const Logo = styled.div`
	display: flex;
	margin: -5px 0 0 2%;
`;

const LogoImage = styled.img`
	margin: 30px 0 0 50px;
	width: 40px;
	height: 40px;
	cursor: pointer;
`;

const LogoName = styled.h2`
	margin: 2.8% 0 0 5px;
	color: ${props => props.theme.brandRed || props.theme.foreground};
	cursor: pointer;
`;

const HeaderButtons = styled.div`
	display: ${props => (props.isTrips ? 'none' : 'flex')};
	justify-content: space-around;
	width: 17%;
	margin: -30px 0 0 41.5%;
`;

const HeaderButton = styled.div`
	position: relative;
	background-color: transparent;
	border: none;
	font-size: 15px;
	cursor: pointer;

	::before {
		background-color: ${props => props.theme.foreground};
		border-radius: 1px;
		bottom: 0px;
		content: '';
		height: 2px;
		bottom: -10px;
		left: 20%;
		position: absolute;
		transition: 0.2s -ms-transform cubic-bezier(0, 0, 0.1, 1),
			0.2s -webkit-transform cubic-bezier(0, 0, 0.1, 1), 0.2s transform cubic-bezier(0, 0, 0.1, 1);
		width: 18px;
		transform: scaleX(1);
		display: none;
	}
	&:hover {
		::before {
			display: block;
		}
	}
`;

const SelectedHeaderButton = styled(HeaderButton)`
	::before {
		display: block;
	}
`;

const HeaderLabel = styled.div`
	border-bottom: #ffffff;
`;

const HeaderInput = styled.span`
	color: ${props => props.theme.foreground};
`;

const HeaderOption = styled.ul`
	width: 10%;
	margin: -30px 0 0 79%;
	display: flex;
`;

const HeaderChoice = styled.button`
	padding: 12px;
	border: none;
	border-radius: 2rem;
	background-color: transparent;
	color: ${props => props.theme.foreground};
	font-size: 15px;
	cursor: pointer;
`;

const Profile = styled.button`
	display: flex;
	margin: -45px 0 0 89%;
	padding: 0 2px;
	border: 1px solid #e3e3e3;
	border-radius: 1.7rem;
	background-color: white;
	cursor: pointer;
`;

const Lines = styled.div`
	width: 15px;
	margin: 13px 7px 0 13px;
`;

const Line = styled.hr`
	margin: 2px 0;
	border: 1px solid black;
`;

const User = styled.span`
	margin: 3px 5px 0 0;
	font-size: 32px;
	color: gray;
`;

const ModalListTop = styled.div`
	width: 100%;

	&:hover {
		width: 100%;
		background-color: #e3e3e3;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
`;

const ModalList = styled.div`
	width: 100%;

	&:hover {
		width: 100%;
		background-color: #e3e3e3;
	}
`;

const ModalListBottom = styled.div`
	width: 100%;

	&:hover {
		width: 100%;
		background-color: #e3e3e3;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
`;

const Signup = styled.label`
	font-size: 14px;
	font-weight: 600;
	line-height: 3;
	margin: 5px 15px;
`;

const Login = styled.label`
	font-size: 14px;
	line-height: 3;
	margin: 5px 15px;
`;

const ModalLine = styled.hr`
	height: 1px;
	border: 0px;
	background-color: #e0e0e0;
`;

const Search = styled.div`
	position: relative;
	display: ${props => (props.isTrips ? 'none' : 'flex')};
	justify-content: space-around;
	width: 59%;
	width: min-content;
	height: 68px;
	margin: 1% 0 0 20%;
	border-radius: 50px;
	border: 1px solid ${props => props.theme.border};
	box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
	background-color: white;
`;

const LoginLogoImage = styled.img`
	width: 25px;
	margin: -20px 0 5px 60px;
`;

const LoginLogo = styled.div`
	margin: -28px 0 20px 90px;
	font-size: 14px;
	font-weight: 500;
`;

const LoginComment = styled.div`
	margin: 20px 0 0 0;
	font-size: 20px;
	text-align: center;
`;

const KakaoLoginButton = styled.button`
	margin: 30px 0 0 2px;
	border: 2px solid #c9c9c9;
	border-radius: 10px;
	background-color: #ffffff;
`;

const SearchingLocation = styled.button`
	width: 30%;
	background-color: inherit;
	border: none;
	border-top-left-radius: 35px;
	border-bottom-left-radius: 35px;
	cursor: pointer;

	&:hover {
		background-color: #e3e3e3;
		border-radius: 35px;
	}
`;

const LocationMent = styled.div`
	margin: -20px 0 0 5px;
	font-size: 12px;
	font-weight: 700;
`;

const LocationFlexible = styled.button`
	margin: 30px 0 0 5px;
	padding: 10px 10px;
	border: 1px solid #b6b6b6;
	border-radius: 30px;
	background-color: #ffffff;

	&:hover {
		box-shadow: 0 0 12px 3px #e6e6e6;
	}
`;

const LocationSearch = styled.div`
	margin: 3px 0 0 -180px;
	font-size: 16px;
	font-weight: 600;
	background: linear-gradient(90deg, #6f019c 0%, #c6017e 135.12%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Right = styled.div`
	margin: -20px 0 0 270px;
	font-size: 18px;
	background: linear-gradient(90deg, #6f019c 0%, #c6017e 135.12%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const SearchingDate = styled.button`
	width: 20%;
	background-color: inherit;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #e3e3e3;
		border-radius: 35px;
	}
`;

const SearchingGuest = styled.button`
	width: 30%;
	background-color: inherit;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #e3e3e3;
		border-radius: 35px;
	}
`;

const SearchButton = styled.div`
	padding: 0 10px;
	margin: 15px 0 0 50px;
	border-radius: 50px;
`;

const CalendarWrapper = styled.div`
	margin-top: 84px;
`;

const Contour = styled.hr`
	width: 1px;
	height: 30px;
	margin-top: 18px;
	border: 0px;
	background-color: #e3e3e3;
	rotate: calc();
`;

const Location = styled.div`
	width: 200px;
	margin: -15px 30px 0 -30px;
`;

const CheckIn = styled.div`
	width: 130px;
	margin: -15px 0 0 -40px;
`;

const CheckOut = styled.div`
	width: 130px;
	margin: -15px 0 0 -40px;
`;

const Guest = styled.div`
	width: 130px;
	margin: -15px 50px 0 -40px;
`;

const SearchTitle = styled.div`
	text-align: left;
	font-size: 12px;
	font-weight: bold;
	color: #000000;
	margin-bottom: 3px;
`;

const SearchLocationOption = styled.input`
	font-size: 14px;
	margin-left: -55px;
	color: #959595;
	border: none;
	outline: none;
	background-color: transparent;

	::placeholder {
		color: #959595;
		background-color: inherit;
	}
`;

const SearchDateOption = styled.div`
	margin-left: -80px;
	font-size: 14px;
	color: #959595;
`;

const SearchGuestOption = styled.div`
	margin-left: -65px;
	font-size: 14px;
	color: #959595;
`;

const Finder = styled.button`
	width: 50px;
	height: 50px;
	padding: 15px;
	margin: 8px 10px 0 0;
	border: none;
	border-radius: 50px;
	color: #ffffff;
	font-size: 20px;
	background-color: #ff385c;
	cursor: pointer;
`;
