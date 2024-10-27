import {updateUserInfo} from '@/api/user';
import {useMutationCustomOptions} from '@/types/common';
import {useMutation} from '@tanstack/react-query';

export const useUpdateUserInfo = (
  mutationOptions?: useMutationCustomOptions,
) => {
  return useMutation({
    mutationFn: updateUserInfo,
    ...mutationOptions,
  });
};
