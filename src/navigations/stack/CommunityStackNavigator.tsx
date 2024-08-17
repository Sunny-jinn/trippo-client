import {communityNavigations} from '@/constants';
import CommunityDetailScreen from '@/screens/community/CommunityDetailScreen';
import CommunityHomeScreen from '@/screens/community/CommunityHomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

export type CommunityStackParamList = {
  [communityNavigations.COMMUNITY_HOME]: undefined;
  [communityNavigations.COMMUNITY_SEARCH]: undefined;
  [communityNavigations.POST_DETAILS]: undefined;
};

const Stack = createStackNavigator<CommunityStackParamList>();

const CommunityStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name={communityNavigations.COMMUNITY_HOME}
        component={CommunityHomeScreen}
      />
      <Stack.Screen
        name={communityNavigations.POST_DETAILS}
        component={CommunityDetailScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default CommunityStackNavigator;
