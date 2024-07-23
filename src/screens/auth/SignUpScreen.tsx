import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

import {colors} from '@/constants';
import AuthExplain from '@/components/auth/AuthExplain';
import CustomButton from '@/components/common/CustomButton';
import GoBackButton from '@/components/common/GoBackButton';
import CustomInputField from '@/components/common/CustomInputField';
import {useTranslation} from 'react-i18next';

const SignUpScreen = () => {
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);

  const {t, i18n} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <GoBackButton />
      <AuthExplain title={t('signup.title')} subTitle={t('signup.subTitle')} />
      <View style={styles.inputContainer}>
        <CustomInputField
          placeholder={t('placeholder.id')}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        <CustomInputField
          ref={emailRef}
          placeholder={t('placeholder.email')}
          returnKeyType="next"
          inputMode="email"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <CustomInputField
          ref={passwordRef}
          placeholder={t('placeholder.password')}
          password
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
        />
        <CustomInputField
          ref={passwordConfirmRef}
          placeholder={t('placeholder.passwordConfirm')}
          password
          returnKeyType="join"
        />
      </View>
      <Text style={styles.passwordText}>{t('signup.text')}</Text>
      <CustomButton label={t('signup.title')} filled />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  inputContainer: {
    marginTop: 40,
    gap: 24,
  },
  passwordText: {
    color: colors.GRAY_700,
    fontSize: 14,
    marginTop: 6,
    marginBottom: 16,
  },
});

export default SignUpScreen;
