import theme from '@/public/styles/theme';
import useCustomInput from '@/components/common/CustomInput/useCustominput';
import Image from 'next/image';

export type CustomInputProps = {
  value?: string;
  handleSubmit?: (keyword: string) => void;
  handleChange?: (keyword: string) => void;
};

export default function CustomInput(props: CustomInputProps) {
  const { handleSubmit } = props;
  const { _value, _handleChange, handleEnter } = useCustomInput(props);

  return (
    <div className="custom-input">
      <input
        value={_value}
        onChange={(e) => _handleChange(e)}
        onKeyDown={handleEnter}
      />
      <Image
        src="/svgs/search.svg"
        alt="검색 아이콘 이미지"
        width={16}
        height={16}
        onClick={() => handleSubmit && handleSubmit(_value)}
        style={{
          position: 'absolute',
          right: '0',
          top: '5px',
          cursor: 'pointer',
        }}
      />

      <style jsx>
        {`
          .custom-input {
            position: relative;
            display: inline-block;

            > input {
              font-width: 400;
              font-size: 14px;
              color: ${theme.color.greyscaleBlack};
              padding: 3px 20px 2px 6px;
              border: none;
              border-bottom: 0.5px solid ${theme.color.greyscaleBlack};

              &:focus {
                outline: none;
              }
            }
          }
        `}
      </style>
    </div>
  );
}
