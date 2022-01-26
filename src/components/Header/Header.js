import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiGlobe } from 'react-icons/fi';
import { IoPersonCircle } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import Modal from './Modal';
import Calendar from '../Calendar';

const Header = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const openModal = () => {
		setModalVisible(true);
	};
	const closeModal = () => {
		setModalVisible(false);
	};

	const kakaoAuthurl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&response_type=code&prompt=login`;

	const [scrollPosition, setScrollPosition] = useState(0);

	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};

	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
	});

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(null);
	const onChange = dates => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = e => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	return (
		<HeaderWrapper className={scrollPosition < 60 ? 'header' : 'header_change'}>
			<Link to="/">
				<Logo>
					<LogoImage src="../../images/logo1.png" />
					<LogoName>ourbnb</LogoName>
				</Logo>
			</Link>
			<HeaderButtons>
				<HeaderButton>
					<HeaderLabel>
						<HeaderInput>숙소</HeaderInput>
					</HeaderLabel>
				</HeaderButton>
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
			<Profile onClick={openModal}>
				<Lines>
					<Line />
					<Line />
					<Line />
				</Lines>
				<User>
					<IoPersonCircle />
				</User>
			</Profile>
			{modalVisible && (
				<Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal}>
					<ModalListTop>
						<Signup>회원가입</Signup>
					</ModalListTop>
					<ModalList>
						<Login>
							<a href={kakaoAuthurl}>로그인</a>
						</Login>
					</ModalList>
					<ModalLine />
					<ModalList>
						<Login>숙소 호스트 되기</Login>
					</ModalList>
					<ModalList>
						<Login>체험 호스팅하기</Login>
					</ModalList>
					<ModalListBottom>
						<Login>도움말</Login>
					</ModalListBottom>
				</Modal>
			)}
			<Search>
				<SearchingLocation>
					<SearchButton>
						<Location>
							<SearchTitle>위치</SearchTitle>
							<SearchLocationOption placeholder="어디로 여행가세요?"></SearchLocationOption>
						</Location>
					</SearchButton>
				</SearchingLocation>
				<Contour />
				<SearchingDate>
					<SearchButton>
						<Calendar startDate={startDate} endDate={endDate} onChange={onChange} isOpen={isOpen} />
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
					<BiSearch />
				</Finder>
			</Search>
		</HeaderWrapper>
	);
};

export default Header;

// styled-components
const HeaderWrapper = styled.div`
	width: 100%;
	margin-top: 15px;
	background-color: 'transparent';
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
	color: ${props => props.color || '#ffffff'};
	cursor: pointer;
`;

const HeaderButtons = styled.div`
	display: flex;
	justify-content: space-around;
	width: 17%;
	margin: -30px 0 0 41.5%;
`;

const HeaderButton = styled.div`
	background-color: transparent;
	border: none;
	font-size: 15px;
	cursor: pointer;

	::before {
		background-color: ${props => props.backgroundcolor || '#ffffff'};
		border-radius: 1px;
		bottom: 0px;
		content: '';
		height: 2px;
		top: 110px;
		left: 43.8%;
		margin-left: -9px;
		position: absolute;
		transition: 0.2s -ms-transform cubic-bezier(0, 0, 0.1, 1),
			0.2s -webkit-transform cubic-bezier(0, 0, 0.1, 1), 0.2s transform cubic-bezier(0, 0, 0.1, 1);
		width: 18px;
		transform: scaleX(1);
	}
`;

const HeaderLabel = styled.div`
	border-bottom: #ffffff;
`;

const HeaderInput = styled.span`
	color: ${props => props.color || '#ffffff'};
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
	color: ${props => props.color || '#ffffff'};
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
	display: flex;
	justify-content: space-around;
	width: 59%;
	height: 68px;
	margin: 1% 0 0 20%;
	border-radius: 50px;
	background-color: white;
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
