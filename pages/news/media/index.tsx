import Pagination from '@/components/common/Pagination';
import NewsList from '@/components/News/List';
import NewsLayout from '@/pages/news/layout';
import NewsSearch from '@/components/News/Search';
import useNewsMedia from '@/pages/news/media/useNewsMedia';

export default function NewsMediaPage() {
  const { currentPage, articleData, handleSearch, handleChangePage } =
    useNewsMedia();

  return (
    <NewsLayout
      title="언론 속 이디야"
      description="이디야의 소식을 전해드립니다."
    >
      <div className="news-media">
        <NewsSearch handleSearch={handleSearch} />
        <NewsList items={articleData?.articles || []} />
        <Pagination
          currentPage={currentPage}
          handleChange={handleChangePage}
          lastPage={articleData?.paging.lastPage}
          blockSize={articleData?.paging.blockSize}
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
