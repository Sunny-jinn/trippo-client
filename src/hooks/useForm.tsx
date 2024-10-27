import {useEffect, useState} from 'react';

interface TUseFormProps<T> {
  initialValue: T;
  validate: (values: T) => Record<keyof T, string>;
}

export const useForm = <T,>({initialValue, validate}: TUseFormProps<T>) => {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const changeHandler = (name: keyof T, text: string) => {
    setValues({
      ...values,
      [name]: text,
    });
  };

  const blurHandler = (name: keyof T) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTextInputProps = (name: keyof T) => {
    const value = values[name];
    const onChangeText = (text: string) => changeHandler(name, text);
    const onBlur = () => blurHandler(name);

    return {value, onChangeText, onBlur};
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [validate, values]);

  return {values, errors, touched, getTextInputProps};
};
