import ModalPortal from '@/components/common/Portal/Modal';
import { Drink } from '@/apis/drink';
import useDrinkDetail from '@/components/Drink/Detail/useDrinkDetail';
import Image from 'next/image';

export type DrinkDetailProps = {
  handleClose: () => void;
} & Pick<Drink, 'sn'>;
export default function DrinkDetail({ sn, handleClose }: DrinkDetailProps) {
  const { drinkDetail } = useDrinkDetail({ sn });

  return (
    <ModalPortal handleClose={handleClose}>
      <div className="drink-detail">
        <Image
          onClick={handleClose}
          width={20}
          height={20}
          src="/svgs/close.svg"
          alt="닫기 버튼"
          style={{
            position: 'absolute',
            right: 20,
            top: 20,
            cursor: 'pointer',
          }}
        />
        <h3>{drinkDetail?.title}</h3>
        <h5>{drinkDetail?.englishTitle}</h5>

        <hr />

        <h4>{drinkDetail?.description}</h4>

        <aside>
          <span>칼로리</span>
          <span>({drinkDetail?.calorie}kcal)</span>
          <span>포화지방</span>
          <span>({drinkDetail?.saturatedFat}g)</span>
          <span>당류</span>
          <span>({drinkDetail?.sugars}g)</span>
          <span>나트륨</span>
          <span>({drinkDetail?.natrium}mg)</span>
          <span>단백질</span>
          <span>({drinkDetail?.protein}g)</span>
          <span>카페인</span>
          <span>({drinkDetail?.caffeine}mg)</span>
          <hr />
        </aside>
      </div>

      <style jsx>
        {`
          .drink-detail {
            position: relative;
            border: 1px solid #cccccc;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            padding: 30px 20px;
            width: 359px;
            height: 373px;
            background: #ededed;
            font-weight: 400;
            color: #0f0f0f;

            > h3,
            h4,
            h5 {
              margin: 0;
            }

            > h3 {
              margin-bottom: 8px;
              font-size: 18px;
              line-height: 18px;
            }

            > h5 {
              color: #616161;
              margin-bottom: 16px;
              font-size: 14px;
              line-height: 14px;
            }

            > hr {
              width: 100%;
              border: 1px solid #0f0f0f;
            }

            > h4 {
              font-size: 16px;
              line-height: 22.4px;
            }

            > aside {
              position: relative;
              margin-top: auto;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;

              > span {
                margin-left: 10px;
                font-size: 13px;
              }

              > hr {
                margin: 0;
                border: 0.5px solid black;
                position: absolute;
                height: 100%;
                left: 50%;
              }
            }
          }
        `}
      </style>
    </ModalPortal>
  );
}
