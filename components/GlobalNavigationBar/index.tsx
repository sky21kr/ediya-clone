import Link from 'next/link';
import theme from '@/public/styles/theme';
import useGlobalNavigationBar from '@/components/GlobalNavigationBar/useGlobalNavigationBar';
import { GLOBAL_NAVIGATION_BAR_MENUS } from '@/constants/menus';
import Image from 'next/image';

export default function GlobalNavigationBar() {
  const { isSelected } = useGlobalNavigationBar();

  return (
    <nav className="global-navigation-bar">
      <div className="container">
        <Link href="/">
          <Image
            src="/svgs/logo.svg"
            alt="이디야 로고 이미지"
            width={140}
            height={14}
          />
        </Link>
        <ol>
          {GLOBAL_NAVIGATION_BAR_MENUS.map((menu) => (
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
