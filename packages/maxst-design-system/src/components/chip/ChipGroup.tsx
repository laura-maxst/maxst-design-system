import React from 'react';
import { CloseCircleFillIcon, CheckLineIcon } from '@maxst-designsystem/icons';

interface ChipGroupProps {
  children: React.ReactNode;
  className?: string;
}

const ChipGroup = ({ children, className, ...props }: ChipGroupProps) => {
  return (
    <div
      className={['mds-root', 'mds-chip-group', className && className].join(
        ' ',
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { ChipGroup };
