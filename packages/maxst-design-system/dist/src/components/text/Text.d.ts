import React from 'react';
interface TextPropsType {
    role?: 'default' | 'sub' | 'subtlest';
    type?: 'body';
    size: 'l' | 'm' | 's';
    innerHtml?: boolean;
    className?: string;
    children: React.ReactNode;
}
declare function Text({ role, type, size, innerHtml, className, children, }: TextPropsType): React.JSX.Element;
export { Text };
