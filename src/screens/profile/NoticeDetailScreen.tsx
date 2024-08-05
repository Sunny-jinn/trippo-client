import CustomHeader from '@/components/common/CustomHeader';
import {colors} from '@/constants';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

interface NoticeDetailScreenProps {
  id?: number;
}

const DUMMY =
  'You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC... You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC... You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC... You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC...';

const NoticeDetailScreen = ({id}: NoticeDetailScreenProps) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <CustomHeader title="Notice Details" />
        <SafeAreaView style={styles.noticeDetailContainer}>
          <View style={styles.noticeDetailTopContainer}>
            <Text style={styles.noticeTitleText}>공지사항 6</Text>
            <Text style={styles.noticeDateText}>작성일 : 2020-20-20</Text>
          </View>
          <View style={styles.noticeDetailBottomContainer}>
            <View style={styles.noticeDetailBox}>
              <Text style={styles.noticeSubTitleText}>About Destination</Text>
              <Text style={styles.noticeContentText}>{DUMMY}</Text>
            </View>
            <View style={styles.noticeDetailBox}>
              <Text style={styles.noticeSubTitleText}>About Destination</Text>
              <Text style={styles.noticeContentText}>{DUMMY}</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  noticeDetailContainer: {
    marginBottom: 50,
  },
  noticeDetailTopContainer: {
    marginTop: 40,
  },
  noticeTitleText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    color: colors.BLACK,
  },
  noticeDateText: {
    color: colors.GRAY_700,
    fontSize: 15,
    lineHeight: 20,
    marginTop: 4,
  },
  noticeDetailBottomContainer: {
    marginTop: 40,
    gap: 8,
  },
  noticeDetailBox: {
    gap: 8,
  },
  noticeSubTitleText: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
    color: colors.BLACK,
  },
  noticeContentText: {
    fontSize: 13,
    lineHeight: 22,
    color: colors.GRAY_700,
  },
});

export default NoticeDetailScreen;
