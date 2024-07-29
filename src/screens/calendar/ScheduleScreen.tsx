import React, {useMemo, useRef} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BottomSheet, {
  BottomSheetScrollView,
  useBottomSheetSpringConfigs,
} from '@gorhom/bottom-sheet';
import {colors} from '@/constants';
import CustomButton from '@/components/common/CustomButton';
import GoBackButton from '@/components/common/GoBackButton';
import GoogleMapView from '@/components/common/GoogleMapView';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

interface ScheduleScreenProps {}

const ScheduleScreen = ({}: ScheduleScreenProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['5%', '90%'], []);

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  return (
    <>
      <StatusBar backgroundColor={colors.BLUE_500} barStyle="light-content" />
      <View style={styles.topContainer}>
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <GoBackButton />
            <Text style={styles.headerText}>Schedule</Text>
            <GoBackButton />
          </View>
          <Text>Schedule</Text>
        </SafeAreaView>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.mapContainer}>
          <GoogleMapView showsMyLocationButton />
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          animationConfigs={animationConfigs}
          animateOnMount={true}>
          <BottomSheetScrollView style={styles.bottomSheetInner}>
            <View style={styles.bottomSheetHeaderContainer}>
              <Text style={styles.scheduleDateText}>26 January 2024</Text>
              <Pressable style={styles.scheduleEditButton}>
                <Text style={styles.scheduleEditText}>Edit</Text>
              </Pressable>
            </View>
            {[1, 2, 3, 4].map((_, index) => (
              <View key={index} style={styles.scheduleContainer}>
                <Image
                  source={require('@/assets/walkthrough_1.png')}
                  style={styles.scheduleThumbnail}
                />
                <View style={styles.schedulePlaceContainer}>
                  <Text style={styles.schedulePlaceName}>
                    Jeju Dongmun Market
                  </Text>
                  <View style={styles.scheduleLocation}>
                    <Ionicons
                      name="location-outline"
                      size={16}
                      color={colors.GRAY_700}
                    />
                    <Text style={styles.scheduleLocationText}>
                      Tekergat, Sunamgnj
                    </Text>
                  </View>
                </View>
                <View style={{marginLeft: 'auto'}}>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={20}
                    color={colors.GRAY_700}
                  />
                </View>
              </View>
            ))}
            <View style={styles.scheduleButton}>
              <CustomButton label="Add a place" filled />
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: colors.BLUE_500,
    // borderBottomRightRadius: 24,
    // borderBottomLeftRadius: 24,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: colors.WHITE,
  },
  mapContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: colors.WHITE,
  },
  bottomSheetContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.WHITE,
  },
  //!FEAT: Inner
  bottomSheetInner: {
    flexGrow: 1,
    marginHorizontal: 20,
  },
  bottomSheetHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scheduleDateText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.BLACK,
  },
  scheduleEditButton: {
    marginLeft: 'auto',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.GRAY_500,
    borderRadius: 100,
  },
  scheduleEditText: {
    fontSize: 12,
    color: colors.BLACK,
  },
  scheduleContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 16,

    shadowColor: colors.BLACK,
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1.5,
  },
  scheduleThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  schedulePlaceContainer: {
    marginLeft: 20,
    flex: 1, // 텍스트가 flex를 차지하도록 설정
  },
  schedulePlaceName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.BLACK,
  },
  scheduleLocation: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    color: colors.GRAY_700,
  },
  scheduleLocationText: {
    color: colors.GRAY_700,
  },
  scheduleButton: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 13,
    marginBottom: 30,
  },
});

export default ScheduleScreen;
