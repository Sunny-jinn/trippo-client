import React, {useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';

import {colors} from '@/constants';
import AuthExplain from '@/components/auth/AuthExplain';
import CustomButton from '@/components/common/CustomButton';
import GoBackButton from '@/components/common/GoBackButton';

interface VerificationCodeScreenProps {}

const VerificationCodeScreen = ({}: VerificationCodeScreenProps) => {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);
  const input4Ref = useRef<TextInput>(null);

  const handleInputChange = (
    text: string,
    nextInputRef: React.RefObject<TextInput> | null,
    currentIndex: number,
  ) => {
    if (text.length === 1) {
      if (nextInputRef && nextInputRef.current) {
        nextInputRef.current.focus();
      } else if (currentIndex === 4) {
        Keyboard.dismiss();
      }
    }
  };

  const handleKeyPress = (
    e: {nativeEvent: {key: string}},
    prevInputRef: React.RefObject<TextInput> | null,
  ) => {
    if (
      e.nativeEvent.key === 'Backspace' &&
      prevInputRef &&
      prevInputRef.current
    ) {
      prevInputRef.current.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoBackButton />
      <AuthExplain
        title="인증코드 입력"
        subTitle="이메일로 전송된 인증 코드를 확인해 입력해주세요."
      />
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>인증 코드</Text>
        <View style={styles.codeInputContainer}>
          <TextInput
            autoFocus
            style={styles.codeInput}
            inputMode="numeric"
            maxLength={1}
            ref={input1Ref}
            onChangeText={text => handleInputChange(text, input2Ref, 1)}
            onKeyPress={e => handleKeyPress(e, null)}
          />
          <TextInput
            style={styles.codeInput}
            inputMode="numeric"
            maxLength={1}
            ref={input2Ref}
            onChangeText={text => handleInputChange(text, input3Ref, 2)}
            onKeyPress={e => handleKeyPress(e, input1Ref)}
          />
          <TextInput
            style={styles.codeInput}
            inputMode="numeric"
            maxLength={1}
            ref={input3Ref}
            onChangeText={text => handleInputChange(text, input4Ref, 3)}
            onKeyPress={e => handleKeyPress(e, input2Ref)}
          />
          <TextInput
            style={styles.codeInput}
            inputMode="numeric"
            maxLength={1}
            ref={input4Ref}
            onChangeText={text => handleInputChange(text, null, 4)}
            onKeyPress={e => handleKeyPress(e, input3Ref)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton filled label="확인" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  codeContainer: {
    marginTop: 60,
    gap: 16,
  },
  codeText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.BLACK,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  codeInput: {
    width: 70,
    height: 56,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: colors.BLACK,
    backgroundColor: colors.GRAY_500,
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 20,
  },
});

export default VerificationCodeScreen;
