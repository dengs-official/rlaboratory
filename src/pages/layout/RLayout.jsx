import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import './Rlayout.less';
import Home from '../home/Home';
import About from '../about/About';
import RHeader from './components/header/RHeader';
import RFooter from './components/footer/RFooter';

const { Content } = Layout;

function RLayout() {
  return (
    <Layout className="r-layout">
      <RHeader>
        Header
      </RHeader>

      <Content>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Content>

      <RFooter>
        Footer
      </RFooter>
    </Layout>
  );
}

export default RLayout;
