import React from 'react';

interface TextPropsType {
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
}: TextPropsType) {
  return (
    <>
      {innerHtml ? (
        <p
          className={[
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
