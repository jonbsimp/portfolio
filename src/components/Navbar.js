import React from 'react';
import { Layout, Menu } from "antd";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const { Header } = Layout;

export default function Navbar() {
  return (
    <Header style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Menu theme="dark" mode="horizontal" style={{ flex: 1 }}>
        <Menu.Item key="1">
          {/* <img src="/assets/logo.png" alt="Logo" style={{ height: '30px' }} /> */}
        </Menu.Item>
      </Menu>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="https://www.linkedin.com/in/jonbsimp" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5rem' }}>
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/jonbsimp" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5rem' }}>
          <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/jbsimpson" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5rem' }}>
          <AiFillInstagram />
        </a>
      </div>
    </Header>
  );
}
