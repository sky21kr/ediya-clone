import { useQuery } from '@tanstack/react-query';
import { fetchIntro } from '@/apis/news';

export const useHomeVideo = () => {
  const { data: introAddress } = useQuery(['intro'], fetchIntro);

  const introId = introAddress?.split('/').pop();

  return {
    introId,
  };
};

export default useHomeVideo;
