import {profileNavigations} from '@/constants';
import EditProfileScreen from '@/screens/profile/EditProfileScreen';
import NoticeScreen from '@/screens/profile/NoticeScreen';
import ProfileHomeScreen from '@/screens/profile/ProfileHomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

export type ProfileStackParamList = {
  [profileNavigations.PROFILE_HOME]: undefined;
  [profileNavigations.EDIT_PROFILE]: undefined;
  [profileNavigations.NOTICE]: undefined;
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
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ProfileStackNavigator;
