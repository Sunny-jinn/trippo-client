import {colors} from '@/constants';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CustomInputFieldProps extends TextInputProps {
  placeholder?: string;
  password?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const CustomInputField = ({
  placeholder,
  password,
  ...props
}: CustomInputFieldProps) => {
  const inputRef = useRef<TextInput | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const pressHandler = () => {
    inputRef.current?.focus();
  };

  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <TextInput
          ref={inputRef}
          style={styles.textInput}
          placeholder={placeholder}
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          secureTextEntry={password && !isVisible}
          {...props}
        />
        {password && (
          <Pressable
            style={styles.visibleIcon}
            onPress={() => setIsVisible(prev => !prev)}>
            <Ionicons
              name={!isVisible ? 'eye-off-outline' : 'eye-outline'}
              size={25}
              color={colors.GRAY_700}
            />
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GRAY_500,
    borderRadius: 14,
    paddingVertical: deviceHeight > 700 ? 18 : 12,
    paddingHorizontal: 16,
    position: 'relative',
  },
  textInput: {
    fontSize: 16,
    color: colors.BLACK,
    padding: 0,
  },
  visibleIcon: {
    position: 'absolute',
    paddingVertical: deviceHeight > 700 ? 18 : 12,
    right: 16,
  },
});

export default CustomInputField;
