import React from "react";
import { TextProps } from "../props";

const HeaderLarge = ({ children, className = "" }: TextProps) => (
  <h1 className={`text-2xl ${className}`}>{children}</h1>
);
const HeaderBase = ({ children, className = "" }: TextProps) => (
  <h2 className={`text-xl ${className}`}>{children}</h2>
);
const HeaderSmall = ({ children, className = "" }: TextProps) => (
  <h3 className={`text-lg ${className}`}>{children}</h3>
);

const TextLarge = ({ children, className = "" }: TextProps) => (
  <p className={`text-base ${className}`}>{children}</p>
);
const TextBase = ({ children, className = "" }: TextProps) => (
  <p className={`text-sm ${className}`}>{children}</p>
);
const TextSmall = ({ children, className = "" }: TextProps) => (
  <p className={`text-xs ${className}`}>{children}</p>
);

export { HeaderLarge, HeaderBase, HeaderSmall, TextLarge, TextBase, TextSmall };
