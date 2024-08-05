import CustomHeader from '@/components/common/CustomHeader';
import {colors} from '@/constants';
import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type TermTypes = 'Terms of Service' | 'Privacy Policy' | 'Location Policy';

type ContentMap = Record<TermTypes, string>;

const TERMS_OF_USES: TermTypes[] = [
  'Terms of Service',
  'Privacy Policy',
  'Location Policy',
];

const content: ContentMap = {
  'Terms of Service': '텀스오브서비스',
  'Privacy Policy': '프라이버시 폴리시',
  'Location Policy': '로케이션 폴리시',
};

const TermsofUseScreen = () => {
  const [selectTab, setSelectTab] = useState<TermTypes>('Terms of Service');

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.termsofuseContainer}>
        <CustomHeader title="Terms of Use" />
        <ScrollView style={styles.tabBarContainer} horizontal>
          {TERMS_OF_USES.map((item, idx) => (
            <Pressable
              key={idx}
              style={[
                styles.tabBarBox,
                item === selectTab && styles.selectedTabBarBox,
                idx !== 0 && styles.notFirstTab,
              ]}
              onPress={() => setSelectTab(item)}>
              <Text
                style={[
                  styles.tabBarText,
                  item === selectTab && styles.selectedTabBarText,
                ]}>
                {item}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <View style={styles.bottomContainer}>
          <Text style={styles.termsofuseTitle}>{selectTab}</Text>
          <Text style={styles.termsofuseDate}>
            작성일 : 2020-20-20 / 버전 : 1.0
          </Text>
          <View style={styles.termsofuseContent}>
            <Text style={styles.termsofuseContentTitle}>
              {content[selectTab]}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  termsofuseContainer: {
    marginHorizontal: 20,
  },
  tabBarContainer: {
    marginTop: 40,
  },
  tabBarBox: {
    paddingVertical: 11,
    paddingHorizontal: 18,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.BLACK,
  },
  selectedTabBarBox: {
    backgroundColor: colors.BLACK,
  },
  tabBarText: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16.71,
  },
  selectedTabBarText: {
    color: colors.WHITE,
  },
  notFirstTab: {
    marginLeft: -1,
  },
  bottomContainer: {
    marginTop: 40,
  },
  termsofuseTitle: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: colors.BLACK,
  },
  termsofuseDate: {
    marginTop: 4,
    fontSize: 15,
    lineHeight: 20,
    color: colors.GRAY_700,
  },
  termsofuseContent: {
    marginTop: 40,
  },
  termsofuseContentTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    color: colors.BLACK,
  },
});

export default TermsofUseScreen;
