import NewsHeader from '@/components/News/Header';
import NewsTabs from '@/components/News/Tabs';
import Pagination from '@/components/common/Pagination';
import NewsList from '@/components/News/List';
import NewsLayout from '@/pages/news/layout';
import NewsSearch from '@/components/News/Search';
import { useQuery } from '@tanstack/react-query';
import { fetchNews, NewsRequest } from '@/apis/news';
import { useState } from 'react';

export default function NewsMediaPage() {
  const [searchParams, setSearchParams] = useState<NewsRequest>({
    keyword: '',
    currentPage: 1,
  });

  const {} = useQuery(['articles', searchParams], () =>
    fetchNews(searchParams),
  );
  const handleSearch = (
    keyword: string,
    keywordType: NewsRequest['keywordType'],
  ) => {
    setSearchParams({
      ...searchParams,
      keyword,
      keywordType,
    });
  };

  return (
    <NewsLayout>
      <div className="news-media">
        <NewsTabs />
        <NewsHeader
          title="언론 속 이디야"
          description="이디야의 소식을 전해드립니다."
        />
        <NewsSearch handleSearch={handleSearch} />
        <NewsList />
        <Pagination />
      </div>

      <style jsx>
        {`
          .news-media {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </NewsLayout>
  );
}
