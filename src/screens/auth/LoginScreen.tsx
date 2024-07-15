import GoBackButton from '@/components/common/GoBackButton';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface LoginScreenProps {}

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <View>
      <GoBackButton />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
