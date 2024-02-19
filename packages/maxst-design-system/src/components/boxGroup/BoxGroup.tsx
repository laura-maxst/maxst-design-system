import React from 'react';

interface BoxGroupPropsType {
  align?: 'left' | 'right' | 'center' | 'between';
  direction?: 'vertical' | 'horizontal';
  gap?: number;
  // wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  wrap?: boolean;
  children: React.ReactNode;
}

const BoxGroup = ({
  align = 'left',
  direction = 'horizontal',
  gap = 0,
  wrap = false,
  children,
}: BoxGroupPropsType) => {
  return (
    <div
      className={[
        'mds-root',
        'mds-box-group',
        `box-group-${align}-${direction}`,
      ].join(' ')}
      style={{ gap: gap, flexWrap: wrap ? 'wrap' : 'nowrap' }}
    >
      {children}
    </div>
  );
};

export { BoxGroup };
