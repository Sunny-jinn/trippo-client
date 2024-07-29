import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import GoBackButton from './GoBackButton';
import {colors} from '@/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CustomHeaderProps {
  title: string;
  isWhite?: boolean;
  share?: boolean;
}

const CustomHeader = ({title, isWhite, share}: CustomHeaderProps) => {
  return (
    <View style={styles.header}>
      <GoBackButton />
      <Text style={[styles.headerText, isWhite && styles.headerTextWhite]}>
        {title}
      </Text>
      {!share ? (
        <View style={styles.headerBlank} />
      ) : (
        <Pressable style={styles.shareButtonContainer}>
          <Ionicons name="share-outline" size={17} color={colors.BLACK} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: colors.BLACK,
    textAlign: 'center',
  },
  headerTextWhite: {
    color: colors.WHITE,
  },
  headerBlank: {
    width: 44,
  },
  shareButtonContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginTop: 8,
    backgroundColor: colors.GRAY_500,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomHeader;
