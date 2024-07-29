import React, {useState} from 'react';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainHomeStackNavigator from '../stack/MainHomeStackNavigator';

const RootNavigator = () => {
  const [isLogin, setIsLogin] = useState(true);

  return <>{!isLogin ? <AuthStackNavigator /> : <MainHomeStackNavigator />}</>;
};

export default RootNavigator;
