import GoBackButton from '@/components/common/GoBackButton';
import {colors} from '@/constants';
import BottomSheet, {
  BottomSheetView,
  useBottomSheetSpringConfigs,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

interface ScheduleScreenProps {}

const ScheduleScreen = ({}: ScheduleScreenProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['10%', '90%'], []);

  const [enableContentPanningGesture, setEnableContentPanningGesture] =
    useState(true);
  const [enableHandlePanningGesture, setEnableHandlePanningGesture] =
    useState(true);

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
            <Text style={styles.headerText}> Schedule</Text>
            <GoBackButton />
          </View>
          <Text>Schedule</Text>
        </SafeAreaView>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.mapContainer}>
          <Text>Map Container</Text>
        </View>
        <View style={styles.bottomSheetContainer}>
          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            animationConfigs={animationConfigs}
            enableContentPanningGesture={enableContentPanningGesture}
            enableHandlePanningGesture={enableHandlePanningGesture}
            animateOnMount={true}>
            <BottomSheetView style={styles.bottomSheetInner}>
              <Text>Bottom SHIITTT!!!</Text>
            </BottomSheetView>
          </BottomSheet>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
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
  mapContainer: {},
  bottomContainer: {
    flex: 2,
    backgroundColor: colors.WHITE,
  },
  bottomSheetContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.WHITE,
  },
  bottomSheetInner: {
    alignItems: 'center',
  },
});

export default ScheduleScreen;
