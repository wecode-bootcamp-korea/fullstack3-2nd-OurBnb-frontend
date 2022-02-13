import { useState } from 'react';
import styled from 'styled-components';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Carousel = ({ imageString, isSuperHost }) => {
	const imagesArray = imageString.split(',');
	const [currentImage, setCurrentImage] = useState(0);
	const [isMoving, setIsMoving] = useState(false);
	const isFirst = currentImage === 0;
	const isLast = currentImage === imagesArray.length - 1;

	const moveSlide = newImage => {
		setCurrentImage(newImage);
		setIsMoving(true);
	};

	const slideImage = ({ target: { id } }) => {
		if (isMoving) return;
		if (id === 'left' && isFirst) return;
		if (id === 'right' && isLast) return;

		const xAxis = id === 'left' ? -1 : 1;
		moveSlide(currentImage + 1 * xAxis, 500);
	};

	const slideMoved = () => {
		setIsMoving(false);
	};

	return (
		<CarouselWrapper>
			<Frame>
				<SuperHostTag isSuperHost={isSuperHost} />
				<ImageList currentImage={currentImage} onTransitionEnd={slideMoved}>
					{imagesArray.map((url, index) => (
						<li key={index}>
							<StyledImage src={url} />
						</li>
					))}
				</ImageList>
				{!isFirst && (
					<LeftButton>
						<RiArrowLeftSLine id="left" className="arrowIcons" onClick={slideImage} />
					</LeftButton>
				)}
				{!isLast && (
					<RightButton>
						<RiArrowRightSLine id="right" className="arrowIcons" onClick={slideImage} />
					</RightButton>
				)}
				<DotFrame>
					<DotWrapper>
						{Array.from({ length: 5 }).map(i => (
							<Dot key={Math.random()} />
						))}
					</DotWrapper>
				</DotFrame>
			</Frame>
		</CarouselWrapper>
	);
};

export default Carousel;

const DotFrame = styled.div`
	position: relative;
	position: absolute;
	width: 100%;
	bottom: 8px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const DotWrapper = styled.div`
	width: 25%;
	height: 100%;
	display: flex;
	overflow: hidden;
	z-index: 9;
	justify-content: space-evenly;
`;

const Dot = styled.div`
	background-color: white;
	opacity: 0.7;
	width: 5px;
	height: 5px;
	border-radius: 50%;
`;

const CarouselWrapper = styled.div`
	width: 100%;
	@media (min-width: 744px) {
		width: 300px;
		z-index: 9;
	}
`;

const Frame = styled.div`
	@media (max-width: 743px) {
		position: relative;
		flex: 1;
		width: 100%;
		height: 0;
		padding-bottom: 65%;
		border: 1px solid ${({ theme }) => theme.lightGray};
		border-radius: 10px;
		overflow: hidden;
	}

	@media (min-width: 744px) {
		width: 300px;
		height: 200px;
		position: relative;
		border-radius: 10px;
		overflow: hidden;
	}
`;

const ImageList = styled.ul`
	display: flex;
	flex-direction: row;
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;

	@media (min-width: 744px) {
		display: flex;
		flex-direction: row;
		transition: transform 400ms ease-out;
		transform: translate3D(calc(var(--currentImage) * -100%), 0, 0);
		transform: translate3D(${({ currentImage }) => currentImage * -100}%, 0, 0);
	}
`;

export const StyledImage = styled.img`
	min-width: 100%;
	height: 110%;
	object-fit: cover;

	@media (min-width: 744px) {
		width: 300px;
		height: 200px;
		object-fit: cover;
	}
`;

const SuperHostTag = ({ isSuperHost }) => {
	return isSuperHost ? <StyledTag>슈퍼호스트</StyledTag> : null;
};

const StyledTag = styled.span`
	position: absolute;
	top: 2%;
	left: 2%;
	width: max-content;
	padding: 5px 7px;
	border-radius: 5px;
	opacity: 0.9;
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.foreground};
	font-size: 0.8rem;
	font-weight: 500;
	z-index: 9;

	@media (min-width: 744px) {
		top: 4%;
		left: 3%;
	}
`;

const Arrow = styled.div`
	display: none;
	position: relative;
	position: absolute;
	top: 50%;
	margin: 0 5px;
	width: 28px;
	height: 28px;
	background-color: ${({ theme }) => theme.background};
	transform: translate(-50%, -50%);
	border-radius: 50%;

	opacity: 0.8;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}

	> .arrowIcons {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 18px;
	}

	@media (min-width: 744px) {
		display: block;
	}
`;

const LeftButton = styled(Arrow)`
	left: 16px;
`;

const RightButton = styled(Arrow)`
	right: -8px;
`;
