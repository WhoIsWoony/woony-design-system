import React from "react";
import { CommonProps } from "../props";

const Full = ({ children, className = "" }: CommonProps) => (
  <div className={`flex-1 ${className}`}>{children}</div>
);

export default Full;
