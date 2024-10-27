import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {MapViewProps, PROVIDER_GOOGLE} from 'react-native-maps';

interface GoogleMapViewProps extends MapViewProps {}

const GoogleMapView = ({...props}: GoogleMapViewProps) => {
  return (
    <MapView
      style={styles.container}
      provider={PROVIDER_GOOGLE}
      {...props}
      showsUserLocation
      showsMyLocationButton
      customMapStyle={customMapStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const customMapStyle = [
  {
    featureType: 'poi.school',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
];

export default GoogleMapView;
