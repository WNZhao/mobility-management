// src/components/Content.tsx
import React from 'react';

const Content: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* 上部区域 */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: '16px',
          marginBottom: '16px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      >
        这里是顶部内容
      </div>

      {/* 中部区域 */}
      <div
        style={{
          flex: 2,
          backgroundColor: '#fff',
          padding: '16px',
          marginBottom: '16px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      >
        这里是中部内容
      </div>

      {/* 下部区域 */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: '16px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      >
        这里是底部内容
      </div>
    </div>
  );
};

export default Content;
