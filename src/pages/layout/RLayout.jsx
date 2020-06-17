import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import './Rlayout.less';
import Home from '../home/Home';
import About from '../about/About';
import RHeader from './components/header/RHeader';
import RFooter from './components/footer/RFooter';

const { Content } = Layout;

const menus = [{
  title: '首页',
  path: '/home',
  component: Home,
}, {
  title: '关于',
  path: '/about',
  component: About,
}];

function RLayout() {
  return (
    <Layout className="r-layout">
      <RHeader menus={menus} />
      <Content className="r-content">
        <Switch>
          <Redirect exact from="/" to={menus[0].path} />

          {menus.map((item) => (
            <Route path={item.path} component={item.component} key={item.title} />
          ))}
        </Switch>
      </Content>
      <RFooter />
    </Layout>
  );
}

export default RLayout;
