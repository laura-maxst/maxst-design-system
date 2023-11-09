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
}
declare const Alert: ({ type, title, contents, closeButton, actionButtonData, open, onClose, }: AlertProps) => JSX.Element;
export { Alert };
export type { AlertProps };
