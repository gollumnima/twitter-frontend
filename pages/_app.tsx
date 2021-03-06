import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { theme } from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '@store/index';
import GlobalStyle from '@styles/index';
import moment from 'moment';
import 'moment/locale/ko';
import BootStrap from '~/components/common/BootStrap';
import { Content } from './index';
import '@styles/reset.css';
import { authToken } from '~/utils/localStorage.wrapper';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const token = authToken.get() ?? '';
  moment.locale('ko');

  const modalList = ['/signup', '/login', '/settings/profile', '/compose'];
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Twitter Project!!</title>
      </Head>
      { token.length >= 1 ? <BootStrap /> : null}
      <ThemeProvider theme={theme}>
        {
          modalList.includes(router.pathname)
            ? (
              <Content>
                <Component {...pageProps} />
              </Content>
            )
            : <Component {...pageProps} />
        }
        {
          modalList.includes(router.pathname)
          && <Component {...pageProps} />
        }
      </ThemeProvider>
    </Provider>
  );
}
