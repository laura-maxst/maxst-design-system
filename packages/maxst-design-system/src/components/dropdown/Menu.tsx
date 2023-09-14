import { Text, TextLabel } from '@components/text';
import React from 'react';

type DropDownMenuProps = {
  id: string;
  label: string;
  size?: 'l' | 's';
  iconLeft?: JSX.Element | React.ReactNode;
  iconRight?: JSX.Element | React.ReactNode;
  disabled?: boolean;
  subLabel?: string;
  onClick: (id: string, label: string) => void;
};

const DropdownMenu = ({
  id,
  label,
  size,
  iconLeft,
  iconRight,
  disabled,
  subLabel,
  onClick,
}: DropDownMenuProps) => {
  const resolveOnClick = ({
    e,
    id,
    label,
  }: {
    e: any;
    id: string;
    label: string;
  }) => {
    if (!disabled) {
      onClick(id, label);
    }
  };

  return (
    <div
      className={[
        'dropdown-box__menu',
        `menu-item-${size ? size : 'l'}`,
        disabled ? 'disabled' : '',
      ].join(' ')}
      id={id}
      onClick={(e) => resolveOnClick({ e, id, label })}
    >
      {iconLeft && iconLeft}
      <Text className="dropdown-box__menu__label" type="body" size="l">
        {label}
      </Text>
      {subLabel && (
        <TextLabel className="dropdown-box__menu__sub-label" size="m">
          {subLabel}
        </TextLabel>
      )}
      {iconRight && iconRight}
    </div>
  );
};

export { DropdownMenu };
