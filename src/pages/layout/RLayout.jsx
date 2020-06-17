import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import './Rlayout.less';
import Home from '../home/Home';
import About from '../about/About';

const { Header, Content, Footer } = Layout;

function RLayout() {
  return (
    <Layout className="r-layout">
      <Header>
        Header
      </Header>

      <Content>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Content>

      <Footer>
        Footer
      </Footer>
    </Layout>
  );
}

export default RLayout;
