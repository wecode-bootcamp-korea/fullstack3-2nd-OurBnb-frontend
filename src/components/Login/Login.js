import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import qs from 'qs';

const Login = () => {
	const navigate = useNavigate();
	const [kakaoToken, setKakaoToken] = useState('');
	let params = new URLSearchParams(document.location.search);
	const code = params.get('code');

	const restApiKey = 'c0684536100a3ce71c6922b994709501';
	const redirectUrl = 'http://localhost:3000/kakaologin';

	useEffect(() => {
		fetch('https://kauth.kakao.com/oauth/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
			body: qs.stringify({
				grant_type: 'authorization_code',
				client_id: restApiKey,
				redirect_uri: redirectUrl,
				code: code,
			}),
		})
			.then(res => res.json())
			.then(data => {
				setKakaoToken(data.access_token);
			});
	}, []);

	useEffect(() => {
		if (kakaoToken) {
			fetch('http://localhost:8000/users/kakaologin', {
				method: 'GET',
				headers: { Authorization: kakaoToken },
			})
				.then(res => res.json())
				.then(data => sessionStorage.setItem('access_token', data.ourToken))
				.then(navigate('/'));
		}
	}, [kakaoToken]);

	return <div>Token successfully received</div>;
};

export default Login;
