import React from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';

import GoogleMapView from '@/components/common/GoogleMapView';
import {usePermission} from '@/hooks/usePermissions';
import CustomBottomTap from '@/components/common/CustomBottomTap';

const HomeScreen = () => {
  usePermission('LOCATION');

  return (
    <>
      <GoogleMapView />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          scrollIndicatorInsets={{right: 1}}>
          <View style={styles.innerContainer}></View>
        </ScrollView>
        <CustomBottomTap />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    // marginBottom: 80,
  },
  innerContainer: {
    marginBottom: 100,
  },
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
