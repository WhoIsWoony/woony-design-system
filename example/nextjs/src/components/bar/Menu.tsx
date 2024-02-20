"use client";
import React, { useEffect, useState } from "react";
import { TextBase, TextSmall } from "woony-design-system";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SubMenuType = {
  title: string;
  href: string;
};

export type MenuType = {
  title: string;
  sub_menu_list: SubMenuType[];
};

const MenuItem = ({ title, sub_menu_list }: MenuType) => {
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
      {isOpen &&
        sub_menu_list.map((sub_menu) => (
          <SubMenuItem key={sub_menu.title} {...sub_menu} />
        ))}
    </div>
  );
};

const SubMenuItem = ({ title, href }: SubMenuType) => {
  const now_pathname = usePathname();
  const is_active = href === now_pathname;

  return (
    <Link
      href={`${href}`}
      className={`outline-none rounded px-2 py-1 hover:bg-slate-100 ${
        is_active && "text-white bg-slate-600 hover:bg-slate-600"
      }`}
    >
      <TextSmall>{title}</TextSmall>
    </Link>
  );
};

const Menu = ({ menu_list }: { menu_list: MenuType[] }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className="flex flex-col h-full text-black divide-y shadow-no min-w-20 border-r mr-2 px-2">
        {menu_list.map((menu) => (
          <MenuItem key={menu.title} {...menu} />
        ))}
      </div>
    )
  );
};

export default Menu;
