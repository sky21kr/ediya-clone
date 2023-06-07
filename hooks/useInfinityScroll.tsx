import { useEffect, useRef } from 'react';

export type UseInfinityScrollProps = {
  fetchNextPage: () => void;
};

export const useInfinityScroll = ({
  fetchNextPage,
}: UseInfinityScrollProps) => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([target]) => {
      if (!(target as any).isVisible) {
        fetchNextPage();
      }
    }, {});

    observer.observe(observerRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderObserver = () => <div ref={observerRef}></div>;

  return {
    renderObserver,
  };
};

export default useInfinityScroll;
