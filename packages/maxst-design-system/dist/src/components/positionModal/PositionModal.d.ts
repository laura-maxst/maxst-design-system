import React from 'react';
interface PositionModalProps {
    id?: string;
    title?: string;
    titleImage?: JSX.Element | React.ReactNode;
    titleIcon?: JSX.Element | React.ReactNode;
    children?: JSX.Element | React.ReactNode;
    size?: 's' | 'm' | 'l' | 'xl';
    mainButton?: {
        type: 'primary' | 'secondary' | 'error';
        text: string;
        onClick: () => void;
    };
    subButton?: {
        text: string;
        onClick: () => void;
    };
    subtlestButton?: {
        text: string;
        onClick: () => void;
    };
    isCloseButton?: boolean;
    open: boolean;
    onClose: () => void;
    smallButtonMode?: boolean;
    isDim?: boolean;
    isArrow?: boolean;
    arrowDirection?: 'top-left' | 'top' | 'top-right' | 'right-top' | 'right' | 'right-bottom' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left-top' | 'left' | 'left-bottom';
    position: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };
    footerCustom?: JSX.Element | React.ReactNode;
    className?: string;
}
declare const PositionModal: ({ id, title, titleImage, titleIcon, children, size, mainButton, subButton, subtlestButton, isCloseButton, open, onClose, smallButtonMode, isDim, isArrow, arrowDirection, position, footerCustom, className, }: PositionModalProps) => React.JSX.Element;
export { PositionModal };
export type { PositionModalProps };
