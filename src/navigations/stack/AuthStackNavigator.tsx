import React from 'react';

import {authNavigations, colors} from '@/constants';
import {createStackNavigator} from '@react-navigation/stack';
import LanguageScreen from '@/screens/auth/LanguageScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import SignUpScreen from '@/screens/auth/SignUpScreen';
import ForgotPasswordScreen from '@/screens/auth/ForgotPasswordScreen';
import VerificationCodeScreen from '@/screens/auth/VerificationCodeScreen';
import {StatusBar} from 'react-native';
import WalkthroughScreen from '@/screens/walkthrough/WalkthroughScreen';

export type AuthStackParamList = {
  [authNavigations.LANGUAGE]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGN_UP]: undefined;
  [authNavigations.FORGOT_PASSWORD]: undefined;
  [authNavigations.VERIFICATION_CODE]: undefined;
  [authNavigations.WALKTHROUGH]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
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
        <Stack.Screen
          name={authNavigations.WALKTHROUGH}
          component={WalkthroughScreen}
          options={{
            headerTitle: '',
          }}
        />
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
        <Stack.Screen
          name={authNavigations.FORGOT_PASSWORD}
          component={ForgotPasswordScreen}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name={authNavigations.VERIFICATION_CODE}
          component={VerificationCodeScreen}
          options={{
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNavigator;
