import { PaginationProps } from '@/components/common/Pagination/index';
import { useEffect, useState } from 'react';

const usePagination = ({
  handleChange,
  currentPage = 1,
  lastPage,
  blockSize = 10,
}: PaginationProps) => {
  const [page, setPage] = useState(currentPage);

  const currentBlock = Math.floor((page - 1) / blockSize);
  const lastBlock = Math.floor((lastPage - 1) / blockSize);

  const isFirstBlock = currentBlock === 0;
  const isLastBlock = currentBlock === lastBlock || lastPage === 0;

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
    const currentBlockSize =
      Math.min(lastPage - currentBlock * blockSize, blockSize) || 1;

    return (
      <ol>
        {Array.from({ length: currentBlockSize }, (_, index) => {
          const targetPage = 1 + index + blockSize * currentBlock;

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
    );
  };

  return {
    handleClickArrow,
    isFirstBlock,
    isLastBlock,
    renderPageButton,
  };
};

export default usePagination;
