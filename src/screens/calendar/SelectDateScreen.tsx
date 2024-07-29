import CustomButton from '@/components/common/CustomButton';
import GoBackButton from '@/components/common/GoBackButton';
import {calendarNavigations, colors} from '@/constants';
import {CalendarStackParamList} from '@/navigations/stack/CalendarStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState, memo, useCallback} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface SelectDateScreenProps {}

// CustomDayComponent를 외부로 정의합니다.

const SelectDateScreen = ({}: SelectDateScreenProps) => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const navigation =
    useNavigation<StackNavigationProp<CalendarStackParamList>>();

  const pressHandler = () => {
    navigation.navigate(calendarNavigations.CHOOSE_THEME);
  };

  const insets = useSafeAreaInsets();

  // 날짜 선택 핸들러
  const handleDayPress = useCallback(
    (day: any) => {
      const {dateString} = day;

      // 시작 날짜와 종료 날짜 설정 로직
      if (!startDate || (startDate && endDate)) {
        // 시작 날짜가 설정되지 않았거나, 이미 시작과 종료 날짜가 모두 설정된 경우 초기화
        setStartDate(dateString);
        setEndDate(null); // 종료 날짜 초기화
      } else if (startDate && !endDate) {
        // 시작 날짜가 설정되었지만 종료 날짜가 없는 경우 종료 날짜 설정
        if (dateString < startDate) {
          // 선택한 종료 날짜가 시작 날짜 이전인 경우, 새로운 시작 날짜로 설정
          setStartDate(dateString);
        } else {
          setEndDate(dateString);
        }
      }
    },
    [startDate, endDate],
  );

  // 선택된 범위에 대한 marked dates 생성
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

  // 선택 초기화 함수
  const resetSelection = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <GoBackButton />
        <Text>Select Date</Text>
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
  header: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
