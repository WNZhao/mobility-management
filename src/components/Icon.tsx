// src/components/Icon.tsx
import React from 'react';
import classNames from 'classnames';

interface IconProps {
  type: string;
  className?: string;
  [key: string]: any;
}

const Icon: React.FC<IconProps> = ({ type, className, ...rest }) => {
  return (
    <i
      className={classNames('mobility', `mobility-${type}`, className)}
      {...rest}
    />
  );
};

export default Icon;
