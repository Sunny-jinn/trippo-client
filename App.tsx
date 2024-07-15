import RootNavigator from '@/navigations/root/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  //!FIX: splach screen 현재 시간초로 되어있는데, loading 완료 후 screen
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
