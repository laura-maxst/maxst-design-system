import React, { useEffect, useState } from 'react';

interface ButtonGropProps {
  children: any | React.ReactNode;
  fullWidth?: boolean;
  align?: 'left' | 'right' | 'center';
  direction?: 'vertical' | 'horizontal';
  buttonWidth?: string;
}

const ButtonGroup = ({
  children,
  fullWidth,
  align,
  direction,
  buttonWidth,
}: ButtonGropProps) => {
  const [buttonWidthCustom, setButtonWidthCustom] = useState<string>('none');

  useEffect(() => {
    if (buttonWidth) {
      setButtonWidthCustom(buttonWidth);
    }
  }, [buttonWidth]);

  return (
    <div
      className={[
        'mds-button-root',
        `button__group`,
        fullWidth && 'fullWidth',
        align && align,
        direction && direction,
      ].join(' ')}
    >
      {/* {children} */}
      {React.Children.map(children, (child) => {
        if (child !== null)
          return React.cloneElement(child, {
            buttonWidth: buttonWidthCustom,
          });
      })}
    </div>
  );
};

export { ButtonGroup };
