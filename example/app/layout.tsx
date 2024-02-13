import { Outlet } from "@remix-run/react";
import {
  Flex,
  FlexHorizontal,
  Menu,
  Option,
  Top,
  Full,
} from "woony-design-system";
import getMenues from "./api/dummy/menues";

const Layout = () => {
  const menues = getMenues();

  return (
    <Flex className="h-full">
      <Top />
      <FlexHorizontal>
        <Menu menues={menues} />
        <Full>
          <Outlet />
        </Full>
        <Option />
      </FlexHorizontal>
    </Flex>
  );
};

export default Layout;
