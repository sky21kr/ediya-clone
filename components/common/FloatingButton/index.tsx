import useFloatingButton from '@/components/common/FloatingButton/useFloatingButton';
import Image from 'next/image';

export default function FloatingButton() {
  const { showButton } = useFloatingButton();

  return showButton ? (
    <button
      className="floating-button"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <Image
        src="/svgs/floating-arrow.svg"
        alt="최상단으로 이미지"
        width={22}
        height={26}
      />
      <style jsx>{`
        .floating-button {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: sticky;
          bottom: 30px;
          right: 30px;
          align-self: end;
          background: #c8cde2;
          width: 50px;
          height: 50px;
          border: none;
          border-radius: 100%;
        }
      `}</style>
    </button>
  ) : null;
}
