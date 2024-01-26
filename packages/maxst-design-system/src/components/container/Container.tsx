import React from 'react';

interface ContainerProps {
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
}: ContainerProps) => {
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
