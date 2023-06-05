import SelectBox, { SelectBoxItem } from '@/components/common/SelectBox';
import CustomInput from '@/components/common/CustomInput';
import { useState } from 'react';
import Margin from '@/components/common/Margin';
import { NewsRequest } from '@/apis/news';

const ITEMS: SelectBoxItem[] = [
  { title: '제목', value: 'title' },
  { title: '내용', value: 'content' },
];

export type NewsSearchProps = {
  handleSearch: (
    keyword: string,
    keywordType: NewsRequest['keywordType'],
  ) => void;
};
export default function NewsSearch({ handleSearch }: NewsSearchProps) {
  const [filter, setFilter] = useState(ITEMS[0]);
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (_keyword: string) => {
    handleSearch(_keyword, filter.value as NewsRequest['keywordType']);
  };

  return (
    <div className="news-search">
      <SelectBox items={ITEMS} value={filter} setValue={setFilter} />
      <Margin right={12} />
      <CustomInput
        value={keyword}
        setValue={setKeyword}
        handleSubmit={handleSubmit}
      />

      <style jsx>
        {`
          .news-search {
            margin-top: 24px;
            align-self: end;
          }
        `}
      </style>
    </div>
  );
}
