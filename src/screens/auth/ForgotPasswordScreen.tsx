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
import {useTranslation} from 'react-i18next';

interface ForgotPasswordScreeProps {}

const ForgotPasswordScreen = ({}: ForgotPasswordScreeProps) => {
  const forgotPasswordModal = useModal();
  const {t, i18n} = useTranslation();

  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const handlePress = () => {
    navigation.navigate(authNavigations.VERIFICATION_CODE);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoBackButton />
      <Pressable onPress={handlePress}>
        <AuthExplain
          title={t('forgotPassword.title')}
          subTitle={t('forgotPassword.subTitle')}
        />
      </Pressable>
      <View style={styles.inputContainer}>
        <CustomInputField
          placeholder={t('placeholder.email')}
          inputMode="email"
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          filled
          label={t('forgotPassword.title')}
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
