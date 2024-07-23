import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import AuthExplain from '@/components/auth/AuthExplain';
import CustomButton from '@/components/common/CustomButton';
import GoBackButton from '@/components/common/GoBackButton';
import CustomInputField from '@/components/common/CustomInputField';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {authNavigations, colors} from '@/constants';
import {useTranslation} from 'react-i18next';

interface LoginScreenProps {}

const LoginScreen = ({}: LoginScreenProps) => {
  const passwordRef = useRef<TextInput | null>(null);
  const {t, i18n} = useTranslation();

  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const handleSignUpPress = () => {
    navigation.navigate(authNavigations.SIGN_UP);
  };

  const handlePasswordPress = () => {
    navigation.navigate(authNavigations.FORGOT_PASSWORD);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoBackButton />
      <AuthExplain title={t('login.title')} subTitle={t('login.subTitle')} />
      <View style={styles.inputContainer}>
        <CustomInputField
          placeholder={t('placeholder.id')}
          inputMode="email"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <CustomInputField
          placeholder={t('placeholder.password')}
          password
          ref={passwordRef}
        />
      </View>
      <View style={styles.findPasswordContainer}>
        <Pressable onPress={handlePasswordPress}>
          <Text style={styles.findPassword}>{t('login.forgotPassword')}</Text>
        </Pressable>
      </View>
      <CustomButton label={t('login.title')} filled />
      <View style={styles.signUpContainer}>
        <Text style={styles.noAccountText}>{t('login.noAccount')}</Text>
        <Pressable onPress={handleSignUpPress}>
          <Text style={styles.signUpText}>{t('login.signup') + ' '} </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  inputContainer: {
    gap: 24,
    marginTop: 40,
  },
  findPasswordContainer: {
    width: '100%',
    marginTop: 16,
    marginBottom: 40,
  },
  findPassword: {
    marginLeft: 'auto',
    color: colors.ORANGE,
    fontWeight: '500',
  },
  noAccountText: {
    color: colors.GRAY_600,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 40,
    gap: 8,
  },
  signUpText: {
    fontSize: 14,
    color: colors.ORANGE,
  },
});

export default LoginScreen;
