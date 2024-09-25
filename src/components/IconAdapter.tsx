// src/components/IconAdapter.tsx
import React from 'react';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import Icon from './Icon'; // 引入自定义 Iconfont 组件

interface IconAdapterProps {
  type: string;
  [key: string]: any;
}

const IconAdapter: React.FC<IconAdapterProps> = ({ type, ...props }) => {
  // antd 的 Icon 组件支持的图标类型
  if (type === 'user') {
    return <UserOutlined {...props} />;
  } else if (type === 'EditOutlined') {
    return <EditOutlined />;
  }
  return <Icon type={type} {...props} />; // 使用自定义的 Iconfont 图标
};

export default IconAdapter;
