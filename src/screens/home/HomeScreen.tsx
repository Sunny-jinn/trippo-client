import {calendarNavigations, colors, mainNavigations} from '@/constants';
import {CalendarStackParamList} from '@/navigations/stack/CalendarStackNavigator';
import {MainHomeStackParamList} from '@/navigations/stack/MainHomeStackNavigator';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const navigations =
    useNavigation<StackNavigationProp<MainHomeStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        scrollIndicatorInsets={{right: 1}}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>홈 스크린</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomTabBar}>
        <View style={styles.bottomInner}>
          <View style={styles.bottomTabIcon}>
            <Ionicons name="home-outline" size={25} color={colors.BLUE_500} />
            <Text style={[styles.bottomTabText, {color: colors.BLUE_500}]}>
              Home
            </Text>
          </View>
          <Pressable
            style={styles.bottomTabIcon}
            onPress={() => navigations.navigate(mainNavigations.CALENDAR)}>
            <Ionicons
              name="calendar-outline"
              size={25}
              color={colors.GRAY_700}
            />
            <Text style={styles.bottomTabText}>Calendar</Text>
          </Pressable>
          <View style={[styles.bottomTabIcon]}>
            <View style={styles.bottomTabSearchIcon}>
              <Ionicons name="search-outline" size={25} color={colors.WHITE} />
            </View>
          </View>
          <View style={styles.bottomTabIcon}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={25}
              color={colors.GRAY_700}
            />
            <Text style={styles.bottomTabText}>Community</Text>
          </View>
          <View style={styles.bottomTabIcon}>
            <Ionicons name="person-outline" size={25} color={colors.GRAY_700} />
            <Text style={styles.bottomTabText}>Profile</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    // marginBottom: 80,
  },
  innerContainer: {
    marginBottom: 100,
  },
  text: {
    fontSize: 50,
  },
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

export default HomeScreen;
