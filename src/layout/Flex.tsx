import React from "react";
import { CommonProps } from "../props";

const Flex = ({ children, className = "" }: CommonProps) => (
  <div className={`flex flex-col w-full gap-1 ${className}`}>{children}</div>
);
export default Flex;
