import React from 'react';

import styled from 'styled-components';

export default function DetailPic({ mainInfoData, openModal }) {
	const imagesString = '' + mainInfoData.imgUrl;
	const allImgs = imagesString.split(',');

	return (
		<PicWrapper>
			<MainImg>
				<Mimg>
					<img src={allImgs[0]} alt="img" />
				</Mimg>
			</MainImg>

			<SubImg>
				<SubImgWrapper>
					<img src={allImgs[1]} alt="img" />
				</SubImgWrapper>
				<SubImgWrapper>
					<img src={allImgs[2]} alt="img" />
				</SubImgWrapper>
				<SubImgWrapper>
					<img src={allImgs[3]} alt="img" />
				</SubImgWrapper>
				<SubImgWrapper>
					<img src={allImgs[4]} alt="img" />
				</SubImgWrapper>
			</SubImg>

			<ImgModal onClick={openModal}>::: 사진 모두보기</ImgModal>
		</PicWrapper>
	);
}

const PicWrapper = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	position: relative;
	margin-bottom: 20px;
`;

const MainImg = styled.div`
	width: 100%;
	height: 400px;
`;

const Mimg = styled.div`
	width: 100%;
	height: 400px;
	cursor: pointer;
	img {
		width: 100%;
		height: 410px;
		object-fit: cover;
		border-top-left-radius: 15px;
		border-bottom-left-radius: 15px;
	}
	&:hover {
		background-color: black;
		opacity: 0.6;
	}
`;

const SubImg = styled.div`
	width: 100%;
	height: 400px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const SubImgWrapper = styled.div`
	width: auto;
	height: 200px;
	margin-left: 10px;
	cursor: pointer;
	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}
	&:hover {
		background-color: black;
		opacity: 0.6;
	}

	&:nth-child(1) {
		margin-bottom: 10px;
	}

	&:nth-child(2) {
		margin-bottom: 10px;
		img {
			border-top-right-radius: 15px;
		}
	}

	&:nth-child(4) {
		position: relative;
		img {
			border-bottom-right-radius: 15px;
		}
	}
`;

const ImgModal = styled.button`
	bottom: 10px;
	right: 10px;
	width: 150px;
	height: 40px;
	font-size: 20px;
	outline: 0;
	cursor: pointer;
	border-radius: 10px 10px 10px 10px;
	position: absolute;
	z-index: 100;
`;
