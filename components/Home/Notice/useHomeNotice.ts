import { useQuery } from '@tanstack/react-query';
import { fetchNotices } from '@/apis/news';
import { useState } from 'react';

export const useHomeNotice = () => {
  const { data: notices } = useQuery(['home-notices'], fetchNotices);
  const [page, setPage] = useState(1);

  const currentNotice = notices?.[page];
  const isFirstPage = page === 1;
  const isLastPage = notices ? page === notices.length - 1 : false;

  const handleChangePage = (type: 'prev' | 'next') => {
    if (notices) {
      switch (type) {
        case 'prev':
          if (!isFirstPage) setPage(page - 1);
          break;
        case 'next':
          if (!isLastPage) setPage(page + 1);
          break;
      }
    }
  };

  return {
    isFirstPage,
    isLastPage,
    currentNotice,
    handleChangePage,
  };
};

export default useHomeNotice;
