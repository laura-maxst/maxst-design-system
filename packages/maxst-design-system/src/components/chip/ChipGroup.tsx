import React from 'react';

interface ChipGroupPropsType {
  children: React.ReactNode;
  className?: string;
}

const ChipGroup = ({ children, className, ...props }: ChipGroupPropsType) => {
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
