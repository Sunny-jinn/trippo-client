import {profileNavigations} from '@/constants';
import EditProfileScreen from '@/screens/profile/EditProfileScreen';
import NoticeDetailScreen from '@/screens/profile/NoticeDetailScreen';
import NoticeScreen from '@/screens/profile/NoticeScreen';
import ProfileHomeScreen from '@/screens/profile/ProfileHomeScreen';
import TermsofUseScreen from '@/screens/profile/TermsofUseScreen';
import WithdrawalScreen from '@/screens/profile/WithdrawalScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

export type ProfileStackParamList = {
  [profileNavigations.PROFILE_HOME]: undefined;
  [profileNavigations.EDIT_PROFILE]: undefined;
  [profileNavigations.NOTICE]: undefined;
  [profileNavigations.NOTICE_DETAIL]: {id: number};
  [profileNavigations.SERVICE_CENTER]: undefined;
  [profileNavigations.TERMS_OF_USE]: undefined;
  [profileNavigations.VERSION_INFO]: undefined;
  [profileNavigations.LOGOUT]: undefined;
  [profileNavigations.WITHDRAWAL]: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name={profileNavigations.PROFILE_HOME}
        component={ProfileHomeScreen}
      />
      <Stack.Screen
        name={profileNavigations.EDIT_PROFILE}
        component={EditProfileScreen}
      />
      <Stack.Screen name={profileNavigations.NOTICE} component={NoticeScreen} />
      <Stack.Screen
        name={profileNavigations.NOTICE_DETAIL}
        component={NoticeDetailScreen}
      />
      <Stack.Screen
        name={profileNavigations.TERMS_OF_USE}
        component={TermsofUseScreen}
      />
      <Stack.Screen
        name={profileNavigations.WITHDRAWAL}
        component={WithdrawalScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ProfileStackNavigator;
