import { httpClient } from './index';

export type DrinkListRequest = {
  start: number;
  size: number;
};

export type Drink = {
  sn: number;
  title: string;
  imgSrc: string;
};

export type DrinkListResponse = {
  drink: Drink[];
  paging: {
    currentIndex: number;
    lastIndex: number;
  };
};

export const fetchDrinkList = async (params: DrinkListRequest) => {
  const { data } = await httpClient.get<DrinkListResponse>('drink/list', {
    params,
  });

  return data;
};

export type DrinkDetailRequest = {
  sn: number;
};

export type DrinkDetailResponse = {
  detail: DrinkDetail;
};

export type DrinkDetail = {
  title: '1번 데이터';
  englishTitle: '1-data';
  description: '1번 데이터 설명입니다.';
  calorie: '79';
  sugars: '80';
  protein: '81';
  saturatedFat: '82';
  natrium: '83';
  caffeine: '84';
};
export const fetchDrinkDetail = async (params: DrinkDetailRequest) => {
  const { data } = await httpClient.get<DrinkDetailResponse>('drink/detail', {
    params,
  });

  return data.detail;
};
