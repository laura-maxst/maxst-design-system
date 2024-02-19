import React from 'react';

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
          className={`mds-root font-${type} font-${type}-${size} ${
            role ? role : ''
          } ${className ? className : ''}`}
          dangerouslySetInnerHTML={{
            __html: String(children),
          }}
        />
      ) : (
        <p
          className={`mds-root font-${type} font-${type}-${size} ${
            role ? role : ''
          } ${className ? className : ''}`}
        >
          {children}
        </p>
      )}
    </>
  );
}

export { Text };
