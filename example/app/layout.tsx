import { Outlet } from "@remix-run/react";
import {
  Flex,
  FlexHorizontal,
  Menu,
  Option,
  Top,
  Full,
} from "woony-design-system";

const Layout = () => {
  return (
    <>
      <Flex>
        <Top />
        <FlexHorizontal>
          <Menu />
          <Full>
            <Outlet />
          </Full>
          <Option />
        </FlexHorizontal>
      </Flex>
    </>
  );
};

export default Layout;
