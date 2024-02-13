import React from "react";
import { InputProps } from "../props";

const Input = ({
  placeholder = "",
  value,
  onChange,
  className = "",
}: InputProps) => {
  return (
    <input
      className={`text-xs shadow appearance-none border border-blue-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-700 ${className}`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
