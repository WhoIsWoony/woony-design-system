import React from "react";
import { CommonProps } from "../props";

const Body = ({ children, className = "" }: CommonProps) => {
  return <div className={`p-2 ${className}`}>{children}</div>;
};

export default Body;
