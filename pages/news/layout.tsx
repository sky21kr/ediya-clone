import NewsTabs from '@/components/News/Tabs';
import NewsHeader from '@/components/News/Header';

export type NewsLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};
export default function NewsLayout({
  children,
  title,
  description,
}: NewsLayoutProps) {
  return (
    <div className="news-layout">
      <div className="container">
        <NewsTabs />
        <NewsHeader title={title} description={description} />
        {children}
      </div>

      <style jsx>{`
        .news-layout {
          margin-top: 52px;
          display: flex;
          justify-content: center;

          .container {
            display: flex;
            flex-direction: column;
            padding: 0 15px;
            max-width: 740px;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
