import React from 'react';

interface TextLabelPropsType {
  role?: 'default' | 'sub' | 'subtlest';
  size: 'xl' | 'l' | 'm' | 's';
  className?: string;
  children: React.ReactNode;
}

function TextLabel({ role, size, className, children }: TextLabelPropsType) {
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
