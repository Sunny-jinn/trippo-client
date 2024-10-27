import CustomHeader from '@/components/common/CustomHeader';
import {colors, profileNavigations} from '@/constants';
import {useGetNotice} from '@/hooks/queries/useGetNotice';
import {ProfileStackParamList} from '@/navigations/stack/ProfileStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const NoticeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ProfileStackParamList>>();

  const handlePress = (id: number) => {
    navigation.navigate(profileNavigations.NOTICE_DETAIL, {id: id});
  };

  const {data, isPending, isError} = useGetNotice();

  if (isPending || isError) {
    return <></>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomHeader title="Notice" />
      <View style={styles.noticeContainer}>
        {data.map(({id, contents, title}) => (
          <Pressable
            style={styles.noticeBox}
            onPress={() => handlePress(id)}
            key={id}>
            <View style={styles.noticeTopBox}>
              <Text style={styles.noticeTitle}>{title}</Text>
              {/* <Text style={styles.noticeDate}>08:45</Text> */}
            </View>
            <View style={styles.noticeBottomBox}>
              <Text
                style={styles.noticeDescription}
                numberOfLines={2}
                ellipsizeMode="tail">
                {contents}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
