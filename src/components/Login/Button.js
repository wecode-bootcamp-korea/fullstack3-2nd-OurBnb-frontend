import React from 'react';
import styled from 'styled-components';

const LoginButton = () => {
	const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=c0684536100a3ce71c6922b994709501&redirect_uri=http://localhost:3000/kakaologin&response_type=code&prompt=login`;

	return (
		<>
			<a href={kakaoAuthUrl}>
				<LoginButtonKakao>
					<KakaoImage src="./images/kakao.png" />
					<Kakao>카카오로 로그인하기</Kakao>
				</LoginButtonKakao>
			</a>
		</>
	);
};

export default LoginButton;

const LoginButtonKakao = styled.div`
	padding: 14px 80px;
`;

const KakaoImage = styled.img`
	width: 15px;
	margin: 3px 0 0 -250px;
`;

const Kakao = styled.div`
	margin: -18px 0 0 25px;
	font-size: 15px;
`;
