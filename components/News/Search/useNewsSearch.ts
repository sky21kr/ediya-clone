import { useState } from 'react';
import { NewsRequest } from '@/apis/news';
import { SelectBoxItem } from '@/components/common/SelectBox';
import { NewsSearchProps } from '@/components/News/Search/index';

const ITEMS: SelectBoxItem[] = [
  { title: '제목', value: 'title' },
  { title: '내용', value: 'content' },
];

export type UseNewsSearchProps = NewsSearchProps;

const useNewsSearch = ({ handleSearch }: UseNewsSearchProps) => {
  const [filter, setFilter] = useState(ITEMS[0]);

  const handleSubmit = (_keyword: string) => {
    handleSearch(_keyword, filter.value as NewsRequest['keywordType']);
  };

  return {
    filter,
    handleSubmit,
    setFilter,
  };
};

export default useNewsSearch;
