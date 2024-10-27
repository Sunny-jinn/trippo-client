import {getEncryptStorage} from '@/utils/encryptStorage';
import {axiosInstance} from './axios';
import axios from 'axios';
import CookieManager from '@react-native-cookies/cookies';

export type RequestUser = {
  nickname?: string;
  email: string;
  password: string;
};

export const postSignup = async ({
  nickname,
  email,
  password,
}: RequestUser): Promise<void> => {
  const {data} = await axiosInstance.post('/signup', {
    nickname,
    email,
    password,
  });

  return data;
};

export type ResponseToken = {
  refresh: string;
  access: string;
};

export type ResponseLoginToken = {
  result: ResponseToken;
};

const tempToken = 'zHIz5iNv5zJ7Pmp0B4ylZBnvwvzmCcCw';

export const postLogin = async ({
  email,
  password,
}: RequestUser): Promise<ResponseLoginToken> => {
  const csrfToken = cookies.csrftoken?.value;

  // 요청 보내기
  const {data} = await axiosInstance.post(
    '/login',
    {
      email,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken, // 가져온 csrfToken을 헤더에 추가
      },
    },
  );

  return data;
};

export const logout = async () => {
  const access = await getEncryptStorage('accessToken');
  console.log(access);
  const csrfToken = cookies.csrftoken?.value;
  await axiosInstance.post(
    '/logout',
    {},
    {
      headers: {
        'X-CSRFToken': csrfToken,
      },
    },
  );
};

export const getAccessToken = async (): Promise<ResponseToken> => {
  const refresh = await getEncryptStorage('refreshToken');
  console.log('refreshToken:', refresh);
  const {data} = await axiosInstance.post('/account/refresh', {
    refresh,
  });

  return data;
};
