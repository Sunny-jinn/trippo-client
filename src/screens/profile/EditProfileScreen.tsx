import CustomButton from '@/components/common/CustomButton';
import CustomDropdown from '@/components/common/CustomDropdown';
import CustomHeader from '@/components/common/CustomHeader';
import CustomInputField from '@/components/common/CustomInputField';
import {colors} from '@/constants';
import {useGetUserInfo} from '@/hooks/queries/useGetUserInfo';
import {useUpdateUserInfo} from '@/hooks/queries/useUpdateUserInfo';
import useUserLanguage from '@/store/useUserLanguage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const languageOptions = [
  {label: 'English', value: 'en'},
  {label: 'Korean', value: 'kr'},
  {label: 'Japanese', value: 'jp'},
  {label: 'Chinese', value: 'cn'},
];

const EditProfileScreen = () => {
  const {data, isLoading, isError} = useGetUserInfo();
  const [nickname, setNickname] = useState('');
  const [language, setLanguage] = useState('');
  const {mutate: updateUserInfo} = useUpdateUserInfo();

  const {setLanguage: setUserLanguage} = useUserLanguage();

  const {t, i18n} = useTranslation();

  const navigation = useNavigation();

  // Initialize state once data is available
  useEffect(() => {
    if (data) {
      setNickname(data.nickname);
      setLanguage(data.language);
    }
  }, [data]);
  //!FIX: 유저 정보 수정 시 무한 로딩
  const handleUpdateProfile = () => {
    if (!nickname || !language) {
      console.error('Nickname and language must be provided');
      return;
    }
    console.log(nickname, language);

    updateUserInfo(
      {nickname, language},
      {
        onSuccess: () => {
          navigation.goBack();
        },
        onError: error => {
          setUserLanguage(language);
          i18n.changeLanguage(language);
          navigation.goBack();
        },
      },
    );
  };

  // Show a loading indicator while data is being fetched

  return (
    <>
      {!isLoading && (
        <SafeAreaView style={styles.container}>
          <CustomHeader title="Edit Profile" />
          <View style={styles.topContainer}>
            <Image
              source={require('@/assets/search_thumbnail.png')}
              style={styles.profileImage}
            />
            <Text style={styles.profileNickname}>{data?.nickname}</Text>
            <Text style={styles.profileChangeText}>Change Profile Picture</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomChangeBox}>
              <Text style={styles.bottomTitleText}>Nickname</Text>
              <CustomInputField value={nickname} onChangeText={setNickname} />
            </View>
            <View style={styles.bottomChangeBox}>
              <Text style={styles.bottomTitleText}>Language</Text>
              <CustomDropdown
                options={languageOptions}
                selectedValue={language}
                onValueChange={setLanguage}
              />
            </View>
            <View style={styles.bottomChangeBox}>
              <Text style={styles.bottomTitleText}>Login information</Text>
              <View style={styles.bottomLoginInfo}>
                <Text style={styles.bottomLoginInfoText}>{data?.email}</Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 'auto', marginBottom: 20}}>
            <CustomButton label={'Done'} filled onPress={handleUpdateProfile} />
          </View>
        </SafeAreaView>
      )}
    </>
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
