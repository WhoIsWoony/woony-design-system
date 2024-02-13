import React from "react";
import { CommonProps, FormProps } from "../props";

const Form = ({ children, className = "", onSubmit }: FormProps) => (
  <form
    className={`${className}`}
    onSubmit={(event) => {
      onSubmit();
      event.preventDefault();
    }}
  >
    {children}
  </form>
);

export default Form;
