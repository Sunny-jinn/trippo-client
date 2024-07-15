import {colors} from '@/constants';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface AuthExplainProps {
  title: string;
  subTitle: string;
}

const AuthExplain = ({title, subTitle}: AuthExplainProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.BLACK,
    marginBottom: 12,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: colors.GRAY_700,
  },
});

export default AuthExplain;
