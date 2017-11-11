import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Map = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: 'calc(100vh - 64px)' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 41.082184, lng: 29.066884 }}
  >
    {props.markers.map((marker) =>
      props.filterValue ? (
        marker.matched && (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        )
      ) : (
        <Marker
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      ), )}
  </GoogleMap>
));

export default Map;
