import AuthExplain from '@/components/auth/AuthExplain';
import CustomButton from '@/components/common/CustomButton';
import CustomInputField from '@/components/common/CustomInputField';
import GoBackButton from '@/components/common/GoBackButton';
import {colors} from '@/constants';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface SignUpScreenProps {}

const SignUpScreen = ({}: SignUpScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <GoBackButton />
      <AuthExplain
        title="회원가입"
        subTitle="서비스를 계속 이용하시려면 회원가입 해주세요."
      />
      <View style={styles.inputContainer}>
        <CustomInputField placeholder="아이디" />
        <CustomInputField placeholder="이메일" />
        <CustomInputField placeholder="비밀번호" password />
        <CustomInputField placeholder="비밀번호 확인" password />
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
