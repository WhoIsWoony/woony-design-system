import React, { useEffect } from "react";
import { MenuProps, MenuType, SubMenuType } from "../props";
import { TextBase, TextSmall } from "../text/TextAll";

import { RecoilRoot, atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const MenuItem = ({ title, subMenues }: MenuType) => {
  const localStorage =
    typeof window !== "undefined" ? window.localStorage : undefined;

  const { persistAtom } = recoilPersist({
    key: `menu-${title}`, //원하는 key 값 입력
    storage: localStorage,
  });

  const menuState = atom({
    key: `menu-${title}`,
    default: false,
    effects_UNSTABLE: [persistAtom],
  });

  const [isOpen, setIsOpen] = useRecoilState(menuState);

  return (
    <div className="flex flex-col gap-1 py-2 focus:border-blue-400">
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen((prev: boolean) => !prev)}
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
    <RecoilRoot>
      <div className="flex flex-col px-3 h-full text-black divide-y shadow-no">
        {menues.map((menu) => (
          <MenuItem {...menu} />
        ))}
      </div>
    </RecoilRoot>
  );
};

export default Menu;
