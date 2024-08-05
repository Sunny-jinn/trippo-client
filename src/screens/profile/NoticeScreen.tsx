import CustomHeader from '@/components/common/CustomHeader';
import {colors, profileNavigations} from '@/constants';
import {ProfileStackParamList} from '@/navigations/stack/ProfileStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const NoticeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ProfileStackParamList>>();

  const handlePress = () => {
    navigation.navigate(profileNavigations.NOTICE_DETAIL, {id: 0});
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Notice" />
      <View style={styles.noticeContainer}>
        <Pressable style={styles.noticeBox} onPress={handlePress}>
          <View style={styles.noticeTopBox}>
            <Text style={styles.noticeTitle}>공지사항1</Text>
            <Text style={styles.noticeDate}>08:45</Text>
          </View>
          <View style={styles.noticeBottomBox}>
            <Text
              style={styles.noticeDescription}
              numberOfLines={2}
              ellipsizeMode="tail">
              안녕하세요, Trippo입니다. 저희 서비스는 어쩌고 저쩌고
              Tripoo입니다. 저희 서비스는 어쩌고 저쩌고 얄랄라 랄랄라라라라라
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.noticeBox} onPress={handlePress}>
          <View style={styles.noticeTopBox}>
            <Text style={styles.noticeTitle}>공지사항1</Text>
            <Text style={styles.noticeDate}>08:45</Text>
          </View>
          <View style={styles.noticeBottomBox}>
            <Text
              style={styles.noticeDescription}
              numberOfLines={2}
              ellipsizeMode="tail">
              안녕하세요, Trippo입니다. 저희 서비스는 어쩌고 저쩌고
              Tripoo입니다. 저희 서비스는 어쩌고 저쩌고 얄랄라 랄랄라라라라라
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.noticeBox} onPress={handlePress}>
          <View style={styles.noticeTopBox}>
            <Text style={styles.noticeTitle}>공지사항1</Text>
            <Text style={styles.noticeDate}>08:45</Text>
          </View>
          <View style={styles.noticeBottomBox}>
            <Text
              style={styles.noticeDescription}
              numberOfLines={2}
              ellipsizeMode="tail">
              안녕하세요, Trippo입니다. 저희 서비스는 어쩌고 저쩌고
              Tripoo입니다. 저희 서비스는 어쩌고 저쩌고 얄랄라 랄랄라라라라라
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  noticeContainer: {
    gap: 16,
    marginTop: 40,
  },
  noticeBox: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    elevation: 10,
    borderRadius: 16,
  },
  noticeTopBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.BLACK,
  },
  noticeDate: {
    fontSize: 11,
    color: colors.GRAY_700,
    marginLeft: 'auto',
  },
  noticeBottomBox: {
    marginTop: 10,
  },
  noticeDescription: {
    color: colors.GRAY_700,
    fontSize: 14,
    lineHeight: 16,
  },
});

export default NoticeScreen;
