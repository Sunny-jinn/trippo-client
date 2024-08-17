import {colors} from '@/constants';
import {mergeRefs} from '@/utils';
import React, {ForwardedRef, forwardRef, useRef} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CustomSearchFieldProps extends TextInputProps {
  placeholder?: string;
}

const CustomSearchField = forwardRef(
  (
    {placeholder, ...props}: CustomSearchFieldProps,
    ref?: ForwardedRef<TextInput>,
  ) => {
    const inputRef = useRef<TextInput | null>(null);

    const pressHandler = () => {
      inputRef.current?.focus();
    };

    return (
      <Pressable onPress={pressHandler}>
        <View style={styles.container}>
          <Ionicons
            style={styles.searchIcon}
            name="search-outline"
            size={25}
            color={colors.GRAY_700}
          />
          <TextInput
            ref={ref ? mergeRefs(inputRef, ref) : inputRef}
            style={styles.searchInputBox}
            placeholder={placeholder}
          />
        </View>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: colors.GRAY_500,
    borderRadius: 16,
    paddingVertical: 3,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginLeft: 2,
    marginRight: 16,
  },
  searchInputBox: {
    flex: 1,
    color: colors.GRAY_700,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'sf-ui-display-medium',
  },
});

export default CustomSearchField;
