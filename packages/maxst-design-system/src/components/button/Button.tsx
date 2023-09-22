import React, { useEffect, useState } from 'react';
import { TextLabel } from '@components/text';
import { Spinner } from '@components/spinner';

interface ButtonProps {
  id?: string;
  size: 'xl' | 'l' | 'm' | 's' | 'xs';
  onClick?: () => void;
  type:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'error'
    | 'error-tertiary'
    | 'text'
    | 'link'
    | 'ghost';
  state?: 'default' | 'pressed' | 'disabled' | 'error';
  children?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isIconMode?: boolean;
  iconOnly?: React.ReactNode;
  isActionMode?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  buttonWidth?: string;
  className?: string;
}

const Button = ({
  id,
  size,
  children,
  type,
  state,
  iconLeft,
  iconRight,
  isIconMode,
  iconOnly,
  isActionMode,
  loading,
  buttonWidth,
  className,
  ...props
}: ButtonProps) => {
  const [buttonWidthStyle, setButtonWidthStyle] = useState<string>('');

  const onLabelSizeFilter = () => {
    switch (size) {
      case 'xl':
        return 'l';
      case 'l':
        return 'l';
      case 'm':
        return 'm';
      case 's':
        return 'm';
      case 'xs':
        return 's';
      default:
        return 'm';
    }
  };

  const onTextLabelSizeFilter = () => {
    switch (size) {
      case 'xl':
        return 'l';
      case 'l':
        return 'l';
      case 'm':
        return 'm';
      case 's':
        return 'm';
      case 'xs':
        return 'm';
      default:
        return 'l';
    }
  };

  const onButtonTypeSizeFilter = (type: string, size: string) => {
    if (['text', 'link'].includes(type)) {
      switch (size) {
        case 'xl':
          return 'l';
        case 'l':
          return 'l';
        case 'm':
          return 's';
        case 's':
          return 's';
        case 'xs':
          return 's';
        default:
          return '';
      }
    } else {
      return size;
    }
  };

  useEffect(() => {
    if (buttonWidth) {
      setButtonWidthStyle(buttonWidth);
    }
  }, [buttonWidth]);

  return (
    <button
      id={id ? id : ''}
      type={props.htmlType ? props.htmlType : 'button'}
      className={[
        `button__${isIconMode ? 'icon-' : ''}${type}-${onButtonTypeSizeFilter(
          type,
          size,
        )}--${state ? state : 'default'}`,
        `${iconLeft || iconRight || isIconMode ? 'icon-button' : ''}`,
        `${isIconMode ? 'icon-button-only' : ''}`,
        `${
          isActionMode && type === 'primary' && size === 'xl'
            ? 'primary-action'
            : ''
        }`,
        className && className,
      ].join(' ')}
      disabled={state === 'disabled'}
      style={{ width: `${buttonWidthStyle ? buttonWidthStyle : 'unset'}` }}
      {...props}
    >
      {loading ? (
        <Spinner
          color={
            ['primary', 'secondary', 'error'].includes(type) ? 'white' : 'black'
          }
        />
      ) : (
        <>
          {iconLeft && iconLeft}
          {!isIconMode ? (
            <TextLabel
              size={
                ['text', 'link'].includes(type)
                  ? onTextLabelSizeFilter()
                  : onLabelSizeFilter()
              }
            >
              {children}
            </TextLabel>
          ) : (
            iconOnly
          )}
          {iconRight && iconRight}
        </>
      )}
    </button>
  );
};

export { Button };
