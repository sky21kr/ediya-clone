import { useQuery } from '@tanstack/react-query';
import { fetchNews, NewsRequest } from '@/apis/news';
import { useState } from 'react';

export const useNewsMedia = () => {
  const [searchParams, setSearchParams] = useState<NewsRequest>({
    keyword: '',
    keywordType: 'title',
    currentPage: 1,
  });

  const { data: articleData } = useQuery(
    ['articles', searchParams],
    () => fetchNews(searchParams),
    {
      keepPreviousData: true,
    },
  );

  const handleSearch = (
    keyword: string,
    keywordType: NewsRequest['keywordType'],
  ) => {
    setSearchParams({
      currentPage: 1,
      keyword,
      keywordType,
    });
  };

  const handleChangePage = (nextPage: number) => {
    setSearchParams({
      ...searchParams,
      currentPage: nextPage,
    });
  };

  return {
    currentPage: searchParams.currentPage,
    articleData,
    handleSearch,
    handleChangePage,
  };
};

export default useNewsMedia;
