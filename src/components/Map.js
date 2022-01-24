import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Map = ({ center }) => {
	const mapRef = useRef(null);
	const [map, setMap] = useState();

	useEffect(() => {
		if (mapRef.current && !map) {
			setMap(
				new window.google.maps.Map(mapRef.current, {
					center: center,
					zoom: 11,
				}),
			);
		}
	}, [mapRef, map, center]);

	return <MapDiv className="map" ref={mapRef} />;
};

export default Map;

const MapDiv = styled.div`
	width: 100%;
	height: 100%;
	box-sizing: border-box;

	> img {
		max-width: none;
	}
`;

const Marker = options => {
	const [marker, setMarker] = useState();

	useEffect(() => {
		if (!marker) {
			setMarker(new window.google.maps.Marker());
		}

		// remove marker from map on unmount
		return () => {
			if (marker) {
				marker.setMap(null);
			}
		};
	}, [marker]);

	useEffect(() => {
		if (marker) {
			marker.setOptions(options);
		}
	}, [marker, options]);

	return null;
};
