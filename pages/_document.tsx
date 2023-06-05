import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Ediya</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/*  TODO: font CDN 제거 */}
          {/*<link*/}
          {/*  href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"*/}
          {/*  rel="stylesheet"*/}
          {/*  type="text/css"*/}
          {/*/>*/}
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
          <div id="modal-root" />
        </body>
      </html>
    );
  }
}
