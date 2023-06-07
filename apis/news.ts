import { httpClient } from '@/apis/index';

export const fetchIntro = async () => {
  const { data } = await httpClient.get<string>('intro');

  return data;
};

export type NewsRequest = {
  keyword?: string;
  keywordType?: 'title' | 'content';
  currentPage?: number;
};

export type NewsResponse = {
  articles: Article[];
  paging: {
    currentPage: number;
    lastPage: number;
    blockSize: number; // 하단 페이지 목록에 표시되는 페이지 수
  };
};

export type Article = {
  sn: number; // 순서
  imgSrc: string;
  title: string;
  content: string;
  registrationDate: string;
};

export const fetchNews = async (params?: NewsRequest) => {
  const { data } = await httpClient.get<NewsResponse>('article/articles', {
    params,
  });

  return data;
};

export type Notice = {
  index: number;
  title: string;
  content: string;
  registrationDate: Date;
};

export const fetchNotices = async () => {
  const { data } = await httpClient.get<Notice[]>('notice');

  return data;
};
