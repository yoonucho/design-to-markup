import Layout from '@/commons/layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

type AppPropsWithExtra = AppProps & {
  pageProps: AppProps['pageProps'] & { isMobile?: boolean };
};

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '400 700',
  style: 'normal',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppPropsWithExtra) {
  return (
    <div className={`${pretendard.className} ${pretendard.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
