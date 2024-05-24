import React from 'react';
interface spinnerPropsType {
    width?: string;
    height?: string;
    color?: 'white' | 'black';
    className?: string;
}
declare const Spinner: ({ color, className, width, height }: spinnerPropsType) => React.JSX.Element;
export { Spinner };
