import React, { useEffect, useState, useRef } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import styled from 'styled-components';

const Google = props => {
	const { center, zoom, children } = props;
	return (
		<Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
			<MyMapComponent center={center} zoom={zoom}>
				{children}
			</MyMapComponent>
		</Wrapper>
	);
};

export default Google;

const MyMapComponent = ({ center, zoom, children }) => {
	const mapRef = useRef(null);
	const [map, setMap] = useState();

	useEffect(() => {
		const getMap = async () => {
			if (mapRef.current) {
				setMap(
					new window.google.maps.Map(mapRef.current, {
						center: center,
						zoom: zoom,
					}),
				);
			}
		};
		getMap();
	}, [mapRef, center, zoom]);

	return (
		<>
			<MapDiv ref={mapRef} />
			{React.Children.map(children, child => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, { map });
				}
			})}
		</>
	);
};

export const Marker = options => {
	const [marker, setMarker] = React.useState();

	React.useEffect(() => {
		if (!marker) {
			setMarker(new window.google.maps.Marker());
		}

		return () => {
			if (marker) {
				marker.setMap(null);
			}
		};
	}, [marker]);

	React.useEffect(() => {
		if (marker) {
			marker.setOptions(options);
		}
	}, [marker, options]);

	return null;
};

const MapDiv = styled.div`
	width: 100%;
	height: 100%;
	box-sizing: border-box;

	> img {
		max-width: none;
	}
`;
