import FloatingButton from '@/components/common/FloatingButton';
import DrinkList from '@/components/Drink/List';

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
