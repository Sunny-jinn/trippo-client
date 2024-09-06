import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import CustomButton from '@/components/common/CustomButton';
import CustomHeader from '@/components/common/CustomHeader';
import InfiniteCalendar from '@/components/calendar/InfiniteCalendar';
import {calendarNavigations, colors} from '@/constants';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CalendarStackParamList} from '@/navigations/stack/CalendarStackNavigator';
import {Dayjs} from 'dayjs';
import useScheduleStore from '@/store/useScheduleStore';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SelectDateScreen: React.FC = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const {setStartDate: setStartDateValue, setEndDate: setEndDateValue} =
    useScheduleStore();
  const navigation =
    useNavigation<StackNavigationProp<CalendarStackParamList>>();
  const insets = useSafeAreaInsets();

  const onDateSelect = (date: Dayjs) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date.isAfter(startDate)) {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const pressHandler = () => {
    if (startDate && endDate) {
      setStartDateValue(startDate.toDate());
      setEndDateValue(endDate.toDate());
      navigation.navigate(calendarNavigations.CHOOSE_THEME);
    }
  };

  const resetSelection = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: 20}}>
        <CustomHeader title="Select Date" />
      </View>
      <InfiniteCalendar
        startDate={startDate}
        endDate={endDate}
        onDateSelect={onDateSelect}
      />
      <View style={[styles.buttonContainer, {bottom: insets.bottom + 30}]}>
        <CustomButton
          label="Reset"
          onPress={resetSelection}
          style={{
            flex: 1,
            backgroundColor: colors.WHITE,
            borderWidth: 1,
            borderColor: colors.BLACK,
          }}
        />
        <CustomButton
          label="Done"
          filled
          style={{flex: 1}}
          disabled={Boolean(!startDate || !endDate)}
          onPress={pressHandler}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    gap: 17,
    bottom: 0,
  },
});

export default SelectDateScreen;
