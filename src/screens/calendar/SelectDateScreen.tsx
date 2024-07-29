import CustomButton from '@/components/common/CustomButton';
import CustomHeader from '@/components/common/CustomHeader';
import GoBackButton from '@/components/common/GoBackButton';
import {calendarNavigations, colors} from '@/constants';
import {CalendarStackParamList} from '@/navigations/stack/CalendarStackNavigator';
import useScheduleStore from '@/store/useScheduleStore';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState, memo, useCallback} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SelectDateScreen = () => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const {setStartDate: setStartDateValue, setEndDate: setEndDateValue} =
    useScheduleStore();

  const navigation =
    useNavigation<StackNavigationProp<CalendarStackParamList>>();

  const pressHandler = () => {
    if (startDate && endDate) {
      setStartDateValue(new Date(startDate));
      setEndDateValue(new Date(endDate));
      navigation.navigate(calendarNavigations.CHOOSE_THEME);
    }
  };

  const insets = useSafeAreaInsets();

  const handleDayPress = useCallback(
    (day: any) => {
      const {dateString} = day;

      if (!startDate || (startDate && endDate)) {
        setStartDate(dateString);
        setEndDate(null);
      } else if (startDate && !endDate) {
        if (dateString < startDate) {
          setStartDate(dateString);
        } else {
          setEndDate(dateString);
        }
      }
    },
    [startDate, endDate],
  );

  const getMarkedDates = () => {
    let markedDates: {[key: string]: any} = {};

    if (startDate) {
      markedDates[startDate] = {
        startingDay: true,
        color: colors.BLUE_500,
        textColor: colors.WHITE,
      };

      if (endDate) {
        let currentDate = new Date(startDate);

        while (currentDate <= new Date(endDate)) {
          const dateString = currentDate.toISOString().split('T')[0];
          if (dateString === startDate) {
            currentDate.setDate(currentDate.getDate() + 1);
            continue;
          }
          markedDates[dateString] = {
            color:
              dateString === startDate || dateString === endDate
                ? colors.BLUE_500
                : colors.BLUE_100,
            textColor:
              dateString === startDate || dateString === endDate
                ? colors.WHITE
                : colors.BLACK,
          };

          currentDate.setDate(currentDate.getDate() + 1);
        }

        markedDates[endDate] = {
          endingDay: true,
          color: colors.BLUE_500,
          textColor: colors.WHITE,
        };
      }
    }

    return markedDates;
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
      <CalendarList
        markingType={'period'}
        markedDates={getMarkedDates()}
        onDayPress={handleDayPress}
        theme={{
          textDayFontSize: 16,
          textDayFontWeight: '600',
          textMonthFontSize: 16,
          textMonthFontWeight: '600',
          textDayHeaderFontSize: 14,
          textDayHeaderFontWeight: '600',
          todayTextColor: colors.ORANGE,
          calendarBackground: colors.WHITE,
        }}
        style={styles.calendarList}
        pastScrollRange={12}
        futureScrollRange={12}
        showScrollIndicator={true}
        firstDay={1}
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
          disabled={Boolean(!startDate && !endDate)}
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
  calendarList: {
    marginTop: 30,
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
