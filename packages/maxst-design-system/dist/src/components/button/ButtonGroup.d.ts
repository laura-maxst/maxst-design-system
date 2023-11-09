interface ButtonGropProps {
    children: any;
    fullWidth?: boolean;
    align?: 'left' | 'right' | 'center';
    direction?: 'vertical' | 'horizontal';
    buttonWidth?: string;
}
declare const ButtonGroup: ({ children, fullWidth, align, direction, buttonWidth, }: ButtonGropProps) => JSX.Element;
export { ButtonGroup };
