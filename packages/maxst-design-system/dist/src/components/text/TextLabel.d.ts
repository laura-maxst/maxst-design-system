import React from 'react';
interface TextLabelPropsType {
    role?: 'default' | 'sub' | 'subtlest';
    size: 'xl' | 'l' | 'm' | 's';
    className?: string;
    children: React.ReactNode;
}
declare function TextLabel({ role, size, className, children }: TextLabelPropsType): React.JSX.Element;
export { TextLabel };
