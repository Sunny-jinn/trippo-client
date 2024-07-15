import React from 'react';
import {StyleSheet} from 'react-native';

import {authNavigations} from '@/constants';
import {createStackNavigator} from '@react-navigation/stack';
import LanguageScreen from '@/screens/auth/LanguageScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import SignUpScreen from '@/screens/auth/SignUpScreen';

export type AuthStackParamList = {
  [authNavigations.LANGUAGE]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGN_UP]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigations.LANGUAGE}
        component={LanguageScreen}
        options={{
          headerTitle: '언어 선택',
        }}
      />
      <Stack.Screen
        name={authNavigations.LOGIN}
        component={LoginScreen}
        options={{
          headerTitle: '로그인',
        }}
      />
      <Stack.Screen
        name={authNavigations.SIGN_UP}
        component={SignUpScreen}
        options={{
          headerTitle: '회원가입',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AuthStackNavigator;
