import { useQuery } from '@tanstack/react-query';
import { fetchNews, NewsRequest } from '@/apis/news';
import { useState } from 'react';

export const useNewsMedia = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [keywordType, setKeywordType] = useState<
    'title' | 'content' | undefined
  >('title');

  const { data: articleData } = useQuery(
    ['articles', keyword, keywordType, currentPage],
    async () => {
      const nextSearchParams = {
        keyword,
        keywordType,
        currentPage,
      };

      return await fetchNews(nextSearchParams);
    },
    {
      keepPreviousData: true,
    },
  );

  const handleSearch = (
    keyword: string,
    keywordType: NewsRequest['keywordType'],
  ) => {
    setCurrentPage(1);
    setKeyword(keyword);
    setKeywordType(keywordType);
  };

  const handleChangePage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  return {
    currentPage,
    articleData,
    handleSearch,
    handleChangePage,
  };
};

export default useNewsMedia;
