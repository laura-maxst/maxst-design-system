interface DividerProps {
    type?: 'default' | 'accent';
    direction?: 'vertical' | 'horizontal';
    children?: string | any;
}
declare const Divider: ({ type, direction, children }: DividerProps) => JSX.Element;
export default Divider;
