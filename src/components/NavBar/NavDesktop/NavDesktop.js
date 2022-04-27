import React from "react";
import "./NavDesktop.scss";
import { NavLinks } from "../NavLinks/NavLinks";

export const NavDesktop = () => {
  return (
    <nav className="nav__desktop">
      Nav desktop
      <NavLinks />
    </nav>
  );
};
