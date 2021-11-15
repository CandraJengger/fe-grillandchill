import React from 'react';
import { Props } from './input.props';

const Input: React.FC<Props> = ({
  value,
  inputLabel,
  onChange,
  placeholder,
  type = 'text',
}) => {
  return (
    <div className="flex flex-col mb-4">
      {inputLabel && (
        <label className="text-sm mb-2 font-medium">{inputLabel}</label>
      )}
      <input
        type={type}
        className="border border-gray-400 focus:border-primary focus:outline-none rounded-lg py-3 px-2"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
