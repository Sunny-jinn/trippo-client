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
import useScheduleStore from '@/store/useScheduleStore';
import {formatDate} from '@/utils';
import CustomBottomTap from '@/components/common/CustomBottomTap';
import CustomHeader from '@/components/common/CustomHeader';

interface ScheduleScreenProps {}

const ScheduleScreen = ({}: ScheduleScreenProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['20%', '80%'], []);

  const {startDate, endDate, selectedTags} = useScheduleStore();

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  console.log(selectedTags);

  return (
    <>
      <StatusBar backgroundColor={colors.BLUE_500} barStyle="light-content" />
      <View style={styles.topContainer}>
        <SafeAreaView>
          <CustomHeader title="Schedule" isWhite share />
          <View style={styles.topInnerContainer}>
            <Text style={styles.scheduleNameText}>Jeju Trip 01</Text>
            <Text style={styles.schedulePeriod}>
              {`${formatDate(startDate)} - ${formatDate(endDate)}`}
            </Text>
            <View style={styles.scheduleTagsContainer}>
              {Object.keys(selectedTags.Whom).length !== 0 && (
                <View style={styles.scheduleTag}>
                  <Text style={styles.scheduleTagText}>
                    {Object.keys(selectedTags.Whom)[0]}
                  </Text>
                </View>
              )}
              {Object.keys(selectedTags.Style).length !== 0 && (
                <View style={styles.scheduleTag}>
                  <Text style={styles.scheduleTagText}>
                    {Object.keys(selectedTags.Style)[0]}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.mapContainer}>
          <GoogleMapView />
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          animationConfigs={animationConfigs}
          animateOnMount={true}>
          <BottomSheetScrollView style={styles.bottomSheetInner}>
            <View style={styles.bottomSheetHeaderContainer}>
              <Text style={styles.scheduleDateText}>
                {formatDate(startDate)}
              </Text>
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
        <CustomBottomTap screen="Calendar" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.8,
    backgroundColor: colors.BLUE_500,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
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
  topInnerContainer: {
    marginTop: 30,
    marginHorizontal: 16,
    gap: 8,
  },
  scheduleNameText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.WHITE,
  },
  schedulePeriod: {
    color: colors.GRAY_300,
    fontSize: 16,
    fontWeight: '600',
  },
  scheduleTagsContainer: {
    marginTop: 3,
    flexDirection: 'row',
    gap: 8,
  },
  scheduleTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.56)',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  scheduleTagText: {
    color: colors.WHITE,
    fontSize: 12,
    fontWeight: '500',
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: colors.WHITE,
  },
  bottomSheetContainer: {
    flex: 1,
    paddingHorizontal: 50,
    marginBottom: 30,
    backgroundColor: colors.WHITE,
  },
  //!FEAT: Inner
  bottomSheetInner: {
    flexGrow: 1,
    marginHorizontal: 20,
    marginBottom: 80,
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
    elevation: 3,
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
