import theme from '@/public/styles/theme';
import usePagination from '@/components/common/Pagination/usePagination';
import PaginationSvg from '@/public/svgs/pagination-arrow.svg';

export type PaginationProps = {
  currentPage?: number;
  lastPage: number;
  blockSize?: number;
  handleChange?: (page: number) => void;
};

export default function Pagination(props: PaginationProps) {
  const { renderPageButton, isFirstBlock, isLastBlock, handleClickArrow } =
    usePagination(props);

  return (
    <div className="pagination">
      <PaginationSvg
        style={{
          cursor: isFirstBlock ? 'not-allowed' : 'pointer',
          fill: `${isFirstBlock ? theme.color.primary3 : theme.color.primary1}`,
        }}
        onClick={() => handleClickArrow('prev')}
      />
      {renderPageButton()}
      <PaginationSvg
        style={{
          cursor: isLastBlock ? 'not-allowed' : 'pointer',
          fill: `${isLastBlock ? theme.color.primary3 : theme.color.primary1}`,
          transform: 'scaleX(-1)',
        }}
        onClick={() => handleClickArrow('next')}
      />

      <style jsx global>
        {`
          .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 14px;

            > ol {
              font-size: 12px;
              color: ${theme.color.primary3};
              gap: 10px;
              padding: 0;
              list-style: none;
              display: flex;
              margin: 0;

              > li {
                padding: 4px;
                cursor: pointer;

                &.selected {
                  font-weight: 700;
                  color: ${theme.color.primary1};
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}
