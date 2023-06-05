import { ReactNode, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import useScrollDisable from '@/hooks/useScrollDisable';

interface Props {
  children: ReactNode;
  handleClose?: () => void;
}

export default function ModalPortal({ children, handleClose }: Props) {
  const el = document.getElementById('modal-root') as HTMLElement;
  const backgroundRef = useRef(null);

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === backgroundRef.current && handleClose) {
      handleClose();
    }
  };

  useScrollDisable();

  return ReactDom.createPortal(
    <div
      className="background"
      onClick={handleClickOutside}
      ref={backgroundRef}
    >
      {children}
      <style jsx>{`
        .background {
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }
      `}</style>
    </div>,
    el,
  );
}
