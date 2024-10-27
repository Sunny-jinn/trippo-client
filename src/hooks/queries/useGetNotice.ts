import {
  getNotice,
  getNoticeDetail,
  ResponseNotice,
  ResponseNoticeDetail,
} from '@/api';
import {queryKeys} from '@/constants';
import {UseQueryCustomOptions} from '@/types/common';
import {useQuery} from '@tanstack/react-query';

export const useGetNotice = (
  queryOptions?: UseQueryCustomOptions<ResponseNotice[]>,
) => {
  return useQuery({
    queryFn: () => getNotice(),
    queryKey: [queryKeys.NOTICE, queryKeys.GET_NOTICE],
    ...queryOptions,
  });
};

export const useGetNoticeDetail = (
  id: number,
  queryOptions?: UseQueryCustomOptions<ResponseNoticeDetail>,
) => {
  return useQuery({
    queryFn: () => getNoticeDetail(id),
    queryKey: [queryKeys.NOTICE, queryKeys.GET_NOTICE_DETAIL, id],
    ...queryOptions,
  });
};
