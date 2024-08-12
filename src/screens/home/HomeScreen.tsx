import React from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text} from 'react-native';

import {usePermission} from '@/hooks/usePermissions';
import CustomBottomTap from '@/components/common/CustomBottomTap';
import CustomText from '@/components/common/CustomText';

const HomeScreen = () => {
  usePermission('LOCATION');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          scrollIndicatorInsets={{right: 1}}>
          <View style={styles.innerContainer}>
            <CustomText weight="black">Hi</CustomText>
            <Text>Hi</Text>
            <CustomText weight="heavy">Hi</CustomText>
            <CustomText weight="medium">Hi</CustomText>
          </View>
        </ScrollView>
        <CustomBottomTap screen="Home" />
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
