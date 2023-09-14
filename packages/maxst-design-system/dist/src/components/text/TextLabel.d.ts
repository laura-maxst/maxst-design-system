import React from 'react';
interface TextProps {
    role?: 'default' | 'sub' | 'subtlest';
    size: 'xl' | 'l' | 'm' | 's';
    className?: string;
    children: React.ReactNode;
}
declare function TextLabel({ role, size, className, children }: TextProps): JSX.Element;
export { TextLabel };
