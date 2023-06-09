import Footer from '@/components/Footer';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';
import '@/assets/styles/reset.scss';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';
import localFont from 'next/font/local';

import type { AppProps } from 'next/app';

const spoqaHanSansNeo = localFont({
  src: [
    {
      path: '../assets/styles/fonts/SpoqaHanSans/SpoqaHanSansNeo-Thin.woff2',
      weight: '100',
    },
    {
      path: '../assets/styles/fonts/SpoqaHanSans/SpoqaHanSansNeo-Light.woff2',
      weight: '300',
    },
    {
      path: '../assets/styles/fonts/SpoqaHanSans/SpoqaHanSansNeo-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/styles/fonts/SpoqaHanSans/SpoqaHanSansNeo-Medium.woff2',
      weight: '500',
    },
    {
      path: '../assets/styles/fonts/SpoqaHanSans/SpoqaHanSansNeo-Bold.woff2',
      weight: '700',
    },
  ],
});

const queryClient = new QueryClient();
export default function BaseLayout({ Component, pageProps }: AppProps) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalNavigationBar />
          <Component {...pageProps} />
          <Footer />
        </Hydrate>
      </QueryClientProvider>

      <style jsx global>{`
        :root {
          --font-sqopa-han-sans-neo: ${spoqaHanSansNeo.style.fontFamily};
        }
      `}</style>
    </div>
  );
}
