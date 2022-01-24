import React from 'react';
import styled from 'styled-components';

export default function DetailPic({ img_url }) {
	return (
		<PicWrapper>
			{/* <PicInnerWrapper> */}
			<MainImg>
				<Mimg>
					<img src="./images/1.jpg" alt="img" />
				</Mimg>
			</MainImg>
			<SubImg>
				<SubImgWrapper>
					<img src="./images/2.jpg" alt="img" />
				</SubImgWrapper>
				<SubImgWrapper>
					<img src="./images/3.jpg" alt="img" />
				</SubImgWrapper>
				<SubImgWrapper>
					<img src="./images/4.jpg" alt="img" />
				</SubImgWrapper>
				<SubImgWrapper>
					<img src="./images/5.jpg" alt="img" />
				</SubImgWrapper>
				<ImgModal>::: 사진 모두보기</ImgModal>
			</SubImg>
			{/* </PicInnerWrapper> */}
		</PicWrapper>
	);
}

const PicWrapper = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	margin-bottom: 20px;
`;

const MainImg = styled.div`
	width: 100%;
	height: 400px;
`;

const Mimg = styled.div`
	width: 100%;
	height: 420px;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
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
	height: 300px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const SubImgWrapper = styled.div`
	width: auto;
	margin-left: 10px;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
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
	top: 60%;
	left: 80%;
	width: 150px;
	height: 40px;
	font-size: 20px;
	outline: 0;
	cursor: pointer;
	border-radius: 10px 10px 10px 10px;
	position: absolute;
	z-index: 100;
`;
