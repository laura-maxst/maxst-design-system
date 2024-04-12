import React from 'react';
interface spinnerProps {
    color?: 'white' | 'black';
    className?: string;
}
declare const Spinner: ({ color, className }: spinnerProps) => React.JSX.Element;
export { Spinner };
