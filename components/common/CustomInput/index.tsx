import theme from '@/assets/styles/theme';
import SearchSvg from '@/assets/svgs/search.svg';
import { useEffect, useState } from 'react';
import useCustomInput from '@/components/common/CustomInput/useCustominput';

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
      <SearchSvg
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
