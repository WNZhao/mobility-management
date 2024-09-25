// 主页面，负责承载Layout和中部内容路由切换
// src/pages/Main.tsx
import React from 'react';
import Layout from '../components/Layout';

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default Main;
