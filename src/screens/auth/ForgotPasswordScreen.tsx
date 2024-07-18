import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';

import {useModal} from '@/hooks/useModal';
import AuthExplain from '@/components/auth/AuthExplain';
import CustomButton from '@/components/common/CustomButton';
import GoBackButton from '@/components/common/GoBackButton';
import CustomInputField from '@/components/common/CustomInputField';
import {authNavigations} from '@/constants';
import ForgotPasswordModal from '@/components/auth/ForgotPasswordModal';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';

interface ForgotPasswordScreeProps {}

const ForgotPasswordScreen = ({}: ForgotPasswordScreeProps) => {
  const forgotPasswordModal = useModal();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const handlePress = () => {
    navigation.navigate(authNavigations.VERIFICATION_CODE);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoBackButton />
      <Pressable onPress={handlePress}>
        <AuthExplain
          title="비밀번호 찾기"
          subTitle={'새로운 비밀번호를 받으실 \n이메일 계정을 입력해주세요.'}
        />
      </Pressable>
      <View style={styles.inputContainer}>
        <CustomInputField placeholder="이메일" inputMode="email" />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          filled
          label="비밀번호 찾기"
          onPress={() => forgotPasswordModal.show()}
        />
      </View>
      <ForgotPasswordModal
        isVisible={forgotPasswordModal.isVisible}
        hide={forgotPasswordModal.hide}
      />
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
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 20,
  },
});

export default ForgotPasswordScreen;
