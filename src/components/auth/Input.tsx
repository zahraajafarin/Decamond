'use client';

import { forwardRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

function Input({ error, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) {
  return (
    <div className="input-box">
      <input ref={ref} {...props} className="input" />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default forwardRef(Input);
