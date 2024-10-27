import {axiosInstance} from './axios';

export type ResponseNotice = {
  id: number;
  title: string;
  img_url: string;
  contents: string;
};

export type ResponseNoticeDetail = ResponseNotice & {
  updated_at: string;
  updated_by: string | null;
};

export const getNotice = async (): Promise<ResponseNotice[]> => {
  const {data} = await axiosInstance.get('/notice');
  return data.result.results;
};

export const getNoticeDetail = async (
  id: number,
): Promise<ResponseNoticeDetail> => {
  const {data} = await axiosInstance.get(`/notice/${id}`);

  return data.result;
};
