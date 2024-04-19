import React from 'react';

interface ContainerPropsType {
  full?: boolean;
  className?: string;
  maxWidth?: string;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

const Container = ({
  full,
  className,
  maxWidth,
  align,
  children,
  ...props
}: ContainerPropsType) => {
  return (
    <div
      className={[
        'mds-container',
        full && 'full',
        align ? align : 'center',
        className && className,
      ].join(' ')}
      style={{ maxWidth: maxWidth }}
      {...props}
    >
      {children}
    </div>
  );
};

export { Container };
