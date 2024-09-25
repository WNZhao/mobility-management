// src/components/Sidebar.tsx
import React from 'react';
import { Menu, MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import menuList, { MenuItem } from '../config/menuConfig'; // 引入菜单配置
import IconAdapter from './IconAdapter';

const Sidebar: React.FC = () => {
  // 转换菜单列表为 antd `Menu` 的 items 格式
  const getMenuItems = (menuItems: MenuItem[]): MenuProps['items'] => {
    return menuItems.map((item) => {
      if (item.children) {
        // console.log(item.title, '---->', item.meta?.icon);
        return {
          key: item.key,
          label: item.meta?.icon ? (
            <span className="icon-menu-item">
              <IconAdapter type={item.meta.icon} />
              {item.title}
            </span>
          ) : (
            item.title
          ),
          children: getMenuItems(item.children), // 递归处理子菜单
        };
      }

      return item.meta?.icon
        ? {
            key: item.key,
            label: (
              <Link to={item.key} className="icon-menu-item">
                <IconAdapter type={item.meta.icon} />
                {item.title}
              </Link>
            ),
          }
        : {
            key: item.key,
            label: <Link to={item.key}>{item.title}</Link>,
          };
    });
  };

  const menuItems = getMenuItems(menuList);

  return (
    <Menu
      mode="vertical"
      defaultSelectedKeys={['/home']}
      items={menuItems} // 使用 `items` 属性
      className="sidebar-menu"
      style={{ borderRight: 0 }}
    />
  );
};

export default Sidebar;
