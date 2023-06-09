import { useRef } from 'react';

export type UseDebouncingProps = {
  callback: () => void;
  time: number;
};

export const useDebouncing = ({ callback, time }: UseDebouncingProps) => {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const debounce = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      callback();

      debounceRef.current = null;
    }, time);
  };

  return {
    debounce,
  };
};

export default useDebouncing;
