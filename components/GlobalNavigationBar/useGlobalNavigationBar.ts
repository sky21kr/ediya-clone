import { useRouter } from 'next/router';

const useGlobalNavigationBar = () => {
  const router = useRouter();

  const isSelected = (menu: { path: string; activePath?: string[] }) => {
    return (
      router.pathname === menu.path ||
      menu.activePath?.find((act) => router.pathname.includes(act))
    );
  };

  return {
    isSelected,
  };
};

export default useGlobalNavigationBar;
