import theme from '@/assets/styles/theme';
import Image from 'next/image';
import { Article } from '@/apis/news';

export type NewsListProps = {
  items: Article[];
};

export default function NewsList({ items }: NewsListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th className="order">순서</th>
          <td></td>
          <th className="date">날짜</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item) => (
          <tr key={item.sn}>
            <td>{item.sn}</td>
            <td className="contents">
              <Image
                src={item.imgSrc}
                alt="이미지 사진"
                width={60}
                height={60}
              />
              <div>
                <h4 className="title">{item.title}</h4>
                <div>{item.content}</div>
              </div>
            </td>
            <td>
              {Intl.DateTimeFormat().format(new Date(item.registrationDate))}
            </td>
          </tr>
        ))}
      </tbody>

      <style jsx>
        {`
          table {
            margin-top: 22px;
            margin-bottom: 15px;
            border-top: 2px solid ${theme.color.primary1};
            border-bottom: 2px solid ${theme.color.primary1};
            border-collapse: collapse;
            color: ${theme.color.primary1};
            text-align: center;

            > thead {
              font-size: 14px;
              .order {
                width: 46px;
              }

              .date {
                width: 85px;
              }
            }

            > tbody {
              > tr {
                > td {
                  font-size: 12px;
                  vertical-align: top;
                  font-weight: 400;
                  padding: 15px 10px;
                }

                .contents {
                  display: flex;

                  > div {
                    flex: 1;
                    margin-left: 10px;
                    text-align: left;

                    .title {
                      font-size: 15px;
                      margin: 0;
                    }

                    > div {
                      display: inline-block;
                      margin-top: 5px;
                      font-size: 13px;
                      color: ${theme.color.greyscaleGrey};

                      text-overflow: ellipsis;
                      overflow: hidden;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2;
                      line-height: 19.5px; /* 추가 */
                      height: 38px;
                    }
                  }
                }
              }
            }
          }

          tr {
            border-bottom: 0.5px solid ${theme.color.primary3};
            padding: 15px;
          }

          th {
            padding: 7px 0;
          }
        `}
      </style>
    </table>
  );
}
