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
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [keywordType, setKeywordType] = useState<
    'title' | 'content' | undefined
  >('title');

  const { data } = useQuery(
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

  console.log('data', data);

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

  return (
    <NewsLayout>
      <div className="news-media">
        <NewsTabs />
        <NewsHeader
          title="언론 속 이디야"
          description="이디야의 소식을 전해드립니다."
        />
        <NewsSearch handleSearch={handleSearch} />
        <NewsList items={data?.articles || []} />
        <Pagination
          currentPage={currentPage}
          setPage={setCurrentPage}
          handleChange={handleChangePage}
          lastPage={data?.paging.lastPage || 1}
          blockSize={data?.paging.blockSize || 10}
        />
      </div>

      <style jsx>
        {`
          .news-media {
            display: flex;
            flex-direction: column;
            margin-bottom: 67px;
          }
        `}
      </style>
    </NewsLayout>
  );
}
