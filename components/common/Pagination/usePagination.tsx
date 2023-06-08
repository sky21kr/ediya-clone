import { PaginationProps } from '@/components/common/Pagination/index';
import PaginationLeftSvg from '@/assets/svgs/pagination-left.svg';
import PaginationRightSvg from '@/assets/svgs/pagination-right.svg';
import { useEffect, useState } from 'react';

const usePagination = ({
  handleChange,
  currentPage = 1,
  lastPage = 1,
  blockSize = 10,
}: PaginationProps) => {
  const [page, setPage] = useState(currentPage);

  const currentBlock = Math.floor((page - 1) / blockSize);
  const lastBlock = Math.floor((lastPage - 1) / blockSize);

  const isFirstBlock = currentBlock === 0;
  const isLastBlock = currentBlock === lastBlock;

  const _handleChange = (nextPage: number) => {
    if (handleChange) handleChange(nextPage);
    setPage(nextPage);
  };

  useEffect(() => {
    _handleChange(currentPage);
  }, [currentPage]);

  const handleClickArrow = (type: 'prev' | 'next') => {
    switch (type) {
      case 'prev':
        if (isFirstBlock) return;
        _handleChange(currentBlock * blockSize);
        break;
      case 'next':
        if (isLastBlock) return;
        _handleChange((currentBlock + 1) * blockSize + 1);
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

            console.log('targetPage', page);

            return (
              <li
                className={targetPage === page ? 'selected' : ''}
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
