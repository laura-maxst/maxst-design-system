import React from 'react';
interface AlertPropsType {
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
declare const Alert: ({ type, title, contents, closeButton, actionButtonData, open, onClose, className, }: AlertPropsType) => React.JSX.Element;
export { Alert };
export type { AlertPropsType };
