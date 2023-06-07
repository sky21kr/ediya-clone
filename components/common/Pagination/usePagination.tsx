import { PaginationProps } from '@/components/common/Pagination/index';
import PaginationLeftSvg from '@/assets/svgs/pagination-left.svg';
import PaginationRightSvg from '@/assets/svgs/pagination-right.svg';

const usePagination = ({
  setPage,
  handleChange,
  currentPage,
  lastPage = 1,
  blockSize = 10,
}: PaginationProps) => {
  const currentBlock = Math.floor((currentPage - 1) / blockSize);
  const lastBlock = Math.floor((lastPage - 1) / blockSize);

  const isFirstBlock = currentBlock === 0;
  const isLastBlock = currentBlock === lastBlock;

  const _handleChange = (page: number) => {
    if (handleChange) handleChange(page);
    else setPage(page);
  };

  const handleClickArrow = (type: 'prev' | 'next') => {
    switch (type) {
      case 'prev':
        if (isFirstBlock) return;
        setPage(currentBlock * blockSize);
        break;
      case 'next':
        if (isLastBlock) return;
        setPage((currentBlock + 1) * blockSize + 1);
        break;
    }
  };

  const renderPageButton = () => {
    const currentBlockSize = Math.min(
      lastPage - currentBlock * blockSize,
      blockSize,
    );

    return (
      <>
        <PaginationLeftSvg
          style={{ cursor: isFirstBlock ? 'not-allowed' : 'pointer' }}
          onClick={() => handleClickArrow('prev')}
        />
        <ol>
          {Array.from({ length: currentBlockSize }, (_, index) => {
            const targetPage = 1 + index + blockSize * currentBlock;

            return (
              <li
                className={targetPage === currentPage ? 'selected' : ''}
                key={index}
                onClick={() => _handleChange(targetPage)}
              >
                {targetPage}
              </li>
            );
          })}
        </ol>
        <PaginationRightSvg
          style={{ cursor: isLastBlock ? 'not-allowed' : 'pointer' }}
          onClick={() => handleClickArrow('next')}
        />
      </>
    );
  };

  return {
    renderPageButton,
  };
};

export default usePagination;
