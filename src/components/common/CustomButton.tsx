import {colors} from '@/constants';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface CustomButtonProps {
  label: string;
  onPress?: () => void;
  filled?: boolean;
}

const CustomButton = ({label, onPress, filled = false}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.container,
        (pressed || filled) && styles.pressedButton,
      ]}>
      {({pressed}) => (
        <Text style={[styles.text, (pressed || filled) && styles.pressedText]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GRAY_500,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 16,
  },
  pressedButton: {
    backgroundColor: colors.ORANGE,
  },
  text: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '600',
  },
  pressedText: {
    color: colors.WHITE,
  },
});

export default CustomButton;
