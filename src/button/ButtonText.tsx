import React from "react";
import { ButtonTextProps } from "../props";

const ButtonText = ({
  className = "",
  onClick,
  children,
  type = "button",
}: ButtonTextProps) => (
  <button
    className={`bg-blue-500 hover:bg-blue-700 w-min text-white py-1 px-2 rounded-lg ${className}`}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default ButtonText;
