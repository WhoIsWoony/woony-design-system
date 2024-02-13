import React from "react";
import { CommonProps } from "../props";

const FlexHorizontal = ({ children, className = "" }: CommonProps) => (
  <div className={`flex flex-row h-full ${className}`}>{children}</div>
);
export default FlexHorizontal;
