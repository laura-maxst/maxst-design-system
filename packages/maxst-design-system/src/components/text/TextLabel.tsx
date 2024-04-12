import React from 'react';

interface TextLabelProps {
  role?: 'default' | 'sub' | 'subtlest';
  size: 'xl' | 'l' | 'm' | 's';
  className?: string;
  children: React.ReactNode;
}

function TextLabel({ role, size, className, children }: TextLabelProps) {
  return (
    <span
      className={[
        `font-label font-label-${size} ${role ? role : ''}`,
        className ? className : '',
      ].join(' ')}
    >
      {children}
    </span>
  );
}

export { TextLabel };
