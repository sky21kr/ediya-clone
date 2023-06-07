import PaginationLeftSvg from '@/assets/svgs/pagination-left.svg';
import PaginationRightSvg from '@/assets/svgs/pagination-right.svg';
import theme from '@/assets/styles/theme';

export type PaginationProps = {
  currentPage: number;
  setPage: (page: number) => void;
  lastPage: number;
  blockSize?: number;
  handleChange?: (page: number) => void;
};

export default function Pagination({
  currentPage,
  setPage,
  handleChange,
  lastPage = 1,
  blockSize = 10,
}: PaginationProps) {
  const currentBlock = Math.floor((currentPage - 1) / blockSize);

  const _handleChange = (page: number) => {
    if (handleChange) handleChange(page);
    else setPage(page);
  };

  // TODO: 비동기 타임 맞추기? loading 후 페이지 이동
  const handleClickArrow = (type: 'prev' | 'next') => {
    const isLastBlock = currentPage === lastPage;

    switch (type) {
      case 'prev':
        if (currentPage === 1) return;
        setPage(currentPage - 1);
        break;
      case 'next':
        if (isLastBlock) return;
        setPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <PaginationLeftSvg
        style={{ cursor: 'pointer' }}
        onClick={() => handleClickArrow('prev')}
      />
      <ol>
        {/*  TODO: 리팩토링 하기 */}
        {Array.from(
          { length: Math.min(lastPage - currentBlock * blockSize, blockSize) },
          (_, index) => (
            <li
              className={
                1 + index + blockSize * currentBlock === currentPage
                  ? 'selected'
                  : ''
              }
              key={index}
              onClick={() =>
                _handleChange(1 + index + blockSize * currentBlock)
              }
            >
              {1 + index + blockSize * currentBlock}
            </li>
          ),
        )}
      </ol>
      <PaginationRightSvg
        style={{ cursor: 'pointer' }}
        onClick={() => handleClickArrow('next')}
      />
      <style jsx>
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
