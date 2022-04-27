import React from "react";
import { NavDesktop } from "./NavDesktop/NavDesktop";
import { NavMobile } from "./NavMobile/NavMobile";

export const NavBar = () => {
  return (
    <>
      <NavMobile />
      <NavDesktop />
    </>
  );
};
