import theme from '@/assets/styles/theme';

export type NewsHeaderProps = {
  title: string;
  description: string;
};
export default function NewsHeader({ title, description }: NewsHeaderProps) {
  return (
    <div className="news-header">
      <span className="icon"></span>
      <h2>{title}</h2>
      <span>{description}</span>

      <style jsx>
        {`
          .news-header {
            margin-top: 52px;

            > h2 {
              font-weight: 700;
              font-size: 20px;
              color: ${theme.color.primary1};
              margin: 0 0 8px 0;

              &::before {
                content: '';
                margin-right: 5px;
                display: inline-block;
                width: 4px;
                height: 16px;
                background: #f4ca54;
                transform: skew(15deg);
              }
            }

            > span {
              font-weight: 400;
              font-size: 13px;
              color: ${theme.color.greyscaleDarkGrey};
            }
          }
        `}
      </style>
    </div>
  );
}
