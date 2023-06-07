import useInfinityScroll from '@/hooks/useInfinityScroll';
import useDrinkList from '@/components/Drink/List/useDrinkList';

export default function DrinkList() {
  const { fetchNextPage, renderDetail, renderList } = useDrinkList();

  const { renderObserver } = useInfinityScroll({ fetchNextPage });

  return (
    <main>
      {renderList()}
      {renderObserver()}
      {renderDetail()}

      <style jsx>
        {`
          main {
            width: 100%;
            max-width: 740px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        `}
      </style>
    </main>
  );
}
