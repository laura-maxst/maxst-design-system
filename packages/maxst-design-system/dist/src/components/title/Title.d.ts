import React from 'react';
interface TitleProps {
    role: number;
    type: 'title';
    size: 'xl' | 'l' | 'm' | 's' | 'xs';
    align?: string;
    className?: string;
    children: React.ReactNode;
}
declare function Title({ role, type, size, align, className, children }: TitleProps): React.ReactElement<{
    className: string;
}, string | React.JSXElementConstructor<any>>;
export default Title;
