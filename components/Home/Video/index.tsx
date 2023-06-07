import useHomeVideo from '@/components/Home/Video/useHomeVideo';

export default function HomeVideo() {
  const { introId } = useHomeVideo();

  return (
    <iframe
      src={`https://www.youtube.com/embed/${introId}`}
      style={{ height: '205px', width: '365px', border: 'none' }}
    />
  );
}
