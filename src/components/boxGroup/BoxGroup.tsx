import React from 'react';

interface BoxGroupPropsType {
  align?: 'left' | 'right' | 'center' | 'between';
  direction?: 'vertical' | 'horizontal';
  gap?: number;
  // wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  wrap?: boolean;
  children: React.ReactNode;
  className?: string;
}

const BoxGroup = ({
  align = 'left',
  direction = 'horizontal',
  gap = 0,
  wrap = false,
  children,
  className,
}: BoxGroupPropsType) => {
  return (
    <div
      className={[
        'mds-box-group',
        `box-group-${align}-${direction}`,
        className ? className : '',
      ].join(' ')}
      style={{ gap: gap, flexWrap: wrap ? 'wrap' : 'nowrap' }}
    >
      {children}
    </div>
  );
};

export { BoxGroup };
