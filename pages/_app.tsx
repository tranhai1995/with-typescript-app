import React, {FC} from 'react';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import Head from 'next/head';
import moment from 'moment';
import store from '../store';

import 'moment/locale/ja';
import {GlobalStyle} from '../theme';

moment.locale('ja');

const WrappedApp: FC<AppProps> = ({Component, pageProps}: AppProps) => (
  <>
    <Provider store={store}>
      <Head>
        <title>SWIM RECORD</title>
        <link rel="preconnect" href="//fonts.gstatic.com" />
        <link
          href="//fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  </>
);

export default WrappedApp;
