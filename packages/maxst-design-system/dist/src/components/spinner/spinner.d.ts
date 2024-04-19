import React from 'react';
interface spinnerPropsType {
    color?: 'white' | 'black';
    className?: string;
}
declare const Spinner: ({ color, className }: spinnerPropsType) => React.JSX.Element;
export { Spinner };
