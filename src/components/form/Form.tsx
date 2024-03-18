import React from 'react';

interface formProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}
const Form = ({ id, className, children }: formProps) => {
  return (
    <div className={['mds-form', className && className].join(' ')}>
      <form id={id && id} className={['form-box'].join(' ')}>
        <fieldset>{children}</fieldset>
      </form>
    </div>
  );
};
export { Form };
