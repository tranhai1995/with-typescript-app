import React from 'react';
import Head from 'next/head';
import UsersApp from '@containers/home';
import Layout from '@components/layout';

const Users = () => (
  <Layout>
    <Head>
      <title>HOME</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, maximum-scale=1.0"
      />
    </Head>
    <UsersApp />
  </Layout>
);

export default Users;
