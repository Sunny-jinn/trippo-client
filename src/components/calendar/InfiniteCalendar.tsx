import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import dayjs, {Dayjs} from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import {colors} from '@/constants';
import {generateMonthDates} from '@/utils';

dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(localizedFormat);

interface InfiniteCalendarProps {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  onDateSelect: (date: Dayjs) => void;
}

const InfiniteCalendar: React.FC<InfiniteCalendarProps> = ({
  startDate,
  endDate,
  onDateSelect,
}) => {
  const [months, setMonths] = useState(() => {
    const today = dayjs();
    return [
      generateMonthDates(today.subtract(1, 'month')),
      generateMonthDates(today),
      generateMonthDates(today.add(1, 'month')),
      generateMonthDates(today.add(2, 'month')),
    ];
  });

  const listRef = useRef<FlatList | null>(null);
  const loadedMonthsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (listRef.current) {
      setTimeout(() => {
        listRef.current?.scrollToIndex({
          index: 1,
          animated: false,
          viewPosition: 0.5,
        });
      }, 0);
    }
  }, []);

  const getItemLayout = (data: any, index: number) => ({
    length: 300, // Height of each month container
    offset: 200 * index,
    index,
  });

  const onScrollToIndexFailed = (info: any) => {
    const wait = new Promise(resolve => setTimeout(resolve, 500));
    wait.then(() => {
      listRef.current?.scrollToIndex({index: info.index, animated: true});
    });
  };

  const loadMoreMonths = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      const firstDate = dayjs(
        months[0][0] || months[0].find(date => date !== null),
      );
      const previousMonth = firstDate.subtract(1, 'month');

      if (!loadedMonthsRef.current.has(previousMonth.format('YYYY-MM'))) {
        setMonths(prevMonths => {
          loadedMonthsRef.current.add(previousMonth.format('YYYY-MM'));
          return [generateMonthDates(previousMonth), ...prevMonths];
        });

        setTimeout(() => {
          listRef.current?.scrollToOffset({
            offset: 500,
            animated: false,
          });
        }, 0);
      }
    } else if (direction === 'down') {
      const lastDate = dayjs(
        months[months.length - 1][15] ||
          months[months.length - 1].find(date => date !== null),
      );
      const nextMonth = lastDate.add(1, 'month');

      if (!loadedMonthsRef.current.has(nextMonth.format('YYYY-MM'))) {
        setMonths(prevMonths => {
          loadedMonthsRef.current.add(nextMonth.format('YYYY-MM'));
          return [...prevMonths, generateMonthDates(nextMonth)];
        });
      }
    }
  };

  const handleDateClick = (date: Dayjs | null) => {
    if (date) {
      onDateSelect(date); // 상위 컴포넌트에서 전달받은 날짜 선택 핸들러 호출
    }
  };

  const renderMonth = ({item: monthDates}: {item: (Dayjs | null)[]}) => (
    <View style={styles.monthContainer}>
      <Text style={styles.monthHeader}>
        {dayjs(monthDates.find(date => date !== null)).format('YYYY  MMMM')}
      </Text>
      <View style={styles.weekRow}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <Text key={index} style={styles.dayHeaderText}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.datesGrid}>
        {monthDates.map((date, index) => {
          const isToday = date && date.isSame(dayjs(), 'day'); // 오늘 날짜인지 확인
          const isStartDate =
            date && startDate && date.isSame(startDate, 'day'); // 시작 날짜인지 확인
          const isEndDate = date && endDate && date.isSame(endDate, 'day'); // 끝 날짜인지 확인
          const isBetween =
            date &&
            startDate &&
            endDate &&
            date.isAfter(startDate) &&
            date.isBefore(endDate); // 시작과 끝 사이에 있는지 확인

          return (
            <Pressable
              key={index}
              style={[
                styles.dateCell,
                isToday && !isStartDate && !isEndDate && styles.todayText,
                (isStartDate || isEndDate) && styles.selectedDateCell, // 시작/끝 날짜에 진한 파란색 적용
                isBetween && styles.betweenDatesCell, // 사이 날짜에 연한 파란색 적용
                isStartDate && styles.selectedStartDate,
                isEndDate && styles.selectedEndDate,
              ]}
              onPress={() => handleDateClick(date)} // 날짜 선택 시 실행
            >
              {date ? (
                <Text
                  style={[
                    styles.dateText,
                    (isStartDate || isEndDate) && styles.selectedDateText,
                  ]}>
                  {date.date()}
                </Text>
              ) : null}
            </Pressable>
          );
        })}
      </View>
    </View>
  );

  return (
    <FlatList
      ref={listRef}
      data={months}
      keyExtractor={(item, index) => `month-${index}`}
      renderItem={renderMonth}
      getItemLayout={getItemLayout} // 아이템 레이아웃 설정
      onScrollToIndexFailed={onScrollToIndexFailed} // 스크롤 실패 처리
      onEndReached={() => loadMoreMonths('down')} // 끝에 도달 시 더 많은 월 로드
      onEndReachedThreshold={0.3}
    />
  );
};

const styles = StyleSheet.create({
  monthContainer: {
    paddingHorizontal: 20,
    marginBottom: 57,
  },
  monthHeader: {
    fontSize: 20,
    color: colors.BLACK,
    fontWeight: '700',
    marginBottom: 24,
    marginLeft: 15,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dayHeaderText: {
    width: '14%',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: colors.GRAY_700,
  },
  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateCell: {
    width: '14.285%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    color: colors.BLACK,
    fontWeight: '600',
  },
  todayText: {
    borderWidth: 1,
    borderColor: colors.ORANGE,
  },
  selectedDateCell: {
    backgroundColor: colors.BLUE_500,
  },
  betweenDatesCell: {
    backgroundColor: colors.BLUE_100,
    borderRadius: 0,
  },
  selectedDateText: {
    color: colors.WHITE,
  },
  selectedStartDate: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  selectedEndDate: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default InfiniteCalendar;
