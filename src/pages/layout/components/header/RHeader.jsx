import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Layout,
  Menu,
} from 'antd';

const { Header } = Layout;

// withRouter 获取路由参数
const RHeader = withRouter((props) => {
  const { menus = [], location } = props;
  return (
    <Header>
      <Menu mode="horizontal" selectedKeys={location.pathname}>
        {menus.map((item) => (
          <Menu.Item key={item.path}><Link to={item.path}>{item.title}</Link></Menu.Item>
        ))}
      </Menu>
    </Header>
  );
});

export default RHeader;
