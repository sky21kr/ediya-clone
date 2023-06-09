import { useQuery } from '@tanstack/react-query';
import { Drink, fetchDrinkDetail } from '@/apis/drink';

type useDrinkDetail = Pick<Drink, 'sn'>;

const useDrinkDetail = ({ sn }: useDrinkDetail) => {
  const { data: drinkDetail } = useQuery(['drink-detail', sn], () =>
    fetchDrinkDetail({ sn }),
  );

  return {
    drinkDetail,
  };
};

export default useDrinkDetail;
