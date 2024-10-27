import React, {useState} from 'react';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainHomeStackNavigator from '../stack/MainHomeStackNavigator';
import {useAuth} from '@/hooks/queries/useAuth';

const RootNavigator = () => {
  const {isLogin} = useAuth();

  return <>{!isLogin ? <AuthStackNavigator /> : <MainHomeStackNavigator />}</>;
};

export default RootNavigator;
