import React, { useEffect, useState } from "react";
import { MenuProps, MenuType, SubMenuType } from "../props";
import { TextBase, TextSmall } from "../text/TextAll";

const MenuItem = ({ title, subMenues }: MenuType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-1 py-2 ">
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <TextBase>{title}</TextBase>
      </div>
      {isOpen && subMenues.map((subMenu) => <SubMenuItem {...subMenu} />)}
    </div>
  );
};

const SubMenuItem = ({ title, url }: SubMenuType) => {
  const target = url.substring(1);
  return (
    <a
      id={`${target}`}
      href={`${url}#${target}`}
      className="outline-none rounded px-2 py-1 target:text-white target:bg-slate-600 target:hover:bg-slate-600 hover:bg-slate-100"
    >
      <TextSmall>{title}</TextSmall>
    </a>
  );
};

const Menu = ({ menues }: MenuProps) => {
  return (
    <div className="flex flex-col px-3 h-full text-black divide-y shadow-no">
      {menues.map((menu) => (
        <MenuItem {...menu} />
      ))}
    </div>
  );
};

export default Menu;
