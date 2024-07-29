import CustomButton from '@/components/common/CustomButton';
import GoBackButton from '@/components/common/GoBackButton';
import {calendarNavigations, colors} from '@/constants';
import {CalendarStackParamList} from '@/navigations/stack/CalendarStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ChooseThemeScreenProps {}

type TSelectedTags = {
  [key: string]: boolean;
};

const ChooseThemeScreen = ({}: ChooseThemeScreenProps) => {
  const [selectedWhomTags, setSelectedWhomTags] = useState<TSelectedTags>({
    Alone: false,
    Friend: false,
    Lover: false,
    Spouse: false,
    Children: false,
    Parents: false,
    'Etc.': false,
  });

  const [selectedStyleTags, setSelectedStyleTags] = useState<TSelectedTags>({
    Activity: false,
    Healing: false,
    'Hot place': false,
    Shopping: false,
    Mukbang: false,
    Nature: false,
    Museum: false,
    'Etc.': false,
  });

  const insets = useSafeAreaInsets();

  const navigation =
    useNavigation<StackNavigationProp<CalendarStackParamList>>();

  const handleWhomTagPress = (tag: string) => {
    setSelectedWhomTags(prevState => ({
      ...prevState,
      [tag]: !prevState[tag],
    }));
  };

  const handleStyleTagPress = (tag: string) => {
    setSelectedStyleTags(prevState => ({
      ...prevState,
      [tag]: !prevState[tag],
    }));
  };

  const handlePressButton = () => {
    navigation.navigate(calendarNavigations.SCHEDULE);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <GoBackButton />
        </View>
        <Text style={styles.headerText}>Choose a theme</Text>
      </View>
      <View>
        <View style={styles.tagContainer}>
          <Text style={styles.subtitleText}>With whom</Text>
          <View style={styles.tagInnerContainer}>
            {['Alone', 'Friend', 'Lover'].map(tag => (
              <Pressable
                key={tag}
                onPress={() => handleWhomTagPress(tag)}
                style={[
                  styles.tagBox,
                  selectedWhomTags[tag] && styles.selectedTagBox,
                ]}>
                <Text
                  style={[
                    styles.tagText,
                    selectedWhomTags[tag] && styles.selectedTagText,
                  ]}>
                  {tag}
                </Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.tagInnerContainer}>
            {['Spouse', 'Children', 'Parents', 'Etc.'].map(tag => (
              <Pressable
                key={tag}
                onPress={() => handleWhomTagPress(tag)}
                style={[
                  styles.tagBox,
                  selectedWhomTags[tag] && styles.selectedTagBox,
                ]}>
                <Text
                  style={[
                    styles.tagText,
                    selectedWhomTags[tag] && styles.selectedTagText,
                  ]}>
                  {tag}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <Text style={styles.subtitleText}>Travel Style</Text>
        <View style={styles.tagInnerContainer}>
          {['Activity', 'Healing', 'Hot place', 'Shopping'].map(tag => (
            <Pressable
              key={tag}
              onPress={() => handleStyleTagPress(tag)}
              style={[
                styles.tagBox,
                selectedStyleTags[tag] && styles.selectedTagBox,
              ]}>
              <Text
                style={[
                  styles.tagText,
                  selectedStyleTags[tag] && styles.selectedTagText,
                ]}>
                {tag}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.tagInnerContainer}>
          {['Mukbang', 'Nature', 'Museum', 'Etc.'].map(tag => (
            <Pressable
              key={tag}
              onPress={() => handleStyleTagPress(tag)}
              style={[
                styles.tagBox,
                selectedStyleTags[tag] && styles.selectedTagBox,
              ]}>
              <Text
                style={[
                  styles.tagText,
                  selectedStyleTags[tag] && styles.selectedTagText,
                ]}>
                {tag}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={[styles.buttonContainer, {bottom: insets.bottom + 20}]}>
        <CustomButton label="Done" filled onPress={handlePressButton} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.BLACK,
  },
  subtitleText: {
    fontWeight: '600',
    fontSize: 20,
    color: colors.BLACK,
  },
  tagContainer: {
    marginVertical: 30,
  },
  tagInnerContainer: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 16,
  },
  tagBox: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: colors.GRAY_500,
    borderRadius: 100,
  },
  selectedTagBox: {
    backgroundColor: colors.BLACK,
  },
  tagText: {
    color: colors.BLACK,
  },
  selectedTagText: {
    color: colors.WHITE,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
  },
});

export default ChooseThemeScreen;
