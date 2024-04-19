import React, { useState } from 'react';
import { Text } from '@components/text';

interface TooltipPropsType {
  title?: string;
  text?: string;
  children: React.ReactNode;
  customContent?: any;
  align?:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'right'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left'
    | 'left';
  arrow?: boolean;
  mode?: 'dark-mode' | 'light-mode';
  className?: string;
}

const Tooltip = ({
  title,
  text,
  customContent,
  children,
  align,
  arrow,
  mode,
  className,
}: TooltipPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onMouseOver = () => {
    setIsOpen(true);
  };

  const onMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={[
        'tooltip-wrap',
        align && `tooltip-${align}`,
        className ? className : '',
      ].join(' ')}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <div
        className={[
          'tooltip-box',
          isOpen ? 'open' : 'close',
          arrow && 'arrow',
          `tooltip-box-${mode ? mode : 'dark-mode'}`,
        ].join(' ')}
      >
        {customContent ? (
          customContent
        ) : (
          <>
            {title && (
              <Text type="body" size="l">
                {title}
              </Text>
            )}
            {text && (
              <Text type="body" size="m">
                {text}
              </Text>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export { Tooltip };
export type { TooltipPropsType };
