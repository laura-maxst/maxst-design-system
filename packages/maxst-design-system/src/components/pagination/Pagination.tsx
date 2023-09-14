import React from 'react';

interface PaginationProps {
  type?: 'default' | 'simple';
  totalCount: number;
  defaultPage?: number;
  disabled?: boolean;
  showPageSizeChage?: () => void;
  onChange?: () => void;
  onClick?: () => void;
}

const Pagination = ({ type }: PaginationProps) => {
  return (
    <div className={['mds-pagination'].join(' ')}>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  );
};

export { Pagination };
