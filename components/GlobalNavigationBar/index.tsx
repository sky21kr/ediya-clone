import LogoSvg from '@/assets/svgs/logo.svg.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from '@/assets/styles/theme';

const MENUS = [
  { title: '이디야 디자인', path: '/design' },
  { title: '로그인', path: '/login' },
  { title: '회원가입', path: '/signup' },
  { title: '이디야 음료', path: '/drink' },
  { title: '이디야 뉴스', path: '/news/notice', activePath: ['/news'] },
  { title: '매장찾기', path: '/find' },
];

export default function GlobalNavigationBar() {
  const router = useRouter();

  const isSelected = (menu: { path: string; active?: string[] }) => {
    return (
      router.pathname === menu.path ||
      menu.active?.find((act) => router.pathname.includes(act))
    );
  };

  return (
    <nav className="global-navigation-bar">
      <div className="container">
        <Link href="/">
          <LogoSvg />
        </Link>
        <ol>
          {MENUS.map((menu) => (
            <li key={menu.title}>
              <Link
                style={{
                  color: theme.color.primary1,
                  textDecoration: 'none',
                  fontWeight: isSelected(menu) ? 700 : 400,
                  fontSize: '15px',
                }}
                href={menu.path}
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <style jsx>
        {`
          .global-navigation-bar {
            display: flex;
            justify-content: center;
            height: 50px;
            box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

            .container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 30px;
              max-width: 800px;
              width: 100%;

              > ol {
                padding-left: 0;
                list-style: none;
                display: flex;
                gap: 8px;
                text-decoration: none;
              }
            }
          }
        `}
      </style>
    </nav>
  );
}
