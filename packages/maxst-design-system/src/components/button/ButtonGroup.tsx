import React, { Children, useState } from 'react';

interface ButtonGropProps {
  children: any;
  fullWidth?: boolean;
  align?: 'left' | 'right' | 'center';
  direction?: 'vertical' | 'horizontal';
  buttonWidth?: string;
}

export const ButtonGroup = ({
  children,
  fullWidth,
  align,
  direction,
  buttonWidth,
}: ButtonGropProps) => {
  return (
    <div
      className={[
        `button__group`,
        fullWidth && 'fullWidth',
        align && align,
        direction && direction,
      ].join(' ')}
    >
      {/* {children} */}
      {React.Children.map(children, (child) => {
        if (child !== null)
          return React.cloneElement(child, { buttonWidth: buttonWidth });
      })}
    </div>
  );
};
