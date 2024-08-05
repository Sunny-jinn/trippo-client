import CustomBottomTap from '@/components/common/CustomBottomTap';
import CustomHeader from '@/components/common/CustomHeader';
import CustomModal from '@/components/common/CustomModal';
import {colors, profileNavigations} from '@/constants';
import {useModal} from '@/hooks/useModal';
import {ProfileStackParamList} from '@/navigations/stack/ProfileStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
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

  return (
    <>
      <CustomBottomTap />
      <ScrollView style={styles.scrollContainer}>
        <SafeAreaView style={styles.container}>
          <CustomHeader title="Profile" profile onEditPress={handleEditPress} />
          <View style={styles.topContainer}>
            <Image
              source={require('@/assets/search_thumbnail.png')}
              style={styles.profileImage}
            />
            <Text style={styles.profileNickname}>Trippo</Text>
            <Text style={styles.profileEmail}>rlawlsdn316@gmail.com</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Pressable
              style={styles.bottomBox}
              onPress={() => navigations.navigate(profileNavigations.NOTICE)}>
              <Text style={styles.bottomBoxText}>Notice</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name="chevron-forward-outline"
                size={18}
                color={colors.GRAY_700}
              />
            </Pressable>
            <Pressable style={styles.bottomBox} onPress={show}>
              <Text style={styles.bottomBoxText}>Service Center</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name="chevron-forward-outline"
                size={18}
                color={colors.GRAY_700}
              />
            </Pressable>

            <Pressable style={styles.bottomBox}>
              <Text style={styles.bottomBoxText}>Terms of Use</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name="chevron-forward-outline"
                size={18}
                color={colors.GRAY_700}
              />
            </Pressable>
            <Pressable style={styles.bottomBox}>
              <Text style={styles.bottomBoxText}>Version Info</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name="chevron-forward-outline"
                size={18}
                color={colors.GRAY_700}
              />
            </Pressable>
            <Pressable style={styles.bottomBox} onPress={showLogout}>
              <Text style={styles.bottomBoxText}>Logout</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                name="chevron-forward-outline"
                size={18}
                color={colors.GRAY_700}
              />
            </Pressable>

            <Pressable style={[styles.bottomBox, {borderBottomWidth: 0}]}>
              <Text style={styles.bottomBoxText}>Withdrawal</Text>
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
        confirm={hideLogout}
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
    fontWeight: '500',
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
