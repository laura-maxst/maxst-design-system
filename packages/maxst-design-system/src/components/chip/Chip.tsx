import React, { useEffect, useState } from 'react';
import { CloseCircleFillIcon, CheckLineIcon } from '@maxst-designsystem/icons';
import { TextLabel } from '@components/text';

interface ChipProps {
  type:
    | 'default'
    | 'tertiary'
    | 'color-mint'
    | 'color-bluegray'
    | 'color-magenta'
    | 'color-purple'
    | 'color-blue';
  size: 'l' | 's';
  children: string;
  state?: 'default' | 'pressed' | 'disabled';
  action?: 'filter' | 'check';
  checked?: boolean;
  iconCheck?: React.ReactNode;
  iconLeft?: React.ReactNode;
  className?: string;
  onChange?: (checked: boolean) => void;
  onClick?: (checked: boolean) => void;
}

const Chip = ({
  type,
  size,
  state,
  action,
  checked,
  iconCheck,
  iconLeft,
  className,
  children,
  onChange,
  onClick,
  ...props
}: ChipProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const resolveOnChange = () => {
    if (action === 'check') {
      setIsChecked(!isChecked);

      if (!onChange) {
        return;
      }
      onChange(!isChecked);
    }
  };

  const resolveOnClick = () => {
    if (action === 'check') {
      setIsChecked(!isChecked);

      if (!onClick) {
        return;
      }
      onClick(!isChecked);
    }
  };

  useEffect(() => {
    if (checked) {
      setIsChecked(checked);
    }
  }, []);

  return (
    <div
      role={action && 'button'}
      tabIndex={action ? 0 : -1}
      onClick={resolveOnClick}
      onChange={resolveOnChange}
      className={[
        'mds-chip',
        `chip-${type}-${size}-${state ? state : 'default'}`,
        action ? action : '',
        isChecked ? 'checked' : '',
        className && className,
      ].join(' ')}
      {...props}
    >
      {iconLeft && <div className="left-icon">{iconLeft}</div>}
      <TextLabel size={size === 'l' ? 'm' : 's'}>{children}</TextLabel>
      {action === 'filter' && <CloseCircleFillIcon />}
      {action === 'check' && (iconCheck ? iconCheck : <CheckLineIcon />)}
    </div>
  );
};

export { Chip };
