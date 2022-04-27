import React from "react";
import "./NavMobile.scss";
import { NavLinks } from "../NavLinks/NavLinks";

export const NavMobile = () => {
  return (
    <nav className="nav__mobile">
      Nav Mobile
      <NavLinks />
    </nav>
  );
};
