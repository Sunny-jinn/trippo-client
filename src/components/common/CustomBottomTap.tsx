import {colors, mainNavigations} from '@/constants';
import {MainHomeStackParamList} from '@/navigations/stack/MainHomeStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CustomBottomTapProps {
  screen: string;
}

const CustomBottomTap = ({screen}: CustomBottomTapProps) => {
  const navigations =
    useNavigation<StackNavigationProp<MainHomeStackParamList>>();

  return (
    <View style={styles.bottomTabBar}>
      <View style={styles.bottomInner}>
        <Pressable
          style={styles.bottomTabIcon}
          onPress={() => navigations.navigate(mainNavigations.HOME)}>
          <Ionicons
            name="home-outline"
            size={25}
            color={screen === 'Home' ? colors.BLUE_500 : colors.GRAY_700}
          />
          <Text
            style={[
              styles.bottomTabText,
              screen === 'Home' && {color: colors.BLUE_500},
            ]}>
            Home
          </Text>
        </Pressable>
        <Pressable
          style={styles.bottomTabIcon}
          onPress={() => navigations.navigate(mainNavigations.CALENDAR)}>
          <Ionicons
            name="calendar-outline"
            size={25}
            color={screen === 'Calendar' ? colors.BLUE_500 : colors.GRAY_700}
          />
          <Text
            style={[
              styles.bottomTabText,
              screen === 'Calendar' && {color: colors.BLUE_500},
            ]}>
            Calendar
          </Text>
        </Pressable>
        <Pressable
          style={[styles.bottomTabIcon]}
          onPress={() => navigations.navigate(mainNavigations.SEARCH)}>
          <View style={styles.bottomTabSearchIcon}>
            <Ionicons name="search-outline" size={25} color={colors.WHITE} />
          </View>
        </Pressable>
        <Pressable
          style={styles.bottomTabIcon}
          onPress={() => navigations.navigate(mainNavigations.COMMUNITY)}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={25}
            color={screen === 'Community' ? colors.BLUE_500 : colors.GRAY_700}
          />
          <Text
            style={[
              styles.bottomTabText,
              screen === 'Community' && {color: colors.BLUE_500},
            ]}>
            Community
          </Text>
        </Pressable>
        <Pressable
          style={styles.bottomTabIcon}
          onPress={() => navigations.navigate(mainNavigations.PROFILE)}>
          <Ionicons
            name="person-outline"
            size={25}
            color={screen === 'Profile' ? colors.BLUE_500 : colors.GRAY_700}
          />
          <Text
            style={[
              styles.bottomTabText,
              screen === 'Profile' && {color: colors.BLUE_500},
            ]}>
            Profile
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.WHITE,
    borderTopColor: colors.BLACK,
    height: 90,
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: -6},
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 40,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    zIndex: 1,
  },
  bottomInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomTabIcon: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabText: {
    fontWeight: '500',
    fontSize: 12,
    marginTop: 4,
    color: colors.GRAY_600,
  },
  bottomTabSearchIcon: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: colors.BLUE_500,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.BLUE_500,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 7,
  },
});

export default CustomBottomTap;
