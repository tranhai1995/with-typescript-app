import React from 'react';
import HomeApp from '@containers/home';
import Head from 'next/head';
import Layout from '@components/layout';

const IndexPage = () => (
  <Layout>
    <Head>
      <title>HOME</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, maximum-scale=1.0"
      />
    </Head>
    <HomeApp />
  </Layout>
);

export default IndexPage;
