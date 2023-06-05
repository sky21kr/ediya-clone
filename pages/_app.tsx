import Footer from '@/components/Footer';
import GlobalNavigationBar from '@/components/GlobalNavigationBar';
import '@/assets/styles/reset.scss';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import localFont from 'next/font/local';

import type { AppProps } from 'next/app';

// const spoqaHanSans = localFont({
//   src: [
//     {
//       path: './fonts/SpoqaHanSans/SpoqaHanSansNeo-Bold.woff2',
//       weight: '700',
//     },
//     {
//       path: './fonts/SpoqaHanSans/SpoqaHanSansNeo-Light.woff2',
//       weight: '500',
//     },
//   ],
// });

const queryClient = new QueryClient();
export default function BaseLayout({ Component, pageProps }: AppProps) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GlobalNavigationBar />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
