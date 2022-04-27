import React from "react";
import "./NavBar.scss";
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
