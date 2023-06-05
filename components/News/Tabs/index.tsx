import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from '@/assets/styles/theme';

const TABS = [
  {
    title: '공지사항',
    path: '/news/notice',
  },
  {
    title: '언론 속 이디야',
    path: '/news/media',
  },
  {
    title: '홍보영상',
    path: '/news/promotional-video',
  },
  {
    title: '수상내역',
    path: '/news/award',
  },
];
export default function NewsTabs() {
  const router = useRouter();

  return (
    <nav className="tabs">
      <ul>
        {TABS?.map((tab) => (
          <li
            key={tab.path}
            className={`${router.pathname === tab.path ? 'selected' : ''}`}
          >
            <Link
              href={tab.path}
              style={{
                color: `${
                  router.pathname === tab.path
                    ? theme.color.greyscaleWhite
                    : theme.color.primary1
                }`,
                fontWeight: 700,
              }}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .tabs {
            align-self: center;

            > ul {
              display: flex;
              padding: 0;
              margin: 0;

              > li {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid ${theme.color.greyscaleWhite};
                width: 120px;
                height: 34px;
                text-align: center;
                list-style: none;
                background: ${theme.color.greyscaleWhite};
                box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

                &.selected {
                  background: ${theme.color.primary1};
                }
              }
            }
          }
        `}
      </style>
    </nav>
  );
}
