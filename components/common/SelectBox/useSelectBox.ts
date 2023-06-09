import { useState } from 'react';
import {
  SelectBoxItem,
  SelectBoxProps,
} from '@/components/common/SelectBox/index';

export type UseSelectBoxProps = Pick<SelectBoxProps, 'value' | 'handleSelect'>;
const useSelectBox = ({ value, handleSelect }: UseSelectBoxProps) => {
  const [_value, _setValue] = useState(value);
  const [showMenu, setShowMenu] = useState(false);

  const _handleSelect = (item: SelectBoxItem) => {
    _setValue(item);
    handleSelect && handleSelect(item);
    setShowMenu(false);
  };

  return {
    _value,
    _handleSelect,
    showMenu,
    setShowMenu,
  };
};

export default useSelectBox;
