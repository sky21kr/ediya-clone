import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from '@/public/styles/theme';
import { MEDIA_MENUS } from '@/constants/menus';
export default function NewsTabs() {
  const router = useRouter();

  return (
    <nav className="tabs">
      <ul>
        {MEDIA_MENUS?.map((menu) => (
          <li
            key={menu.path}
            className={`${router.pathname === menu.path ? 'selected' : ''}`}
          >
            <Link
              href={menu.path}
              style={{
                color: `${
                  router.pathname === menu.path
                    ? theme.color.greyscaleWhite
                    : theme.color.primary1
                }`,
                fontWeight: 700,
              }}
            >
              {menu.title}
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
