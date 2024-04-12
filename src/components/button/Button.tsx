import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { TextLabel } from '@components/text';
import { Spinner } from '@components/spinner';

interface ButtonProps {
  id?: string;
  size: 'xl' | 'l' | 'm' | 's' | 'xs';
  onClick?: (e: any) => void;
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
  onClick,
  ...props
}: ButtonProps) => {
  const buttonRef: any = useRef();
  const [buttonWidthStyle, setButtonWidthStyle] = useState<string>('none');

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

  const resolveOnClick = (e: any) => {
    if (type !== 'text' && type !== 'link') {
      const thisButton: any = buttonRef.current;
      const thisButtonStyle = thisButton.getBoundingClientRect();
      const posX = thisButtonStyle.left;
      const posY = thisButtonStyle.top;
      const thisButtonWidth = thisButtonStyle.width;
      const thisButtonHeight = thisButtonStyle.height;

      const ripple = document.createElement('span');
      thisButton.appendChild(ripple);

      const x = e.clientX - posX - thisButtonWidth / 2;
      const y = e.clientY - posY - thisButtonHeight / 2;

      ripple.style.width = `${thisButtonWidth}px`;
      ripple.style.height = `${thisButtonHeight}px`;
      ripple.style.top = `${y}px`;
      ripple.style.left = `${x}px`;

      ripple.classList.add('ripple');

      setTimeout(() => {
        thisButton.removeChild(ripple);
      }, 500);
    }

    if (!onClick) {
      return;
    } else {
      onClick(e);
    }
  };

  useEffect(() => {
    if (buttonWidth) {
      setButtonWidthStyle(buttonWidth);
    }
  }, [buttonWidth]);

  return (
    <button
      ref={buttonRef}
      id={id ? id : ''}
      type={props.htmlType ? props.htmlType : 'button'}
      className={[
        'mds-button-root',
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
      style={{
        width: `${buttonWidthStyle ? buttonWidthStyle : 'none'}`,
      }}
      onClick={(e) => resolveOnClick(e)}
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
