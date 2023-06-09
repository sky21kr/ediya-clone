import SelectBox, { SelectBoxItem } from '@/components/common/SelectBox';
import CustomInput from '@/components/common/CustomInput';
import { NewsRequest } from '@/apis/news';
import useNewsSearch from '@/components/News/Search/useNewsSearch';

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
  const { filter, setFilter, handleSubmit } = useNewsSearch({ handleSearch });

  return (
    <div className="news-search">
      <SelectBox
        items={ITEMS}
        value={filter}
        handleSelect={(filter) => setFilter(filter)}
      />
      <CustomInput handleSubmit={handleSubmit} />

      <style jsx>
        {`
          .news-search {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-top: 24px;
            align-self: end;
          }
        `}
      </style>
    </div>
  );
}
