import React from 'react';
interface TitlePropsType {
    role: 1 | 2 | 3 | 4 | 5 | 6;
    type?: 'title';
    size: 'xl' | 'l' | 'm' | 's' | 'xs';
    align?: string;
    className?: string;
    children: React.ReactNode;
}
declare function Title({ role, type, size, align, className, children, }: TitlePropsType): React.JSX.Element;
export { Title };
export type { TitlePropsType };
