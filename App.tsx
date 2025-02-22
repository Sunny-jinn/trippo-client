import RootNavigator from '@/navigations/root/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import i18n from './i18n/i18n.config';
import React, {useEffect} from 'react';
import {I18nextProvider} from 'react-i18next';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@/api/queryClient';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  //!FIX: splach screen 현재 시간초로 되어있는데, loading 완료 후 screen
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 20);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;
