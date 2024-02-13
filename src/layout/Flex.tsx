import React from "react";
import { CommonProps } from "../props";

const Flex = ({ children, className = "" }: CommonProps) => (
  <div className={`flex flex-col w-full ${className}`}>{children}</div>
);
export default Flex;
