import {getUserInfo, ResponseUserInfo} from '@/api/user';
import {queryKeys} from '@/constants';
import {UseQueryCustomOptions} from '@/types/common';
import {useQuery} from '@tanstack/react-query';

export const useGetUserInfo = (
  queryOptions?: UseQueryCustomOptions<ResponseUserInfo>,
) => {
  return useQuery({
    queryFn: getUserInfo,
    queryKey: [queryKeys.GET_PROFILE],
    ...queryOptions,
  });
};
