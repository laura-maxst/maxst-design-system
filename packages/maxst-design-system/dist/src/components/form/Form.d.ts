import React from 'react';
interface formProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}
declare const Form: ({ id, className, children }: formProps) => JSX.Element;
export { Form };
