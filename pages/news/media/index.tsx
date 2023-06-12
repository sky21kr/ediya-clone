import Pagination from '@/components/common/Pagination';
import NewsList from '@/components/News/List';
import NewsLayout from '@/pages/news/layout';
import NewsSearch from '@/components/News/Search';
import useNewsMedia from '@/pages/news/media/useNewsMedia';
import NewsHeader from '@/components/News/Header';

export default function NewsMediaPage() {
  const { currentPage, articleData, handleSearch, handleChangePage } =
    useNewsMedia();

  return (
    <NewsLayout>
      <div className="news-media">
        <NewsHeader
          title="언론 속 이디야"
          description="이디야의 소식을 전해드립니다."
        />
        <NewsSearch handleSearch={handleSearch} />
        <NewsList items={articleData?.articles || []} />
        <Pagination
          currentPage={currentPage}
          handleChange={handleChangePage}
          lastPage={articleData?.paging.lastPage || 1}
          blockSize={articleData?.paging.blockSize}
        />
      </div>

      <style jsx>
        {`
          .news-media {
            display: flex;
            flex-direction: column;
            margin-top: 52px;
            margin-bottom: 67px;
          }
        `}
      </style>
    </NewsLayout>
  );
}
