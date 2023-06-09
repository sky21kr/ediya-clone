import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '@/apis/news';

const useHomeNews = () => {
  const { data: newsData } = useQuery(['home-news'], () =>
    fetchNews({ currentPage: 1 }),
  );

  const news = newsData?.articles.slice(0, 2) || [];

  return {
    news,
  };
};

export default useHomeNews;
