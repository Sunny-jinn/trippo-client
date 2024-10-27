type UserInformation = {
  email: string;
  password: string;
};

function validateUser(values: UserInformation) {
  const errors = {
    email: '',
    password: '',
  };

  if (!/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
    errors.email = 'Invalid email';
  }

  if (!(values.password.length >= 8 && values.password.length < 20)) {
    errors.password = 'Invalid password';
  }

  return errors;
}

export const validateLogin = (values: UserInformation) => {
  return validateUser(values);
};

export const validateSignup = (
  values: UserInformation & {passwordConfirm: string},
) => {
  const errors = validateUser(values);
  const singupErrors = {...errors, passwordConfirm: ''};

  if (values.password !== values.passwordConfirm) {
    singupErrors.passwordConfirm = 'Incorrect password';
  }
  return singupErrors;
};

export const validateAddPost = (values: {title: string}) => {
  const errors = {
    title: '',
    description: '',
  };

  if (values.title.trim() === '') {
    errors.title = '제목은 1~30자 이내로 입력해주세요';
  }

  return errors;
};
