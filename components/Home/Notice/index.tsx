import PrevControlSvg from '@/assets/svgs/prev-control.svg';
import NextControlSvg from '@/assets/svgs/next-control.svg';
import Link from 'next/link';
import theme from '@/assets/styles/theme';
import useHomeNotice from '@/components/Home/Notice/useHomeNotice';

export default function Notice() {
  const { isLastPage, isFirstPage, handleChangePage, currentNotice } =
    useHomeNotice();

  return (
    <article className="notice">
      <div className="control">
        <Link href={'/news/notice'} style={{ color: 'white' }}>
          NOTICE
        </Link>
        <div className="buttons">
          <PrevControlSvg
            onClick={() => handleChangePage('prev')}
            style={{
              transform: 'translateX(1px)',
              cursor: isFirstPage ? 'not-allowed' : null,
              fill: isFirstPage ? 'grey' : null,
            }}
          />
          <NextControlSvg
            onClick={() => handleChangePage('next')}
            style={{
              transform: 'translateX(1px)',
              cursor: isLastPage ? 'not-allowed' : null,
              fill: isLastPage ? 'grey' : null,
            }}
          />
        </div>
      </div>
      <div className="contents">
        {currentNotice && (
          <>
            <div className="title">{currentNotice.title}</div>
            <div className="date">
              {Intl.DateTimeFormat().format(
                new Date(currentNotice.registrationDate),
              )}
            </div>
            <Link href={'/news/notice'}>
              <span className="content">{currentNotice.content}</span>
            </Link>
          </>
        )}
      </div>

      <style jsx>
        {`
          .notice {
            display: grid;
            grid-template-columns: 125px 250px;
            height: 105px;

            .control,
            .contents {
              color: white;
              padding: 15px;
            }

            .control {
              position: relative;
              font-weight: 700;
              background: linear-gradient(
                137.4deg,
                #263d83 3.86%,
                #102457 100%
              );

              .buttons {
                cursor: pointer;
                height: 16px;
                position: absolute;
                right: 15px;
                bottom: 15px;
              }
            }

            .contents {
              background: white;

              .title {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-bottom: 5px;
                font-size: 15px;
                line-height: 15px;
                font-weight: 700;
                color: ${theme.color.primary1};
              }

              .date {
                font-size: 11px;
                line-height: 11px;
                font-weight: 400;
                color: #878787;
                margin-bottom: 8px;
              }

              .content {
                line-height: 18px;
                font-weight: 400;
                font-size: 12px;
                color: rgba(20, 24, 44, 0.9);

                display: -webkit-box;
                word-wrap: break-word;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
          }
        `}
      </style>
    </article>
  );
}
