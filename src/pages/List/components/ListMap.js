import styled from 'styled-components';
import Google from '../../../components/Map';

const ListMap = ({ center }) => {
	return (
		<MapWrapper>
			<Google center={center} zoom={10} />
		</MapWrapper>
	);
};

export default ListMap;

const MapWrapper = styled.div`
	grid-area: map;
	position: sticky;
	top: 150px;
	right: 0;
	width: 100%;
	height: 100vh;
	padding: 0;

	@media (max-width: 1127px) {
		display: none;
	}
	background-color: darkblue;
`;
