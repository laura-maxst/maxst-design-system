import React from 'react';

interface formProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}
const Form = ({ id, className, children }: formProps) => {
  return (
    <div>
      <form
        id={id && id}
        className={['form-box', className && className].join(' ')}
      >
        <fieldset>{children}</fieldset>
      </form>
    </div>
  );
};
export { Form };
