// src/menuConfig.ts

export interface MenuItem {
  title: string;
  key: string;
  children?: MenuItem[];  // 可选的子菜单项
  btnList?: { title: string; key: string }[];  // 可选的按钮列表
  meta?: {
    icon?: string;  // 可选的图标
    hidden?: boolean;  // 可选的隐藏
  };  // 可选的元数据
}

// 菜单列表数据
const menuList: MenuItem[] = [
  {
    title: '首页',
    key: '/home',
    meta: {
      icon: 'home',
    },
  },
  {
    title: 'UI',
    key: '/ui',
    meta: {
      icon: 'kaifazujian',
    },
    children: [
      {
        title: '按钮',
        key: '/ui/buttons',
      },
      {
        title: '弹框',
        key: '/ui/modals',
      },
      {
        title: 'Loading',
        key: '/ui/loadings',
      },
      {
        title: '通知提醒',
        key: '/ui/notification',
      },
      {
        title: '全局Message',
        key: '/ui/messages',
      },
      {
        title: 'Tab页签',
        key: '/ui/tabs',
      },
      {
        title: '图片画廊',
        key: '/ui/gallery',
      },
      {
        title: '轮播图',
        key: '/ui/carousel',
      },
    ],
  },
  {
    title: '表单',
    key: '/form',
    meta: {
      icon: 'biaodan',
    },
    children: [
      {
        title: '登录',
        key: '/form/login',
      },
      {
        title: '注册',
        key: '/form/reg',
      },
    ],
  },
  {
    title: '表格',
    key: '/table',
    meta: {
      icon: 'biaodanzujian-biaoge',
    },
    children: [
      {
        title: '基础表格',
        key: '/table/basic',
      },
      {
        title: '高级表格',
        key: '/table/high',
      },
    ],
  },
  {
    title: '富文本',
    key: '/rich',
    meta: {
      icon: 'EditOutlined',
    },
  },
  {
    title: '城市管理',
    key: '/city',
    meta: {
      icon: 'chengshiguanli',
    },
  },
  {
    title: '订单管理',
    key: '/order',
    meta: {
      icon: 'dingdanguanli',
    },
    btnList: [
      {
        title: '订单详情',
        key: 'detail',
      },
      {
        title: '结束订单',
        key: 'finish',
      },
    ],
  },
  {
    title: '员工管理',
    key: '/user',
    meta: {
      icon: 'yuangongguanli',
    },
  },
  {
    title: '车辆地图',
    key: '/bikeMap',
    meta: {
      icon: 'ditu',
    },
  },
  {
    title: '权限设置',
    key: '/permission',
    meta: {
      icon: 'quanxianshezhi',
    },
  },
  {
    title: '图表',
    key: '/charts',
    meta: {
      icon: 'tubiao-zhexiantu',
    },
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
      },
      {
        title: '饼图',
        key: '/charts/pie',
      },
      {
        title: '折线图',
        key: '/charts/line',
      },
    ],
  },

];

export default menuList;
