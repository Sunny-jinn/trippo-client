import CustomButton from '@/components/common/CustomButton';
import {authNavigations, colors} from '@/constants';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface WalkthroughScreenProps {}

const WalkthroughScreen = ({}: WalkthroughScreenProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const handlePress = () => {
    navigation.navigate(authNavigations.LANGUAGE);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.BLUE_500} barStyle="light-content" />
      <Pressable
        style={[styles.skipButton, {marginTop: insets.top}]}
        onPress={handlePress}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </Pressable>
      <View style={styles.topContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('@/assets/walkthrough_1.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.titleText}>
          {'Life is short and the\nworld is wide'}
        </Text>
        <Text style={styles.subTitleText}>
          {
            'At friends tours and travel, we customize\nreliable and trustworthy educational tours to\ndestinations all over the world'
          }
        </Text>
        <View style={styles.buttonContainer}>
          <CustomButton filled label="Next" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1.3,
    backgroundColor: colors.BLUE_500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  skipButton: {
    position: 'absolute',
    top: 0,
    right: 20,
    zIndex: 1,
  },
  skipButtonText: {
    color: colors.WHITE,
    fontSize: 18,
  },
  bottomContainer: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    marginTop: 30,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 35,
  },
  titleText: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.BLACK,
  },
  subTitleText: {
    marginTop: 20,
    textAlign: 'center',
    color: colors.GRAY_700,
    lineHeight: 24,
  },
});

export default WalkthroughScreen;
