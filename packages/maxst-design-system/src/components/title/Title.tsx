import React from 'react';

interface TitleProps {
  role: number;
  type: 'title';
  size: 'xl' | 'l' | 'm' | 's' | 'xs';
  align?: string;
  className?: string;
  children: React.ReactNode;
}

function Title({ role, type, size, align, className, children }: TitleProps) {
  const Tag = 'h'.concat(String(role + 1));

  return React.createElement(
    Tag,
    {
      className: `font-${type}-${size} ${align ? align : ''} ${
        className ? className : ''
      }`,
    },
    [children],
  );
}

export default Title;
