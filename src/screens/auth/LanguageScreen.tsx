import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import AuthExplain from '@/components/auth/AuthExplain';
import CustomButton from '@/components/common/CustomButton';
import GoBackButton from '@/components/common/GoBackButton';
import {authNavigations, colors} from '@/constants';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {setEncryptStorage} from '@/utils/encryptStorage';
import {languages, TLanguage} from '@/constants/language';
import {useTranslation} from 'react-i18next';

interface LanguageScreenProps {}

const LanguageScreen = ({}: LanguageScreenProps) => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const {t, i18n} = useTranslation();

  const pressHandler = (lang: string) => {
    navigation.navigate(authNavigations.LOGIN);
    setEncryptStorage('lang', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.WHITE} barStyle="dark-content" />

      <GoBackButton />
      <Pressable
        onPress={() => navigation.navigate(authNavigations.WALKTHROUGH)}>
        <AuthExplain
          title={t('LanguageSelect.title')}
          subTitle={t('LanguageSelect.subTitle')}
        />
      </Pressable>
      <View style={styles.buttonContainer}>
        {languages.map((item: TLanguage, idx: number) => (
          <CustomButton
            label={item.name}
            key={idx}
            onPress={() => pressHandler(item.lang)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginVertical: 68,
    gap: 24,
  },
});

export default LanguageScreen;
