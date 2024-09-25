// src/pages/Login.tsx
import React from 'react';
import { Button, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom'; // 在 v5 中使用 useHistory

const Login: React.FC = () => {
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    // 登录成功后使用 history.push 进行页面跳转
    history.push('/dashboard');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f0f2f5',
      }}
    >
      <Form
        name="login"
        style={{ width: 300 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
