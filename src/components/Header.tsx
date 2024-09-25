// src/components/Header.tsx
import React from 'react';
import { Layout, Dropdown, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  // 定义符合 MenuProps 的菜单项
  const menuItems: MenuProps['items'] = [
    { key: '1', icon: <UserOutlined />, label: '个人中心' },
    { key: '2', icon: <LogoutOutlined />, label: '退出登录' },
  ];

  return (
    <AntHeader
      style={{
        background: '#fff',
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
      }}
    >
      <div style={{ fontSize: '18px', fontWeight: 'bold' }}>管理系统</div>

      {/* 直接传递 menu 对象，而不是传递 ReactElement */}
      <Dropdown menu={{ items: menuItems }} placement="bottomRight">
        <div
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <Avatar icon={<UserOutlined />} />
          <span style={{ marginLeft: '8px' }}>用户名</span>
        </div>
      </Dropdown>
    </AntHeader>
  );
};

export default Header;
