import React from "react";
import { useState } from "react";
import { NavLinks } from "../NavLinks/NavLinks";
import "./NavMobile.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

export const NavMobile = () => {
  const [open, setOpen] = useState(false);
  const clickHandler = () => setOpen(!open);
  console.log("open", open);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className="nav__mobile-icon"
      size="50px"
      onClick={clickHandler}
    />
  );
  const closeIcon = (
    <GrFormClose
      className="nav__mobile-icon"
      size="50px"
      onClick={clickHandler}
    />
  );

  return (
    <nav className="nav__mobile">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
};
