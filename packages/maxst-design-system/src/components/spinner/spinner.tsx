import React from 'react';

interface spinnerPropsType {
  width?: string;
  height?: string;
  color?: 'white' | 'black';
  className?: string;
}
const Spinner = ({ color, className, width, height }: spinnerPropsType) => {
  return (
    <span
      className={['spinner-wrap', className ? className : ''].join(' ')}
      style={{ width: width || '24px', height: height || '24px' }}
    >
      <svg
        className={['spinner', `spinner-${color ? color : 'white'}`].join(' ')}
        viewBox="0 0 50 50"
      >
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        ></circle>
      </svg>
    </span>
  );
};

export { Spinner };
