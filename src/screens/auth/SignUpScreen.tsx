import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

import {colors} from '@/constants';
import AuthExplain from '@/components/auth/AuthExplain';
import CustomButton from '@/components/common/CustomButton';
import GoBackButton from '@/components/common/GoBackButton';
import CustomInputField from '@/components/common/CustomInputField';

interface SignUpScreenProps {}

const SignUpScreen = ({}: SignUpScreenProps) => {
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <GoBackButton />
      <AuthExplain
        title="회원가입"
        subTitle="서비스를 계속 이용하시려면 회원가입 해주세요."
      />
      <View style={styles.inputContainer}>
        <CustomInputField
          placeholder="아이디"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        <CustomInputField
          ref={emailRef}
          placeholder="이메일"
          returnKeyType="next"
          inputMode="email"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <CustomInputField
          ref={passwordRef}
          placeholder="비밀번호"
          password
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
        />
        <CustomInputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          password
          returnKeyType="join"
        />
      </View>
      <Text style={styles.passwordText}>비밀번호는 8자 이상 설정해주세요.</Text>
      <CustomButton label="회원가입" filled />
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
