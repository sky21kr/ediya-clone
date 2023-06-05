export type NewsLayoutProps = {
  children: React.ReactNode;
};
export default function NewsLayout({ children }: NewsLayoutProps) {
  return (
    <div className="news-layout">
      <div className="container">{children}</div>

      <style jsx>{`
        .news-layout {
          margin-top: 52px;
          display: flex;
          justify-content: center;

          .container {
            padding: 0 15px;
            max-width: 740px;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
