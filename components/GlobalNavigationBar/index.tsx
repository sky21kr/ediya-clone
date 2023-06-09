import LogoSvg from '@/assets/svgs/logo.svg.svg';
import Link from 'next/link';
import theme from '@/assets/styles/theme';
import useGlobalNavigationBar from '@/components/GlobalNavigationBar/useGlobalNavigationBar';

export default function GlobalNavigationBar() {
  const { MENUS, isSelected } = useGlobalNavigationBar();

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
