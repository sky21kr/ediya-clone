import FloatingButton from '@/components/common/FloatingButton';
import DrinkList from '@/components/Drink/List';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchDrinkList } from '@/apis/drink';
import { PAGE_SIZE } from '@/constants/drink';

export default function DrinkPage() {
  return (
    <div className="drink">
      <DrinkList />
      <FloatingButton />

      <style jsx>{`
        .drink {
          position: relative;
          margin: 30px 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    ['drink-list'],
    async ({ pageParam = 1 }) => {
      const { drink } = await fetchDrinkList({
        start: pageParam,
        size: PAGE_SIZE,
      });

      return drink;
    },
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
