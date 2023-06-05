import MenuCard from 'components/Drink/MenuCard';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchDrinkList } from '@/apis/drink';
import DrinkDetail from '@/components/Drink/Detail';
import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import FloatingButton from '@/components/common/FloatingButton';

const PAGE_SIZE = 6;

export default function DrinkPage() {
  const { data: drinkData, fetchNextPage } = useInfiniteQuery(
    ['drink-list'],
    async ({ pageParam = 1 }) => {
      return (await fetchDrinkList({ start: pageParam, size: PAGE_SIZE }))
        .drink;
    },
    {
      getNextPageParam: (lastPage, allPosts) => {
        // TODO: 끝 체크
        return allPosts.flat().length + 1;
      },
    },
  );

  const observerRef = useRef(null);

  const [detailSn, setDetailSn] = useState<number | null>(null);

  const showDetail = !!detailSn;
  const drinkList = drinkData?.pages.flat() || [];

  const handleClickDetail = (e: MouseEvent, sn: number) => {
    e.stopPropagation();
    setDetailSn(sn);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([target]) => {
      if (!(target as any).isVisible) {
        fetchNextPage();
      }
    }, {});

    observer.observe(observerRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="drink">
      <main>
        {drinkList.map((drink) => (
          <MenuCard
            key={drink.sn}
            {...drink}
            onClick={(e: MouseEvent) => handleClickDetail(e, drink.sn)}
          />
        ))}
      </main>

      <FloatingButton />

      <div ref={observerRef}></div>

      {showDetail && (
        <DrinkDetail sn={detailSn!} handleClose={() => setDetailSn(null)} />
      )}

      <style jsx>{`
        .drink {
          position: relative;
          margin: 30px 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          > main {
            width: 100%;
            max-width: 740px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
