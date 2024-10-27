import {getAccessToken, logout, postLogin, postSignup} from '@/api';
import {queryClient} from '@/api/queryClient';
import {queryKeys, storageKeys} from '@/constants';
import {useMutationCustomOptions} from '@/types/common';
import {setHeader} from '@/utils';
import {removeEncryptStorage, setEncryptStorage} from '@/utils/encryptStorage';
import {useMutation, useQuery} from '@tanstack/react-query';
import {useEffect} from 'react';

export const useSignup = (mutationOptions?: useMutationCustomOptions) => {
  return useMutation({
    mutationFn: postSignup,
    ...mutationOptions,
  });
};

export const useLogin = (mutationOptions?: useMutationCustomOptions) => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: data => {
      setEncryptStorage(storageKeys.REFRESH_TOKEN, data.result.refresh);
      setEncryptStorage(storageKeys.ACCESS_TOKEN, data.result.access);
      setHeader('Authorization', data.result.access);
    },
    onSettled: () => {
      queryClient.refetchQueries({
        queryKey: ['auth', 'getAccessToken'],
      });
      queryClient.invalidateQueries({
        queryKey: ['auth', 'getProfile'],
      });
    },
    onError: error => {
      console.error('Login error:', error);
    },
    ...mutationOptions,
  });
};

export const useLogout = (mutationOptions?: useMutationCustomOptions) => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      console.log('logout success!');
      removeEncryptStorage(storageKeys.REFRESH_TOKEN);
    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: [queryKeys.AUTH]});
    },
    onError: error => {
      console.log(error);
    },
    ...mutationOptions,
  });
};

export const useGetRefreshToken = () => {
  const {isSuccess, data, isError} = useQuery({
    queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
    queryFn: getAccessToken,
    staleTime: 1000 * 60 * 30 - 1000 * 60 * 3, //30분에서 3분 뺌
    refetchInterval: 1000 * 60 * 5,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isSuccess) {
      console.log('new Access Token: ', data.access);
      setEncryptStorage(storageKeys.ACCESS_TOKEN, data.access);
      setHeader('Authorization', data.access);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      removeEncryptStorage(storageKeys.REFRESH_TOKEN);
    }
  }, [isError]);

  return {isSuccess, isError};
};

export const useAuth = () => {
  const signupMutation = useSignup();
  const loginMutation = useLogin();
  const refreshTokenQuery = useGetRefreshToken();
  const isLogin = refreshTokenQuery.isSuccess;
  const logoutMutation = useLogout();

  return {signupMutation, loginMutation, isLogin, logoutMutation};
};
