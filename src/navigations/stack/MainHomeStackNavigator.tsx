import React from 'react';

import {colors, mainNavigations} from '@/constants';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import HomeScreen from '@/screens/home/HomeScreen';
import CalendarStackNavigator from './CalendarStackNavigator';
import SearchScreen from '@/screens/search/SearchScreen';

export type MainHomeStackParamList = {
  [mainNavigations.HOME]: undefined;
  [mainNavigations.CALENDAR]: undefined;
  [mainNavigations.COMMUNITY]: undefined;
  [mainNavigations.PROFILE]: undefined;
  [mainNavigations.SEARCH]: undefined;
};

const Stack = createStackNavigator<MainHomeStackParamList>();

const MainHomeStackNavigator = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.WHITE} barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: 'white',
          },
          headerShown: false,
        }}>
        <Stack.Screen name={mainNavigations.HOME} component={HomeScreen} />
        <Stack.Screen
          name={mainNavigations.CALENDAR}
          component={CalendarStackNavigator}
        />
        <Stack.Screen name={mainNavigations.SEARCH} component={SearchScreen} />
      </Stack.Navigator>
    </>
  );
};

export default MainHomeStackNavigator;
