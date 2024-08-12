import {colors} from '@/constants';
import {FontWeight} from '@/types/domain';
import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

interface CustomTextProps extends TextProps {
  weight: FontWeight;
}

const CustomText = ({style, weight, ...rest}: CustomTextProps) => {
  return (
    <Text
      style={[
        styles.customStyle,
        {fontFamily: `sf-ui-display-${weight}`},
        style,
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  customStyle: {
    color: colors.BLACK,
    fontSize: 30,
  },
});

export default CustomText;
