import FloatingArrow from '@/assets/svgs/floating-arrow.svg';
import useFloatingButton from '@/components/common/FloatingButton/useFloatingButton';

export default function FloatingButton() {
  const { showButton } = useFloatingButton();

  return showButton ? (
    <button
      className="floating-button"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <FloatingArrow />
      <style jsx>{`
        .floating-button {
          cursor: pointer;
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
