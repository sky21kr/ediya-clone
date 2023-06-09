import theme from '@/public/styles/theme';
import useSelectBox from '@/components/common/SelectBox/useSelectBox';
import Image from 'next/image';

export type SelectBoxItem = {
  title: string;
  value: string;
};

export type SelectBoxProps = {
  items: SelectBoxItem[];
  value?: SelectBoxItem;
  handleSelect?: (value: SelectBoxItem) => void;
};

export default function SelectBox({
  value,
  items,
  handleSelect,
}: SelectBoxProps) {
  const { _value, showMenu, setShowMenu, _handleSelect } = useSelectBox({
    value,
    handleSelect,
  });

  return (
    <div className="select-box">
      <div className="box" onClick={() => setShowMenu(!showMenu)}>
        {_value?.title}
        <Image
          src="/svgs/select-box-arrow.svg"
          alt="Select Box 화샆표"
          width={10}
          height={8}
          style={{
            transform: showMenu ? '' : 'rotate(180deg)',
          }}
        />
      </div>
      {showMenu && (
        <div className="menu">
          <ol>
            {items?.map((item) => (
              <li
                key={item.value}
                onClick={() => _handleSelect(item)}
                className={`${_value?.value === item.value ? 'selected' : ''}`}
              >
                {_value?.value === item.value && (
                  <Image
                    src="/svgs/select-box-menu-arrow.svg"
                    alt="Select Box Menu 체크 이미지"
                    width={7}
                    height={5}
                    style={{
                      marginRight: '3px',
                      position: 'absolute',
                      left: '5px',
                      top: '7px',
                    }}
                  />
                )}
                {item.title}
              </li>
            ))}
          </ol>
        </div>
      )}
      <style jsx>{`
        .select-box {
          position: relative;
          display: inline-block;

          .box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: default;
            box-sizing: border-box;
            padding: 3px 9px 2px 6px;
            font-weight: 400;
            font-color: ${theme.color.greyscaleBlack};
            min-width: 80px;
            background: ${theme.color.greyscaleSnow};
            border: 1px solid ${theme.color.primary4};
            border-radius: 3px;
          }

          .menu {
            min-width: 100px;
            padding: 3px 0;
            position: absolute;
            left: 0px;
            top: 29px;
            background: ${theme.color.greyscaleSnow};
            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
            border-radius: 3px;

            > ol {
              list-style: none;
              margin: 0;
              padding: 0;

              > li {
                position: relative;
                height: 20px;
                padding: 0 5px 0 15px;
                font-size: 12px;
                line-height: 17.76px;

                &.selected,
                &:hover {
                  background: ${theme.color.primary1};
                  color: ${theme.color.greyscaleWhite};
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
