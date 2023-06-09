import { Drink } from '@/apis/drink';
import Image from 'next/image';
import { MouseEvent } from 'react';
import theme from '@/public/styles/theme';

export type MenuCardProps = {
  onClick: (e: MouseEvent) => void;
} & Drink;
export default function MenuCard({ title, imgSrc, onClick }: MenuCardProps) {
  return (
    <figure className="menu-card" onClick={onClick}>
      <Image
        src={imgSrc}
        quality={100}
        width={204}
        height={293}
        alt={`${title} 이미지`}
      />
      <figcaption>{title}</figcaption>

      <style jsx>{`
        .menu-card {
          margin: 0;
          cursor: pointer;
          display: flex;
          background: ${theme.color.greyscaleWhite};
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 20px;
          padding-bottom: 45px;

          > figcaption {
            color: #0f0f0f;
            font-size: 14px;
            font-weight: 400;
          }
        }
      `}</style>
    </figure>
  );
}
