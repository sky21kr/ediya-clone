import theme from '@/assets/styles/theme';
import usePagination from '@/components/common/Pagination/usePagination';
import PaginationLeftSvg from '@/assets/svgs/pagination-left.svg';
import PaginationRightSvg from '@/assets/svgs/pagination-right.svg';

export type PaginationProps = {
  currentPage?: number;
  lastPage?: number;
  blockSize?: number;
  handleChange?: (page: number) => void;
};

export default function Pagination(props: PaginationProps) {
  const { renderPageButton, isFirstBlock, isLastBlock, handleClickArrow } =
    usePagination(props);

  return (
    <div className="pagination">
      <PaginationLeftSvg
        style={{ cursor: isFirstBlock ? 'not-allowed' : 'pointer' }}
        onClick={() => handleClickArrow('prev')}
      />
      {renderPageButton()}
      <PaginationRightSvg
        style={{ cursor: isLastBlock ? 'not-allowed' : 'pointer' }}
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
