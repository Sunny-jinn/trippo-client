import AuthExplain from '@/components/auth/AuthExplain';
import CustomButton from '@/components/common/CustomButton';
import GoBackButton from '@/components/common/GoBackButton';
import {authNavigations} from '@/constants';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface LanguageScreenProps {}

const LanguageScreen = ({}: LanguageScreenProps) => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const pressHandler = () => {
    navigation.navigate(authNavigations.LOGIN);
  };

  return (
    <View>
      <GoBackButton />
      <AuthExplain
        title="언어 선택"
        subTitle={'서비스를 이용하시면서\n사용하실 언어를 선택해 주세요.'}
      />
      <View style={styles.buttonContainer}>
        {['Korean', 'English', 'Chinese', 'Japanese'].map(
          (item: string, idx: number) => (
            <CustomButton label={item} key={idx} onPress={pressHandler} />
          ),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 68,
    gap: 24,
  },
});

export default LanguageScreen;
