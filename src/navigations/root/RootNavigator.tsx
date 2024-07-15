import React, {useState} from 'react';
import AuthStackNavigator from '../stack/AuthStackNavigator';

const RootNavigator = () => {
  const [isLogin, setIsLogin] = useState(true);

  return <>{isLogin ? <AuthStackNavigator /> : <></>}</>;
};

export default RootNavigator;
