import styled from 'styled-components';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Carousel = ({ room }) => {
	const { is_super_host, imgUrl } = room;
	const roomImages = imgUrl.split(',');

	return (
		<StyledCarouselFrame>
			{is_super_host ? <SuperHostTag /> : null}
			<SliderArrowButtons />
			<ul>
				{roomImages.map((url, index) => (
					<li key={index}>
						<StyledImage src={url} />
					</li>
				))}
			</ul>
		</StyledCarouselFrame>
	);
};

export default Carousel;

export const StyledCarouselFrame = styled.div`
	position: relative;
	flex: 1;
	width: 100%;
	height: 0;
	padding-bottom: 65%;
	border: 1px solid ${({ theme }) => theme.lightGray};
	border-radius: 10px;
	overflow: hidden;

	> ul {
		display: flex;
		flex-direction: row;
	}

	@media (min-width: 744px) {
		flex: 1;
		min-width: 300px;
		width: 300px;
		height: 200px;
		min-height: 200px;
		padding-bottom: 0;
		border-radius: 10px;
		overflow: hidden;
	}
`;

export const StyledImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const SuperHostTag = () => {
	return <StyledTag>슈퍼호스트</StyledTag>;
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
	z-index: 99;

	@media (min-width: 744px) {
		top: 4%;
		left: 3%;
	}
`;

export const SliderArrowButtons = () => {
	return (
		<>
			<StyledArrows className="arrows left">
				<RiArrowLeftSLine className="arrowIcons" />
			</StyledArrows>
			<StyledArrows className="arrows right">
				<RiArrowRightSLine className="arrowIcons" />
			</StyledArrows>
		</>
	);
};

const StyledArrows = styled.div`
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
	z-index: 999;
	opacity: 0.8;

	&.left {
		left: 16px;
	}
	&.right {
		right: -8px;
	}

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
