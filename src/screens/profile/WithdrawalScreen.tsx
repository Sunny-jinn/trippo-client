import CustomButton from '@/components/common/CustomButton';
import CustomHeader from '@/components/common/CustomHeader';
import {colors} from '@/constants';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const DUMMY =
  'You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC... You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC... You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC... You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC... ';

const WithdrawalScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CustomHeader title="Withdrawal" />
        <View style={styles.contentContainer}>
          <Text style={styles.withdrawalTitle}>Withdrawal Information</Text>
          <Text style={styles.withdrawalSubTitle}>About Destination</Text>
          <Text style={styles.withdrawalContent}>{DUMMY}</Text>
          <Text style={styles.withdrawalContent}>{DUMMY}</Text>
        </View>
        <View style={styles.withdrawalButtonContainer}>
          <CustomButton label="Cancel" filled />
          <CustomButton label="Confirm" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  withdrawalTitle: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: colors.BLACK,
  },
  withdrawalSubTitle: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: '600',
    color: colors.BLACK,
    lineHeight: 28,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  withdrawalContent: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 22,
    color: colors.GRAY_700,
    marginBottom: 30,
  },
  withdrawalButtonContainer: {
    flexGrow: 1,
    marginTop: 'auto',
    gap: 24,
    justifyContent: 'flex-end',
  },
});

export default WithdrawalScreen;
