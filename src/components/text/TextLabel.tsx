import React from 'react';

interface TextProps {
  role?: 'default' | 'sub' | 'subtlest';
  size: 'xl' | 'l' | 'm' | 's';
  className?: string;
  children: React.ReactNode;
}

function TextLabel({ role, size, className, children }: TextProps) {
  return (
    <span
      className={`font-label font-label-${size} ${role ? role : ''} ${
        className ? className : ''
      }`}
    >
      {children}
    </span>
  );
}

export { TextLabel };
