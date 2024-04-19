import React from 'react';

interface DividerPropsType {
  type?: 'default' | 'accent';
  direction?: 'vertical' | 'horizontal';
  children?: string | React.ReactNode;
  className?: string;
}

const Divider = ({
  type,
  direction,
  children,
  className,
}: DividerPropsType) => {
  return (
    <>
      {children ? (
        <div
          className={[
            'mds-divider',
            `divider-${type ? type : 'default'}`,
            `divider-${direction ? direction : 'horizontal'}`,
            `${children && 'with-children'}`,
            className ? className : '',
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
            className ? className : '',
          ].join(' ')}
        />
      )}
    </>
  );
};

export { Divider };
