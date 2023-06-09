import { useEffect, useState } from 'react';
import { CustomInputProps } from '@/components/common/CustomInput/index';

export type UseCustomInputProps = CustomInputProps;

const useCustomInput = ({
  value,
  handleChange,
  handleSubmit,
}: UseCustomInputProps) => {
  const [_value, _setValue] = useState(value || '');

  useEffect(() => {
    value && _setValue(value);
  }, [value]);

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    _setValue(targetValue);
    handleChange && handleChange(targetValue);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit && handleSubmit(_value);
    }
  };

  return {
    _value,
    _handleChange,
    handleEnter,
  };
};

export default useCustomInput;
