import AuthExplain from '@/components/auth/AuthExplain';
import ForgotPasswordModal from '@/components/auth/ForgotPasswordModal';
import CustomButton from '@/components/common/CustomButton';
import CustomInputField from '@/components/common/CustomInputField';
import GoBackButton from '@/components/common/GoBackButton';
import {authNavigations} from '@/constants';
import {useModal} from '@/hooks/useModal';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

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
        <CustomInputField placeholder="이메일" />
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
