import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchDrinkList } from '@/apis/drink';
import DrinkDetail from '@/components/Drink/Detail';
import { MouseEvent, useRef, useState } from 'react';
import MenuCard from '@/components/Drink/MenuCard';
import { PAGE_SIZE } from '@/constants/drink';

export const useDrinkList = () => {
  const [detailSn, setDetailSn] = useState<number | null>(null);
  const showDetail = !!detailSn;

  const lastIndex = useRef(0);

  const { data: drinkData, fetchNextPage } = useInfiniteQuery(
    ['drink-list'],
    async ({ pageParam = 1 }) => {
      if (pageParam === null) {
        pageParam = 1;
      }

      const { drink, paging } = await fetchDrinkList({
        start: pageParam,
        size: PAGE_SIZE,
      });

      lastIndex.current = paging.lastIndex;

      return drink;
    },
    {
      getNextPageParam: (lastPage, allPosts) => {
        const currentCount = allPosts.flat().length;
        const isLast = lastIndex.current === currentCount;

        return isLast ? 1 : currentCount + 1;
      },
    },
  );

  const drinkList = drinkData?.pages.flat() || [];

  const handleClickDetail = (e: MouseEvent, sn: number) => {
    e.stopPropagation();
    setDetailSn(sn);
  };

  const renderList = () => {
    return drinkList.map((drink) => (
      <MenuCard
        key={drink.sn}
        {...drink}
        onClick={(e: MouseEvent) => handleClickDetail(e, drink.sn)}
      />
    ));
  };

  const renderDetail = () => {
    return (
      showDetail && (
        <DrinkDetail sn={detailSn!} handleClose={() => setDetailSn(null)} />
      )
    );
  };

  return {
    fetchNextPage,
    renderDetail,
    renderList,
  };
};

export default useDrinkList;
