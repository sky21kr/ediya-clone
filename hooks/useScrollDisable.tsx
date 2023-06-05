import { useEffect } from 'react';

const useScrollDisable = () => {
  useEffect(() => {
    const body = window.document.body;
    const prevOverflowStyle = body.style.overflow;

    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = prevOverflowStyle;
    };
  }, []);
};

export default useScrollDisable;
