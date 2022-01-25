import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiGlobe } from 'react-icons/fi';
import { IoPersonCircle } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
// import Modal from '../Header/components/Modal';

const Header = () => {
	// const [modalVisible, setModalVisible] = useState(false);

	// const openModal = () => {
	// 	setModalVisible(true);
	// };
	// const closeModal = () => {
	// 	setModalVisible(false);
	// };

	const [scrollPosition, setScrollPosition] = useState(0);

	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};

	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
	});

	return (
		<>
			<HeaderWrapper>
				<Logo>
					<LogoImage src="../../images/logo1.png" />
					<LogoName>ourbnb</LogoName>
				</Logo>
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
				<Profile>
					<Lines>
						<Line></Line>
						<Line></Line>
						<Line></Line>
					</Lines>
					<User>
						<IoPersonCircle />
					</User>
				</Profile>
				<Search>
					<SearchingLocation>
						<SearchButton>
							<Location>
								<SearchTitle>위치</SearchTitle>
								<SearchOption>어디로 여행가세요?</SearchOption>
							</Location>
						</SearchButton>
					</SearchingLocation>
					<Contour></Contour>
					<SearchingDate>
						<SearchButton>
							<CheckIn>
								<SearchTitle>체크인</SearchTitle>
								<SearchOption>날짜 입력</SearchOption>
							</CheckIn>
						</SearchButton>
					</SearchingDate>
					<Contour></Contour>
					<SearchingDate>
						<SearchButton>
							<CheckOut>
								<SearchTitle>체크아웃</SearchTitle>
								<SearchOption>날짜 입력</SearchOption>
							</CheckOut>
						</SearchButton>
					</SearchingDate>
					<Contour></Contour>
					<SearchingGuest>
						<SearchButton>
							<Guest>
								<SearchTitle>인원</SearchTitle>
								<SearchOption>게스트 추가</SearchOption>
							</Guest>
						</SearchButton>
					</SearchingGuest>
				</Search>
				<Finder>
					<BiSearch />
				</Finder>
			</HeaderWrapper>
		</>
	);
};

export default Header;

// styled-components
const HeaderWrapper = styled.div`
	width: 100%;
	margin-top: 15px;
	background-color: ${({ theme }) => theme.background || 'transparent'};
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
	color: ${({ theme }) => theme.foreground || '#ffffff'};
	cursor: pointer;
`;

const HeaderButtons = styled.div`
	display: flex;
	justify-content: space-around;
	width: 17%;
	margin: -30px 0 0 41.5%;
`;

const HeaderButton = styled.button`
	background-color: transparent;
	border: none;
	font-size: 15px;
	cursor: pointer;
`;

const HeaderLabel = styled.label`
	border-bottom: #ffffff;
`;

const HeaderInput = styled.div`
	color: ${({ theme }) => theme.foreground || '#ffffff'};
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
	color: ${({ theme }) => theme.foreground || '#ffffff'};
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

const Search = styled.div`
	display: flex;
	justify-content: space-around;
	width: 59%;
	height: 68px;
	margin: 1% 0 0 20%;
	border-radius: 50px;
	background-color: white;
`;

const SearchingLocation = styled.label`
	width: 30%;
	cursor: pointer;

	&:hover {
		background-color: #e3e3e3;
		border-radius: 35px;
	}
`;

const SearchingDate = styled.label`
	width: 20%;
	cursor: pointer;

	&:hover {
		background-color: #e3e3e3;
		border-radius: 35px;
	}
`;

const SearchingGuest = styled.label`
	width: 30%;
	cursor: pointer;
	z-index: 50;

	&:hover {
		background-color: #e3e3e3;
		border-radius: 35px;
	}
`;

const SearchButton = styled.div`
	padding: 0 10px;
	margin-left: 50px;
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
	margin: 15px 30px 0 -30px;
`;

const CheckIn = styled.div`
	margin: 15px 0 0 -40px;
`;

const CheckOut = styled.div`
	margin: 15px 0 0 -40px;
`;

const Guest = styled.div`
	margin: 15px 50px 0 -40px;
`;

const SearchOption = styled.div`
	font-size: 14px;
	color: #959595;
`;

const SearchTitle = styled.div`
	font-size: 12px;
	font-weight: bold;
	color: #000000;
	margin-bottom: 3px;
`;

const Finder = styled.div`
	width: 50px;
	height: 50px;
	padding: 15px;
	margin: -60px 0 0 75%;
	border: none;
	border-radius: 50px;
	color: #ffffff;
	font-size: 20px;
	background-color: #ff385c;
`;
