import React from 'react';

interface DividerProps {
  type?: 'default' | 'accent';
  direction?: 'vertical' | 'horizontal';
  children?: string | React.ReactNode;
}

const Divider = ({ type, direction, children }: DividerProps) => {
  return (
    <>
      {children ? (
        <div
          className={[
            'mds-divider',
            `divider-${type ? type : 'default'}`,
            `divider-${direction ? direction : 'horizontal'}`,
            `${children && 'with-children'}`,
          ].join(' ')}
        >
          {children && <div className="divider__children-box">{children}</div>}
        </div>
      ) : (
        <hr
          className={[
            'mds-divider',
            `divider-${type ? type : 'default'}`,
            `divider-${direction ? direction : 'horizontal'}`,
          ].join(' ')}
        />
      )}
    </>
  );
};

export { Divider };
