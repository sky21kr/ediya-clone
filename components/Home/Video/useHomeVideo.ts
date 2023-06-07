import { useQuery } from '@tanstack/react-query';
import { fetchIntro } from '@/apis/news';
import { useMemo } from 'react';

export const useHomeVideo = () => {
  const { data: introAddress } = useQuery(['intro'], fetchIntro);

  const introId = useMemo(() => {
    return introAddress?.split('/').pop();
  }, [introAddress]);

  return {
    introId,
  };
};

export default useHomeVideo;
