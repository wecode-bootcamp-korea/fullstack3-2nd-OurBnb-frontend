import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { FiShare } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

export default function PicModal({ showModal, handleClose, picData }) {
	const imagesString = '' + picData.imgUrl;
	const allImgs = imagesString.split(',');

	return (
		<ModalWrapper showModal={showModal}>
			<Header>
				<Back>
					<CloseButton onClick={handleClose} />
				</Back>
				<ShareSave>
					<Share>
						<ShareButton>
							<ShareButtonInner>
								<ShareIcon>
									<FiShare />
								</ShareIcon>
								<ShareSpan>공유하기</ShareSpan>
							</ShareButtonInner>
						</ShareButton>
					</Share>
					<Save>
						<SaveButton>
							<SaveButtonInner>
								<SaveIcon>
									<AiOutlineHeart />
								</SaveIcon>
								<SaveSpan>저장</SaveSpan>
							</SaveButtonInner>
						</SaveButton>
					</Save>
				</ShareSave>
			</Header>

			<PicContainer>
				<PicBox>
					{allImgs.map(img => {
						return <img key={img} src={img} alt="room pictures" />;
					})}
				</PicBox>
			</PicContainer>
		</ModalWrapper>
	);
}

const ModalWrapper = styled.section`
	display: ${props => (props.showModal ? 'block' : 'none')};
	position: relative;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding-bottom: 80px;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background-color: #fff;
	z-index: ${props => (props.showModal ? '999' : '-999')};
	overflow-y: scroll;
`;

const Header = styled.div`
	display: ${props => (props.showModal ? 'block' : 'none')};
	display: none;
	width: 100%;
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	background-color: white;
	justify-content: space-between;
`;

const Back = styled.div`
	font-size: 1.5rem;
	padding: 10px 10px;
`;

const CloseButton = styled(IoIosArrowBack)`
	cursor: pointer;
`;

const ShareSave = styled.div`
	width: 200px;
	display: flex;
	justify-content: space-between;
`;

//공유하기 버튼 시작
const Share = styled.div`
	display: flex;
`;

const ShareIcon = styled.div`
	width: 30px;
	font-size: 17px;
`;

const ShareSpan = styled.span`
	font-size: 15px;
	text-decoration: underline;
`;

const ShareButton = styled.button`
	width: 100px;
	border: 0;
	outline: 0;
	background: 0;
	cursor: pointer;
`;

const ShareButtonInner = styled.div`
	display: flex;
`;
//공유하기버튼 끝

//저장버튼 시작
const Save = styled.div`
	display: flex;
`;

const SaveIcon = styled.div`
	width: 30px;
	font-size: 17px;
`;

const SaveSpan = styled.span`
	font-size: 15px;
	text-decoration: underline;
`;

const SaveButton = styled.button`
	width: 70px;
	border: 0;
	outline: 0;
	background: 0;
	cursor: pointer;
`;

const SaveButtonInner = styled.div`
	display: flex;
`;

//사진섹션
const PicContainer = styled.section`
	width: 100%;
	z-index: ${props => (props.showModal ? '999' : '-999')};
`;

//사진전체
const PicBox = styled.section`
	width: 80%;
	max-width: 800px;
	display: flex;
	margin: 0 auto;
	margin-top: 50px;
	flex-direction: column;
	z-index: ${props => (props.showModal ? '999' : '-999')};
	overflow-y: scroll;
`;
