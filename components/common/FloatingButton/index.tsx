import FloatingArrow from '@/assets/svgs/floating-arrow.svg';

export default function FloatingButton() {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <button className="floating-button" onClick={handleScrollUp}>
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
  );
}
