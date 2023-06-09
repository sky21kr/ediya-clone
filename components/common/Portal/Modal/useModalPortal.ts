import { useRef } from 'react';
import { ModalPortalProps } from '@/components/common/Portal/Modal/index';

export type UseModalPortalProps = Pick<ModalPortalProps, 'handleClose'>;
const useModalPortal = ({ handleClose }: UseModalPortalProps) => {
  const rootElement = document.getElementById('modal-root') as HTMLElement;
  const backgroundRef = useRef(null);

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === backgroundRef.current && handleClose) {
      handleClose();
    }
  };

  return {
    handleClickOutside,
    backgroundRef,
    rootElement,
  };
};

export default useModalPortal;
