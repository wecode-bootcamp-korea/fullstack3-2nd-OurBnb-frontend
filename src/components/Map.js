import React, { useEffect, useState, useRef } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import styled from 'styled-components';

const MyMapComponent = ({ center, zoom }) => {
	const mapRef = useRef(null);
	const [map, setMap] = useState();

	useEffect(() => {
		if (mapRef.current && !map) {
			setMap(
				new window.google.maps.Map(mapRef.current, {
					center: center,
					zoom: zoom,
				}),
			);
		}
	}, [mapRef, map, center, zoom]);

	return <MapDiv className="map" ref={mapRef} />;
};

const Google = ({ center, zoom }) => {
	return (
		<Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
			<MyMapComponent center={center} zoom={zoom} />
		</Wrapper>
	);
};

export default Google;

const MapDiv = styled.div`
	width: 100%;
	height: 100%;
	box-sizing: border-box;

	> img {
		max-width: none;
	}
`;
