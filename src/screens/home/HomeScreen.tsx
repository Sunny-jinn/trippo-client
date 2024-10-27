import React, {useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';

import {usePermission} from '@/hooks/usePermissions';
import CustomBottomTap from '@/components/common/CustomBottomTap';
import {colors} from '@/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useGetUserInfo} from '@/hooks/queries/useGetUserInfo';
import useUserLanguage from '@/store/useUserLanguage';
import {useTranslation} from 'react-i18next';

const HomeScreen = () => {
  usePermission('LOCATION');
  const {data, isLoading, isError} = useGetUserInfo();
  const {getLanguage, setLanguage} = useUserLanguage(); // zustand의 setLanguage 불러오기

  const {t, i18n} = useTranslation();

  useEffect(() => {
    if (data?.language) {
      console.log('현재언어: ', data.language);
      setLanguage(data.language); // language 값을 zustand 상태에 저장
      i18n.changeLanguage(data.language);
    }
  }, [getLanguage]); // data가 변경될 때마다 실행

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          scrollIndicatorInsets={{right: 1}}>
          <View style={styles.innerContainer}>
            <View style={styles.planningTrip}>
              <Image
                source={require('@/assets/search_thumbnail.png')}
                style={styles.planningTripImg}
              />
              <Text style={styles.planningTripText}>Planning a trip</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={16}
                color={colors.BLACK}
              />
            </View>

            <View style={styles.introTextContainer}>
              <Text style={[styles.introText]}>{t('home.explore')}</Text>
              <View style={{flexDirection: 'row', gap: 11}}>
                <Text style={[styles.introText, styles.introTextBold]}>
                  {t('home.beautiful')}
                </Text>
                <Text
                  style={[
                    styles.introText,
                    styles.introTextBold,
                    styles.introTextColor,
                  ]}>
                  {t('home.jeju')}
                </Text>
              </View>
            </View>

            <View style={styles.bestDestinationContainer}>
              <View style={styles.bestDestinationTitle}>
                <Text style={styles.bestDestinationText}>{t('home.best')}</Text>
                <Text style={styles.bestDestinationViewText}>
                  {t('home.viewAll')}
                </Text>
              </View>
              <View style={styles.bestDestinationWrapper}>
                <ScrollView
                  horizontal
                  contentContainerStyle={styles.bestDestinationContents}
                  showsHorizontalScrollIndicator={false}>
                  <View style={styles.bestDestinationCard}>
                    <Image
                      source={require('@/assets/search_thumbnail.png')}
                      style={styles.bestDestinationImg}
                    />
                    <Text style={styles.bestDestinationSubtitle}>
                      Family trip
                    </Text>
                    <Text style={styles.bestDestinationSpot}>Jeju</Text>
                  </View>
                  <View style={styles.bestDestinationCard}>
                    <Image
                      source={require('@/assets/search_thumbnail.png')}
                      style={styles.bestDestinationImg}
                    />
                    <Text style={styles.bestDestinationSubtitle}>
                      Family trip
                    </Text>
                    <Text style={styles.bestDestinationSpot}>Jeju</Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
        <CustomBottomTap screen="Home" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  innerContainer: {
    marginTop: 20,
    marginBottom: 100,
  },
  planningTrip: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    width: 186,
    backgroundColor: colors.GRAY_500,
    borderRadius: 100,
  },
  planningTripImg: {
    width: 37,
    height: 37,
    borderRadius: 100,
    marginRight: 6,
  },
  planningTripText: {
    color: colors.BLACK,
    fontWeight: '500',
    lineHeight: 16,
    marginRight: 16,
  },
  introTextContainer: {
    marginTop: 24,
  },
  introText: {
    fontSize: 38,
    color: colors.BLACK,
    fontWeight: '300',
  },
  introTextBold: {
    fontWeight: '600',
  },
  introTextColor: {
    color: colors.ORANGE,
  },
  bestDestinationContainer: {
    marginTop: 30,
  },
  bestDestinationTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bestDestinationText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.BLACK,
  },
  bestDestinationViewText: {
    color: colors.ORANGE,
  },
  bestDestinationWrapper: {
    marginHorizontal: -20,
    overflow: 'visible',
  },
  bestDestinationContents: {
    padding: 20,
  },
  bestDestinationCard: {
    paddingTop: 14,
    paddingHorizontal: 14,
    paddingBottom: 16,
    marginRight: 16,
    borderRadius: 16,
    backgroundColor: colors.WHITE,
    shadowColor: colors.GRAY_700,
    elevation: 5,
  },
  bestDestinationImg: {
    width: 240,
    height: 286,
    borderRadius: 16,
    marginBottom: 14,
  },
  bestDestinationSubtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.BLACK,
  },
  bestDestinationSpot: {
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 20,
    color: colors.GRAY_700,
  },
});

export default HomeScreen;
