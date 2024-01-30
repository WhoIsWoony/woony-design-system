import React from "react";
import { CommonProps } from "../props";

const FlexHorizontal = ({ children, className = "" }: CommonProps) => (
  <div className={`flex flex-row gap-1 ${className}`}>{children}</div>
);
export default FlexHorizontal;
