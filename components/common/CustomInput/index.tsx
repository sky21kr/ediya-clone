import theme from '@/assets/styles/theme';
import SearchSvg from '@/assets/svgs/search.svg';

export type CustomInputProps = {
  value: string;
  setValue: (value: string) => void;
  handleSubmit: (keyword: string) => void;
};

export default function CustomInput({
  value,
  setValue,
  handleSubmit,
}: CustomInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const _handleSubmit = () => {
    handleSubmit(value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(value);
    }
  };

  return (
    <div className="custom-input">
      <input
        value={value}
        onChange={(e) => handleChange(e)}
        onKeyDown={handleEnter}
      />
      <SearchSvg
        onClick={_handleSubmit}
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
