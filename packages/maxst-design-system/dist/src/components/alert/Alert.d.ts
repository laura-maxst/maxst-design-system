import React from 'react';
interface AlertProps {
    type: 'error' | 'warning' | 'information' | 'success';
    title?: string;
    contents: string;
    closeButton?: boolean;
    actionButtonData?: {
        label: string;
        onClickAction: () => void;
    };
    open: boolean;
    onClose: () => void;
    className?: string;
}
declare const Alert: ({ type, title, contents, closeButton, actionButtonData, open, onClose, className, }: AlertProps) => React.JSX.Element;
export { Alert };
export type { AlertProps };
