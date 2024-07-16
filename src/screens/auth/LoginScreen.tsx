import AuthExplain from '@/components/auth/AuthExplain';
import CustomButton from '@/components/common/CustomButton';
import CustomInputField from '@/components/common/CustomInputField';
import GoBackButton from '@/components/common/GoBackButton';
import {authNavigations, colors} from '@/constants';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

interface LoginScreenProps {}

const LoginScreen = ({}: LoginScreenProps) => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const pressHandler = () => {
    navigation.navigate(authNavigations.SIGN_UP);
  };
  return (
    <View style={styles.container}>
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
        <Text style={styles.findPassword}>비밀번호를 잊으셨나요?</Text>
      </View>
      <CustomButton label="로그인" filled />
      <View style={styles.signUpContainer}>
        <Text style={styles.noAccountText}>계정이 없으신가요?</Text>
        <Pressable onPress={pressHandler}>
          <Text style={styles.signUpText}>회원가입 </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    gap: 24,
    marginTop: 40,
    marginHorizontal: 20,
  },
  findPasswordContainer: {
    width: '100%',
    marginTop: 16,
    marginBottom: 40,
  },
  findPassword: {
    marginLeft: 'auto',
    marginRight: 20,
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
