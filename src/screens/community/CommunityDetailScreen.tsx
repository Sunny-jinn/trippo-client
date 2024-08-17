import CustomHeader from '@/components/common/CustomHeader';
import {colors} from '@/constants';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

interface CommunityDetailScreenProps {}

const DUMMY =
  'You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC... You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC... You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC... You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC...';

const CommunityDetailScreen = ({}: CommunityDetailScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <CustomHeader title="Community" />
        <View style={styles.communityDetailTopContainer}>
          <Text style={styles.communityTitleText}>공지사항 6</Text>
          <Text style={styles.communityDateText}>작성일 : 2020-20-20</Text>
        </View>
        <View style={styles.communityDetailBottomContainer}>
          <View style={styles.communityContent}>
            <Text style={styles.communitySubTitle}>About Destination</Text>
            <Text style={styles.communityContentText}>{DUMMY}</Text>
          </View>
          <View style={styles.communityContent}>
            <Text style={styles.communitySubTitle}>About Destination</Text>
            <Text style={styles.communityContentText}>{DUMMY}</Text>
          </View>
        </View>
        <View style={styles.communityCommentContainer}>
          <View style={styles.commentTitleBox}>
            <Text style={styles.commentTitle}>Comments</Text>
            <Text style={styles.commentCount}>200</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  communityDetailTopContainer: {
    marginTop: 40,
  },
  communityTitleText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    color: colors.BLACK,
  },
  communityDateText: {
    color: colors.GRAY_700,
    fontSize: 15,
    lineHeight: 20,
    marginTop: 4,
  },
  communityDetailBottomContainer: {
    marginTop: 40,
    gap: 8,
  },
  communityContent: {
    gap: 8,
  },
  communitySubTitle: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
    color: colors.BLACK,
  },
  communityContentText: {
    fontSize: 13,
    lineHeight: 22,
    color: colors.GRAY_700,
  },
  communityCommentContainer: {
    marginTop: 64,
  },
  commentTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  commentTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.BLACK,
    lineHeight: 28,
  },
  commentCount: {
    color: colors.BLACK,
    fontWeight: '600',
    lineHeight: 28,
  },
});

export default CommunityDetailScreen;
