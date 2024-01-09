import React from 'react';
interface TextLabelProps {
    role?: 'default' | 'sub' | 'subtlest';
    size: 'xl' | 'l' | 'm' | 's';
    className?: string;
    children: React.ReactNode;
}
declare function TextLabel({ role, size, className, children }: TextLabelProps): JSX.Element;
export { TextLabel };
