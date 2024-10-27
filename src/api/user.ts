import {getEncryptStorage} from '@/utils/encryptStorage';
import {axiosInstance} from './axios';

export type ResponseUserInfo = {
  email: string;
  language: string;
  nickname: string;
};

export const getUserInfo = async (): Promise<ResponseUserInfo> => {
  const accessToken = await getEncryptStorage('accessToken');
  const {data} = await axiosInstance.get('/user', {
    headers: {
      Authorization: accessToken,
    },
  });

  return data.result;
};

export const updateUserInfo = async ({
  nickname,
  language,
}: Omit<ResponseUserInfo, 'email'>) => {
  const response = await axiosInstance.put('/user', {
    nickname,
    language,
  });

  // If the server returns 204, manually return a success message or some data
  if (response.status === 204) {
    console.log('response:', response);
    return {message: 'Profile updated successfully'};
  }

  return response.data;
};
