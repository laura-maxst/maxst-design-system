import React, { useEffect, useState } from 'react';
import { CloseCircleFillIcon, CheckLineIcon } from '@maxst-designsystem/icons';
import { TextLabel } from '@components/text';

interface ChipProps {
  id?: string;
  type:
    | 'default'
    | 'tertiary'
    | 'color-mint'
    | 'color-bluegray'
    | 'color-magenta'
    | 'color-purple'
    | 'color-blue';
  size: 'xl' | 'l' | 's';
  children: string;
  state?: 'default' | 'pressed';
  action?: 'filter' | 'check';
  checked?: boolean;
  iconCheck?: React.ReactNode;
  iconLeft?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onChange?: (id: string, checked?: boolean) => void;
  onClick?: (id: string, checked?: boolean) => void;
}

const Chip = ({
  id,
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
  disabled,
  ...props
}: ChipProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [thisChipID, setThisChipID] = useState<string>('');

  const resolveOnChange = () => {
    if (action === 'check') {
      if (!disabled) {
        setIsChecked(!isChecked);

        if (!onChange) {
          return;
        }
        onChange(thisChipID, !isChecked);
      }
    }
  };

  const resolveOnClick = (e: any) => {
    if (!disabled) {
      if (action === 'check') {
        setIsChecked(!isChecked);

        if (!onClick) {
          return;
        }
        onClick(e, !isChecked);
      } else if (action === 'filter') {
        if (!onClick) {
          return;
        }
        onClick(e);
      }
    }
  };

  useEffect(() => {
    if (checked) {
      setIsChecked(checked);
    }
    if (id) {
      setThisChipID(id);
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
        disabled ? 'disabled' : '',
        className && className,
      ].join(' ')}
      id={id}
      {...props}
    >
      {iconLeft && <div className="left-icon">{iconLeft}</div>}
      <TextLabel size={(size === 'xl' && 'l') || (size === 's' && 's') || 'm'}>
        {children}
      </TextLabel>
      {action === 'filter' && <CloseCircleFillIcon />}
      {action === 'check' && (iconCheck ? iconCheck : <CheckLineIcon />)}
    </div>
  );
};

export { Chip };
