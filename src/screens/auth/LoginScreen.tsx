import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import AuthExplain from '@/components/auth/AuthExplain';
import CustomButton from '@/components/common/CustomButton';
import GoBackButton from '@/components/common/GoBackButton';
import CustomInputField from '@/components/common/CustomInputField';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {authNavigations, colors} from '@/constants';

interface LoginScreenProps {}

const LoginScreen = ({}: LoginScreenProps) => {
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
      <AuthExplain
        title="로그인"
        subTitle="서비스를 계속 이용하시려면 로그인 해주세요."
      />
      <View style={styles.inputContainer}>
        <CustomInputField placeholder="id" />
        <CustomInputField placeholder="password" password />
      </View>
      <View style={styles.findPasswordContainer}>
        <Pressable onPress={handlePasswordPress}>
          <Text style={styles.findPassword}>비밀번호를 잊으셨나요?</Text>
        </Pressable>
      </View>
      <CustomButton label="로그인" filled />
      <View style={styles.signUpContainer}>
        <Text style={styles.noAccountText}>계정이 없으신가요?</Text>
        <Pressable onPress={handleSignUpPress}>
          <Text style={styles.signUpText}>회원가입 </Text>
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
