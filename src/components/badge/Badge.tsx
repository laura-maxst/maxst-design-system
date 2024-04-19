import { TextLabel } from '@components/text';
import React from 'react';

interface BadgePropsType {
  type: 'number' | 'dot' | 'icon';
  size: 'xl' | 'l' | 'm' | 's';
  align?: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';
  color?: 'mint' | 'gray' | 'magenta';
  status?: 'default' | 'error' | 'warning' | 'information' | 'success';
  children?: React.ReactNode;
  number?: number | string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Badge = ({
  type,
  size,
  align = 'top-right',
  color,
  status,
  children,
  number,
  icon,
  onClick,
  className,
}: BadgePropsType) => {
  const resolveOnClick = () => {
    if (type !== 'icon') {
      return;
    }
    onClick && onClick();
  };

  return (
    <div className={['mds-badge-wrap', className ? className : ''].join(' ')}>
      <div
        className={[
          'mds-badge',
          `badge-${type}-${color ? color : status ? status : 'mint'}-${size}`,
          align ? align : 'top-right',
          type === 'icon' && onClick ? 'click-mode' : '',
        ].join(' ')}
        onClick={resolveOnClick}
      >
        {type == 'number' && (number || number === 0) && (
          <TextLabel size={((size == 's' || size == 'm') && 's') || 'm'}>
            {number}
          </TextLabel>
        )}
        {type == 'icon' && icon && icon}
      </div>
      {children}
    </div>
  );
};

export { Badge };
