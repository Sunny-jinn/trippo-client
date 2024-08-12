import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import GoBackButton from './GoBackButton';
import {colors} from '@/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomText from './CustomText';

interface CustomHeaderProps {
  title: string;
  isWhite?: boolean;
  share?: boolean;
  profile?: boolean;
  onEditPress?: () => void;
}

const CustomHeader = ({
  title,
  isWhite,
  share,
  profile,
  onEditPress,
}: CustomHeaderProps) => {
  return (
    <View style={styles.header}>
      {profile ? <View style={styles.headerBlank} /> : <GoBackButton />}
      <CustomText
        style={[styles.headerText, isWhite && styles.headerTextWhite]}
        weight="semibold">
        {title}
      </CustomText>
      {!share ? (
        !profile ? (
          <View style={styles.headerBlank} />
        ) : (
          <Pressable style={styles.shareButtonContainer} onPress={onEditPress}>
            <Ionicons name="create-outline" size={17} color={colors.BLACK} />
          </Pressable>
        )
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
    paddingTop: 8,
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
