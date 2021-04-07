import React from 'react';
import {Layout} from 'antd';

import PageHeader from './header';
import PageFooter from './fooder';
import {CustomLayout} from './style';

type OwnProps = {
  children: React.ReactNode;
};

const PageLayout: React.FC<OwnProps> = ({children}: OwnProps) => (
  <CustomLayout style={{minWidth: 1180}}>
    <PageHeader />
    <Layout className="content">
      <div className="top-area" />
      <div className="main container">{children}</div>
    </Layout>
    <PageFooter />
  </CustomLayout>
);

export default PageLayout;
