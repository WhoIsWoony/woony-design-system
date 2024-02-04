import React, { useEffect } from "react";
import { MenuProps, MenuType, SubMenuType } from "../props";
import { TextBase, TextSmall } from "../text/TextAll";

const MenuItem = ({ title, subMenues }: MenuType) => {
  return (
    <div className="flex flex-col gap-1 py-2">
      <TextBase>{title}</TextBase>
      {subMenues.map((subMenu) => (
        <SubMenuItem {...subMenu} />
      ))}
    </div>
  );
};

const SubMenuItem = ({ title, url }: SubMenuType) => {
  const target = url.substring(1);
  return (
    <a
      id={`${target}`}
      href={`${url}#${target}`}
      className="border-none target:text-black"
    >
      <TextSmall>{title}</TextSmall>
    </a>
  );
};

const Menu = ({ menues }: MenuProps) => {
  return (
    <div className="flex flex-col px-3 bg-slate-700 h-full text-white divide-y shadow-no">
      {menues.map((menu) => (
        <MenuItem {...menu} />
      ))}
    </div>
  );
};

export default Menu;
