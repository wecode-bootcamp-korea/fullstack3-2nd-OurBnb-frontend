import { useState } from 'react';
function MyPage() {
	const [imageSrc, setImageSrc] = useState('');

	const encodeFileToBase64 = fileBlob => {
		console.log(typeof fileBlob);
		const reader = new FileReader();
		reader.readAsDataURL(fileBlob);
		console.log(fileBlob);
		return new Promise(resolve => {
			reader.onload = () => {
				setImageSrc(reader.result);
				console.log(typeof reader.result);
				resolve();
			};
		});
	};
	return (
		<main className="container">
			{' '}
			<h2>이미지 미리보기</h2>
			{/* 인풋이미지가 변경되면 온체인지 내부함수에서 파일체크 */}
			<input
				type="file"
				onChange={e => {
					encodeFileToBase64(e.target.files[0]);
				}}
			/>
			<div className="preview"> {imageSrc && <img src={imageSrc} alt="preview-img" />} </div>{' '}
		</main>
	);
}
export default MyPage;
