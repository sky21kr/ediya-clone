import { useRouter } from 'next/router';

const MENUS = [
  { title: '이디야 디자인', path: '/design' },
  { title: '로그인', path: '/login' },
  { title: '회원가입', path: '/signup' },
  { title: '이디야 음료', path: '/drink' },
  { title: '이디야 뉴스', path: '/news/notice', activePath: ['/news'] },
  { title: '매장찾기', path: '/find' },
];
const useGlobalNavigationBar = () => {
  const router = useRouter();

  const isSelected = (menu: { path: string; activePath?: string[] }) => {
    return (
      router.pathname === menu.path ||
      menu.activePath?.find((act) => router.pathname.includes(act))
    );
  };

  return {
    MENUS,
    isSelected,
  };
};

export default useGlobalNavigationBar;
