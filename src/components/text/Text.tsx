import React from 'react';
import { pretendard } from '@util/fonts';

interface TextProps {
  role?: 'default' | 'sub' | 'subtlest';
  type?: 'body';
  size: 'l' | 'm' | 's';
  innerHtml?: boolean;
  className?: string;
  children: React.ReactNode;
}

function Text({
  role,
  type = 'body',
  size,
  innerHtml,
  className,
  children,
}: TextProps) {
  return (
    <>
      {innerHtml ? (
        <p
          className={[
            pretendard.className,
            pretendard.variable,
            `font-${type} font-${type}-${size} ${role ? role : ''}`,
            className ? className : '',
          ].join(' ')}
          dangerouslySetInnerHTML={{
            __html: String(children),
          }}
        />
      ) : (
        <p
          className={[
            pretendard.className,
            pretendard.variable,
            `font-${type} font-${type}-${size} ${role ? role : ''}`,
            className ? className : '',
          ].join(' ')}
        >
          {children}
        </p>
      )}
    </>
  );
}

export { Text };
