import { ReactNode, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import useScrollDisable from '@/hooks/useScrollDisable';
import useModalPortal from '@/components/common/Portal/Modal/useModalPortal';

export type ModalPortalProps = {
  children: ReactNode;
  handleClose?: () => void;
};

export default function ModalPortal({
  children,
  handleClose,
}: ModalPortalProps) {
  const { rootElement, backgroundRef, handleClickOutside } = useModalPortal({
    handleClose,
  });

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
    rootElement,
  );
}
