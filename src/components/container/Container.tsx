import React from 'react';
// import '@styles/scss/components/_container.scss';

interface ContainerProps {
  full?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Container = ({ full, className, children, ...props }: ContainerProps) => {
  return (
    <div
      className={['mds-container', full && 'full', className && className].join(
        ' ',
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
