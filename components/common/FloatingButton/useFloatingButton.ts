import { useEffect, useState } from 'react';
import { debounce } from '@/utils/function';

const useFloatingButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleChangeButton = () => {
      if (window.scrollY) setShowButton(true);
      else setShowButton(false);
    };

    const handleChangeScroll = debounce(handleChangeButton, 20);

    window.addEventListener('scroll', handleChangeScroll);
    return () => {
      window.removeEventListener('scroll', handleChangeScroll);
    };
  }, []);

  return {
    showButton,
  };
};

export default useFloatingButton;
