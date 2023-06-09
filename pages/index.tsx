import Link from 'next/link';
import Image from 'next/image';
import News from '@/components/Home/News';
import Notice from '@/components/Home/Notice';
import theme from '@/public/styles/theme';
import HomeVideo from '@/components/Home/Video';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchIntro, fetchNews, fetchNotices } from '@/apis/news';

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(['intro'], fetchIntro),
    queryClient.prefetchQuery(['home-notices'], fetchNotices),
    queryClient.prefetchQuery(['home-news'], () =>
      fetchNews({ currentPage: 1 }),
    ),
  ]);

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default function HomePage() {
  return (
    <div className="home">
      <main>
        <h1>
          ALWAYS BESIDE YOU <b>EDIYA COFFEE</b>
        </h1>
        <hr />
        <h3>늘 당신 곁에, 이디야 커피의 새로운 메뉴를 맛보세요.</h3>
        <Link
          style={{
            marginTop: '30px',
            textDecoration: 'none',
            fontSize: '14px',
            color: theme.color.primary1,
            fontWeight: 700,
            padding: '6px 20px',
            border: `1px solid ${theme.color.primary1}`,
          }}
          href="/drink"
        >
          메뉴 보기
        </Link>
      </main>
      <div className="empty">
        <Link
          href="/drink"
          style={{
            width: '379px',
            height: '300px',
            transform: 'translate(-30px, -210px)',
          }}
        >
          <Image
            priority={true}
            width={306}
            height={401}
            src={'/images/cheese-choco.png'}
            alt={'치즈가 쿠키했대 쉐이크 이미지'}
          />
        </Link>
        <Link href="/drink" style={{ transform: 'translate(150px, -130px)' }}>
          <Image
            priority={true}
            width={457}
            height={300}
            src={'/images/choco-rice.png'}
            alt={'초코 묻고 더블, 밥대신 라이스 이미지'}
          />
        </Link>
      </div>
      <div className="section-background">
        <section>
          <HomeVideo />
          <div>
            <Notice />
            <News />
          </div>
        </section>
      </div>

      <style jsx>{`
        .home {
          > main {
            padding-top: 50px;
            padding-bottom: 36px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            background: #bae5fb;

            > hr {
              width: 40px;
              border-bottom: 0.5px solid #000000;
              margin: 30px 0;
            }

            > h1,
            h3 {
              margin: 0;
            }

            > h1 {
              font-size: 31px;
              font-weight: 300;
              color: rgba(20, 24, 44, 0.9);

              > b {
                color: ${theme.color.primary1};
              }
            }

            > h3 {
              font-size: 14px;
              font-weight: 400;
              color: rgba(20, 24, 44, 0.9);
            }
          }

          .empty {
            display: flex;
            justify-content: center;
            height: 245px;
            background: white;
          }

          .section-background {
            display: flex;
            justify-content: center;
            align-items: center;
            background: ${theme.color.greyscaleSnow};
            height: 330px;

            > section {
              display: flex;

              > div {
                display: flex;
                flex-direction: column;
                width: 375px;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
