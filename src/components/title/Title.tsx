import React from 'react';
import TitleTagFilter from './TitleTagFilter';

interface TitlePropsType {
  role: 1 | 2 | 3 | 4 | 5 | 6;
  type?: 'title';
  size: 'xl' | 'l' | 'm' | 's' | 'xs';
  align?: string;
  className?: string;
  children: React.ReactNode;
}

function Title({
  role,
  type = 'title',
  size,
  align,
  className,
  children,
}: TitlePropsType) {
  return (
    <TitleTagFilter
      role={role}
      className={[
        'font-title',
        `font-${type}-${size}`,
        align ? align : '',
        className ? className : '',
      ].join(' ')}
    >
      {children}
    </TitleTagFilter>
  );
}

export { Title };
export type { TitlePropsType };
