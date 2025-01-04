import React from 'react';
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default function Navbar() {
  return (
    <Header style={{ position: 'relative', zIndex: 10 }}>
      <Menu theme="dark" mode="horizontal">
        {/* <Menu.Item key="1">Jon Simpson</Menu.Item> */}
      </Menu>
    </Header>
  );
}
