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
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GoogleMapView;
