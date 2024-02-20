import Provider from "./Provider";
import { FlexHorizontal, Full } from "woony-design-system";
import Menu, { MenuType } from "@/components/bar/Menu";
import Top from "@/components/bar/Top";
import Option from "@/components/bar/Option";

const menu_list: MenuType[] = [
  {
    title: "관리자",
    sub_menu_list: [
      { title: "페이지1", href: "/page1" },
      { title: "페이지2", href: "/page2" },
    ],
  },
  {
    title: "오늘머해",
    sub_menu_list: [
      { title: "페이지3", href: "/page3" },
      { title: "페이지4", href: "/page4" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="h-[100vh] w-[100vw]">
        <Provider>
          <Top />
          <FlexHorizontal>
            <Menu menu_list={menu_list} />
            <Full>{children}</Full>
            <Option />
          </FlexHorizontal>
        </Provider>
      </body>
    </html>
  );
}
