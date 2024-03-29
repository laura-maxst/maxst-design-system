import React from 'react';

interface ChipGroupProps {
  children: React.ReactNode;
  className?: string;
}

const ChipGroup = ({ children, className, ...props }: ChipGroupProps) => {
  return (
    <div
      className={['mds-chip-group', className && className].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

export { ChipGroup };
