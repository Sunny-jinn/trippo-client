import CustomButton from '@/components/common/CustomButton';
import CustomDropdown from '@/components/common/CustomDropdown';
import CustomHeader from '@/components/common/CustomHeader';
import CustomInputField from '@/components/common/CustomInputField';
import {colors} from '@/constants';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const EditProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Edit Profile" />
      <View style={styles.topContainer}>
        <Image
          source={require('@/assets/search_thumbnail.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileNickname}>Trippo</Text>
        <Text style={styles.profileChangeText}>Change Profile Picture</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomChangeBox}>
          <Text style={styles.bottomTitleText}>Nickname</Text>
          <CustomInputField value="Trippo" />
        </View>
        <View style={styles.bottomChangeBox}>
          <Text style={styles.bottomTitleText}>Language</Text>
          <CustomDropdown
            options={['English', 'Korean', 'Japanese', 'Chinese']}
          />
        </View>
        <View style={styles.bottomChangeBox}>
          <Text style={styles.bottomTitleText}>Nickname</Text>
          <View style={styles.bottomLoginInfo}>
            <Text style={styles.bottomLoginInfoText}>Trippo@naver.com</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 'auto', marginBottom: 20}}>
        <CustomButton label="Done" filled />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
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
  profileChangeText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.ORANGE,
  },
  bottomContainer: {
    marginTop: 30,
  },
  bottomChangeBox: {
    gap: 12,
    marginBottom: 16,
  },
  bottomTitleText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.BLACK,
    lineHeight: 24,
  },
  bottomLoginInfo: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: colors.ORANGE,
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  bottomLoginInfoText: {
    fontSize: 16,
    lineHeight: 16,
    color: colors.BLACK,
  },
});

export default EditProfileScreen;
