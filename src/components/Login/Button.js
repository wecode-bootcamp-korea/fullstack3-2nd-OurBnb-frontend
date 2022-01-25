import React from 'react';

const LoginButton = () => {
	const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=c0684536100a3ce71c6922b994709501&redirect_uri=http://localhost:3000/kakaologin&response_type=code&prompt=login`;

	return (
		<div>
			<a href={kakaoAuthUrl}>
				<img src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_wide.png" />
			</a>
		</div>
	);
};

export default LoginButton;
