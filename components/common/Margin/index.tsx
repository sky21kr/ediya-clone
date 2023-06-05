export type MarginProps = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

export default function Margin({ left, right, top, bottom }: MarginProps) {
  return (
    <span className="margin">
      <style jsx>{`
        .margin {
          margin-right: ${right}px;
          margin-left: ${left}px;
          margin-top: ${top}px;
          margin-bottom: ${bottom}px;
        }
      `}</style>
    </span>
  );
}
