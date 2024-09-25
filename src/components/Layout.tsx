// src/components/Layout.tsx
import React from 'react';
import { Layout as AntLayout, Avatar } from 'antd';
import Sidebar from './Sidebar';
import Header from './Header'; // 顶部导航栏
import './less/index.less'; // 引入样式文件

const { Sider, Content: AntContent } = AntLayout;

const url =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      {/* 左侧边栏 */}
      <Sider width={220} style={{ background: '#001529' }}>
        <div className="sider-top">
          <Avatar src={url} />
          {/* <Avatar size={64} icon={<Avatar />} /> */}
          <h2 style={{ color: '#fff' }}>Mobility-MS</h2>
        </div>
        <Sidebar />
      </Sider>

      {/* 右侧内容区 */}
      <AntLayout>
        <Header />
        <AntContent
          style={{ padding: '24px', background: '#f0f2f5', minWidth: '1200px' }}
        >
          {/* 渲染中部的子内容 */}
          {children}
        </AntContent>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
