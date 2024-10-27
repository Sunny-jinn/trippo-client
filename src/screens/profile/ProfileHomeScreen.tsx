import CustomBottomTap from '@/components/common/CustomBottomTap';
import CustomHeader from '@/components/common/CustomHeader';
import CustomModal from '@/components/common/CustomModal';
import CustomText from '@/components/common/CustomText';
import {colors, profileNavigations} from '@/constants';
import {useAuth} from '@/hooks/queries/useAuth';
import {useModal} from '@/hooks/useModal';
import {ProfileStackParamList} from '@/navigations/stack/ProfileStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileHomeScreen = () => {
  const navigations =
    useNavigation<StackNavigationProp<ProfileStackParamList>>();

  const {isVisible, show, hide} = useModal();

  const {t} = useTranslation();

  const {
    isVisible: logoutVisible,
    show: showLogout,
    hide: hideLogout,
  } = useModal();

  const handleEditPress = () => {
    navigations.navigate(profileNavigations.EDIT_PROFILE);
  };

  const handleVersionPress = () => {
    show();
  };

  const {logoutMutation} = useAuth();

  const handleLogout = () => {
    logoutMutation.mutate(null);
  };

  return (
    <>
      <CustomBottomTap screen="Profile" />
      <ScrollView style={styles.scrollContainer}>
        <SafeAreaView style={styles.container}>
          <CustomHeader
            title={t('mypage.profile')}
            profile
            onEditPress={handleEditPress}
          />
          <View style={styles.topContainer}>
            <Image
              source={require('@/assets/search_thumbnail.png')}
              style={styles.profileImage}
            />
            <CustomText style={styles.profileNickname} weight="medium">
              Trippo
            </CustomText>
            <CustomText style={styles.profileEmail} weight="light">
              rlawlsdn316@gmail.com
            </CustomText>
          </View>
          <View style={styles.bottomContainer}>
            <Pressable
              style={styles.bottomBox}
              onPress={() => navigations.navigate(profileNavigations.NOTICE)}>
              <Text style={styles.bottomBoxText}>{t('mypage.notice')}</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name="chevron-forward-outline"
                size={18}
                color={colors.GRAY_700}
              />
            </Pressable>
            <Pressable style={styles.bottomBox} onPress={show}>
              <Text style={styles.bottomBoxText}>{t('mypage.center')}</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name="chevron-forward-outline"
                size={18}
                color={colors.GRAY_700}
              />
            </Pressable>

            <Pressable
              style={styles.bottomBox}
              onPress={() =>
                navigations.navigate(profileNavigations.TERMS_OF_USE)
              }>
              <Text style={styles.bottomBoxText}>{t('mypage.service')}</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name="chevron-forward-outline"
                size={18}
                color={colors.GRAY_700}
              />
            </Pressable>
            <Pressable style={styles.bottomBox} onPress={show}>
              <Text style={styles.bottomBoxText}>{t('mypage.version')}</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name="chevron-forward-outline"
                size={18}
                color={colors.GRAY_700}
              />
            </Pressable>
            <Pressable style={styles.bottomBox} onPress={showLogout}>
              <Text style={styles.bottomBoxText}>{t('mypage.logout')}</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name="chevron-forward-outline"
                size={18}
                color={colors.GRAY_700}
              />
            </Pressable>

            <Pressable
              style={[styles.bottomBox, {borderBottomWidth: 0}]}
              onPress={() =>
                navigations.navigate(profileNavigations.WITHDRAWAL)
              }>
              <Text style={styles.bottomBoxText}>{t('mypage.withdrawal')}</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name="chevron-forward-outline"
                size={18}
                color={colors.GRAY_700}
              />
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>

      <CustomModal
        single
        isVisible={isVisible}
        label="Version"
        icon="cloud-download-outline"
        confirm={hide}
        content={'The version currently in use is\n the latest version'}
      />

      <CustomModal
        isVisible={logoutVisible}
        label="Log Out"
        icon="log-out-outline"
        cancel={hideLogout}
        confirm={handleLogout}
        text="Log Out"
        content={'Are you sure you want to log out?'}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 150,
  },
  scrollContainer: {
    flex: 1,
  },
  topContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  profileNickname: {
    fontSize: 24,
    color: colors.BLACK,
    marginVertical: 8,
  },
  profileEmail: {
    fontSize: 14,
    color: colors.GRAY_700,
  },
  bottomContainer: {
    width: '100%',
    marginTop: 30,
    borderRadius: 16,
    backgroundColor: colors.WHITE,

    shadowColor: colors.GRAY_300,
    elevation: 10,
  },
  bottomBox: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.GRAY_500,
  },
  bottomBoxText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.BLACK,
  },
});

export default ProfileHomeScreen;
