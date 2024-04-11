import React from 'react';
import { pretendard } from '@util/fonts';

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
        pretendard.className,
        pretendard.variable,
        `font-label font-label-${size} ${role ? role : ''}`,
        className ? className : '',
      ].join(' ')}
    >
      {children}
    </span>
  );
}

export { TextLabel };
