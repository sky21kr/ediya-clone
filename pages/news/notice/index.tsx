import NewsHeader from '@/components/News/Header';
import NewsTabs from '@/components/News/Tabs';
import NewsLayout from '@/pages/news/layout';

export default function NewsNoticePage() {
  return (
    <NewsLayout>
      <div className="news-notice">
        <NewsTabs />
        <NewsHeader title="공지사항" description="공지사항 입니다." />
      </div>

      <style jsx>
        {`
          .news-notice {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </NewsLayout>
  );
}
