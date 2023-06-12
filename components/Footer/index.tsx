import Link from 'next/link';
import Image from 'next/image';

const MENUS = [
  { title: '개인정보처리방침', path: '/' },
  { title: '멤버스 이용약관', path: '/' },
  { title: '가맹 안내', path: '/' },
  { title: '대량쿠폰구매', path: '/' },
  { title: '채용안내', path: '/' },
  { title: '고객의 소리', path: '/' },
  { title: '사이트맵', path: '/' },
  { title: '점주의 방', path: '/' },
];
export default function Footer() {
  return (
    <footer>
      <ul>
        {MENUS.map((menu) => (
          <li key={menu.title}>
            <Link
              href={menu.path}
              style={{
                textDecoration: 'none',
                fontWeight: 400,
                color: '#878787',
                fontSize: '12px',
              }}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="information">
        <Image
          width={180}
          height={18}
          src="/svgs/logo-dark.svg"
          alt="마이다스 로고"
        />
        <ul>
          <li>
            서울특별시 강남구 논현로 636 이디야빌딩(서울특별시 강남구 논현동
            221-17)
          </li>
          <li>
            <b>TEL</b> : 02-543-6467
          </li>
          <li>
            <b>FAX</b> : 02-543-7191
          </li>
          <li>
            <b>사업자등록번호</b> : 107-86-16302
          </li>
          <li>
            <b>통신판매업 신고</b> : 강남 제 002519호
          </li>
          <li>
            <b>대표이사 : 문창기</b>
          </li>
        </ul>
        <span>ⓒ 2017 EDIYA COFFEE COMPANY. ALL RIGHTS RESERVED..</span>
      </div>

      <style jsx>{`
        footer {
          margin-top: auto;
          background: #0f0f0f;

          > ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            height: 58px;
            justify-content: center;
            align-items: center;
            gap: 20px;
            border-bottom: 1px solid rgba(97, 97, 97, 0.5);
          }

          .information {
            padding: 30px 0;
            flex: 1;
            color: #878787;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            > ul {
              margin-top: 24px;
              margin-bottom: 20px;
              max-width: 800px;
              gap: 5px 15px;
              flex-wrap: wrap;
              display: flex;
              justify-content: center;
              font-size: 12px;
              list-style: none;
              padding-left: 0;
            }

            > span {
              font-weight: 700;
              font-size: 11px;
            }
          }
        }
      `}</style>
    </footer>
  );
}
