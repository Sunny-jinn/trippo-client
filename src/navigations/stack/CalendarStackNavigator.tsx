import {calendarNavigations} from '@/constants';
import ChooseThemeScreen from '@/screens/calendar/ChooseThemeScreen';
import SelectDateScreen from '@/screens/calendar/SelectDateScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

export type CalendarStackParamList = {
  [calendarNavigations.CHOOSE_THEME]: undefined;
  [calendarNavigations.SCHEDULE]: undefined;
  [calendarNavigations.SELECT_DATE]: undefined;
};

const Stack = createStackNavigator<CalendarStackParamList>();

const CalendarStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name={calendarNavigations.SELECT_DATE}
        component={SelectDateScreen}
      />
      <Stack.Screen
        name={calendarNavigations.CHOOSE_THEME}
        component={ChooseThemeScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default CalendarStackNavigator;
