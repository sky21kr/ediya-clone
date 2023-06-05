import Link from 'next/link';
import MoreSvg from '@/assets/svgs/more.svg';
import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '@/apis/news';
import { useMemo } from 'react';
import theme from '@/assets/styles/theme';

export default function News() {
  const { data: newsData } = useQuery(['home-news'], () =>
    fetchNews({ currentPage: 1 }),
  );

  const news = useMemo(() => {
    if (!newsData) return [];

    const { articles } = newsData;

    return articles.slice(0, 2);
  }, [newsData]);

  return (
    <article>
      <div className="header">
        <span>NEWS</span>
        <Link
          href="/news/media"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <MoreSvg />
        </Link>
      </div>
      <ol>
        {news.map((article) => (
          <li key={article.sn}>
            <span className="title">{article.title}</span>
            <span className="date">
              {Intl.DateTimeFormat().format(new Date(article.registrationDate))}
            </span>
          </li>
        ))}
      </ol>

      <style jsx>
        {`
          article {
            box-sizing: border-box;
            color: white;
            background: ${theme.color.primary1};
            padding: 15px;
            height: 100px;

            .header {
              margin-bottom: 15px;
              display: flex;
              justify-content: space-between;
              align-items: center;

              > span {
                font-weight: 700;
                font-size: 15px;
              }
            }

            > ol {
              margin: 0;
              padding: 0;
              list-style: none;
              font-size: 12px;
              font-weight: 400;

              > li {
                display: flex;
                margin-bottom: 2px;

                .title {
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }

                .date {
                  margin-left: auto;
                  flex-shrink: 0;
                }
              }
            }
          }
        `}
      </style>
    </article>
  );
}
