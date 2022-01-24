import styled from 'styled-components';
import Map from '../../components/Map';
import { Wrapper } from '@googlemaps/react-wrapper';

const ListMap = ({ center }) => {
	return (
		<MapWrapper>
			<Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
				<Map center={center} />
			</Wrapper>
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
