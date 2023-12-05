import { Text, TextLabel } from '@components/text';
import React, { useEffect, useState } from 'react';

type MenuItemPropsType = {
  id: string;
  label: string;
  size?: 'l' | 's';
  iconLeft?: JSX.Element | React.ReactNode;
  iconRight?: JSX.Element | React.ReactNode;
  disabled?: boolean;
  subLabel?: string;
  onChange?: (id: string, label: string) => void;
  onClick?: (id: string, label: string) => void;
  selected?: boolean;
  className?: string;
};

const MenuItem = ({
  id,
  label,
  size,
  iconLeft,
  iconRight,
  disabled,
  subLabel,
  onChange,
  onClick,
  selected,
  className,
}: MenuItemPropsType) => {
  const resolveOnClick = ({ id, label }: { id: string; label: string }) => {
    if (!disabled) {
      onClick && onClick(id, label);
      onChange && onChange(id, label);
    }
  };

  return (
    <div
      className={[
        'menu-item',
        `menu-item-${size ? size : 'l'}`,
        disabled ? 'disabled' : '',
        selected ? 'selected' : '',
        className ? className : '',
      ].join(' ')}
      id={id}
      onClick={() => resolveOnClick({ id, label })}
    >
      {iconLeft && iconLeft}
      <Text className="menu__label" type="body" size={'l'}>
        {label}
      </Text>
      {subLabel && (
        <TextLabel className="menu__sub-label" size="m">
          {subLabel}
        </TextLabel>
      )}
      {iconRight && iconRight}
    </div>
  );
};

export { MenuItem };
export type { MenuItemPropsType };
