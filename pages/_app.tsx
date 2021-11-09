import Head from 'next/head';
import { AppProps } from 'next/app';
import '@styles/reset.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Twitter Project!!</title>
      </Head>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
